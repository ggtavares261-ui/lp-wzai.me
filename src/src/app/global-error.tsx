
"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            Algo deu errado
          </h1>
          <p style={{ marginBottom: "1rem", color: "#666" }}>
            Desculpe, ocorreu um erro inesperado.
          </p>
          <button
            onClick={reset}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#059669",
              color: "white",
              border: "none",
              borderRadius: "0.375rem",
              cursor: "pointer",
            }}
          >
            Tentar novamente
          </button>
        </div>
      </body>
    </html>
  );
}
