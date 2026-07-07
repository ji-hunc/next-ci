export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui", padding: "3rem", lineHeight: 1.6 }}>
      <h1>🚀 Next.js is running on a CI runner</h1>
      <p>
        This page is being served by <code>next start</code> inside a GitHub
        Actions job, exposed to the internet through a tunnel.
      </p>
      <p>
        Served at: <strong>{new Date().toISOString()}</strong> (build time)
      </p>
      <p>
        Env <code>SERVED_FROM</code>:{" "}
        <strong>{process.env.SERVED_FROM ?? "local"}</strong>
      </p>
    </main>
  );
}
