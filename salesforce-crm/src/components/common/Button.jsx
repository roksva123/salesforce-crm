export default function Button({
  children,
  variant = "primary",
  ...props
}) {
  const styles = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700",

    secondary:
      "border border-gray-300 bg-white",

    danger:
      "bg-red-600 text-white",
  };

  return (
    <button
      className={`
        px-5 py-3
        rounded-xl
        font-medium
        transition
        ${styles[variant]}
      `}
      {...props}
    >
      {children}
    </button>
  );
}