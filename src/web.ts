import http from 'node:http';

const PORT = Number(process.env.PORT) || 5500;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("✅ AFKBot is alive!");
});

export default (): void => {
  server.listen(PORT, "0.0.0.0", () =>
    console.log(`Web server running at port ${PORT}`)
  );
};
