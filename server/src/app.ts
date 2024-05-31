import { startServer } from "./config/api";

const server = startServer();

server.get("/", () => {
  return { message: "Hello World" };
})

server.listen({ port: parseInt(process?.env?.NODE_ENV_SERVER_PORT || "8080") });
