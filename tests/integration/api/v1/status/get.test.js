test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch(
    "https://legendary-invention-6qgjwvv654cr5j9-5500.app.github.dev/pages/api/v1/status/index.js",
  );
  expect(response.status).toBe(200);
});
