const { setupServer } = require("./server");

const app = setupServer();

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}/`);
});
