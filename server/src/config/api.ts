import "dotenv/config";
import Fastify from "fastify";
import { fastifyJwt } from '@fastify/jwt';
import cors from "@fastify/cors"
import fastifyEnv from "@fastify/env";
import mercurius from "mercurius";

import { schema } from "../schemas";
import { resolvers } from "../resolvers";
import prisma from "./db";

export const startServer = () => {
  const fastify = Fastify({
    logger: true,
  });

  fastify.register(cors, {
    origin: '*', // Allow all origins
    methods: ['GET', 'PUT', 'POST'], // Allowed methods
  });

  fastify.register(fastifyJwt, {
    secret: process.env.JWT_SECRET_KEY as string,
  });

  const configSchema = {
    type: "object",
    required: ["PORT"],
    properties: {
      PORT: {
        type: "string",
        default: process.env.SERVER_PORT as string,
      },
    },
  };

  const options = {
    confKey: "config",
    schema: configSchema,
    dotenv: true,
    data: process.env,
  };

  fastify.register(fastifyEnv, options);
  fastify.register(mercurius, {
    schema,
    resolvers: resolvers,
    graphiql: true,
    context: async () => ({
      prisma,
    }),
  });

  return fastify;
};
