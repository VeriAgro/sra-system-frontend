type AlertProps = {
  type: "success" | "warning" | "failure";
  message: string;
};

export function Alert({ type = "success", message }: AlertProps) {
  const styles = {
    success: "bg-green-100 border-green-500 text-green-700",
    warning: "bg-yellow-100 border-yellow-500 text-yellow-700",
    failure: "bg-red-100 border-red-500 text-red-700",
  };

  if (!message) return null;

  return (
    <div
      role="alert"
      class={`px-4 py-3 rounded border ${styles[type]} relative`}
    >
      <span class="block sm:inline">{message}</span>
    </div>
  );
}