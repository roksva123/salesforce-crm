import { useEffect, useState } from "react";
import { landingService } from "../services/landing.service";

export default function useLanding() {
  const [landing, setLanding] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    landingService
      .getLanding()
      .then(({ data }) => {
        if (!cancelled) {
          setLanding(data);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return {
    landing,
    loading,
  };
}
