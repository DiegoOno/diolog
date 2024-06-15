import { startServer } from "./config/api";

const server = startServer();

server.listen({ port: parseInt(process?.env?.SERVER_PORT as string), host: "0.0.0.0" });
