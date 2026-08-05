export function Alert({
  type = "error",
  children,
}: {
  type?: "error" | "success" | "info";
  children: React.ReactNode;
}) {
  const styles = {
    error: "bg-alert/10 text-alert border-alert/20",
    success: "bg-safe/10 text-safe border-safe/20",
    info: "bg-kraft/10 text-ink border-kraft/30",
  };

  return (
    <div className={`border-2 rounded-xl px-4 py-3 text-sm font-medium mb-4 ${styles[type]}`}>
      {children}
    </div>
  );
}
