import { startServer } from './lib/lib';

const server = startServer();
server.listen({ port: process.env.NODE_ENV_SERVER_PORT || 3000 });
