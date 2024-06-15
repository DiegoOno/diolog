import { startServer } from "./config/api";

const server = startServer();

server.listen({ port: parseInt(process?.env?.NODE_ENV_SERVER_PORT || "8080"), host: "0.0.0.0" });
