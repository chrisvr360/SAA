"use client";

export default function GlobalError({ error, reset }) {
  // Log the full error to the console
  console.error(error);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 style={{ color: "red" }}>Something went wrong!</h1>
      <p>
        <strong>Error:</strong> {error.message}
      </p>
      <pre
        style={{
          whiteSpace: "pre-wrap",
          background: "#f7f7f7",
          padding: "1rem",
        }}
      >
        {error.stack}
      </pre>
      <button
        onClick={() => reset()}
        style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
      >
        Try again
      </button>
    </div>
  );
}
