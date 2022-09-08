export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button
      style={{
        padding: "0.45rem 2rem",
        textTransform: "uppercase",
        backgroundColor: "#3DBDF6",
        border: "none",
        borderRadius: "0.1rem",
        color: "#fff",
        fontWeight: "800",
        letterSpacing: "0.6px",
        width: "fit-content",
        margin: "0 auto",
      }}
    >
      {children}
    </button>
  );
}
