import "dotenv/config";
import Fastify from "fastify";
import fastifyEnv from "@fastify/env";
import mercurius from "mercurius";

import { schema } from "../schemas";
import { resolvers } from "../resolvers";
import prisma from "./db";

export const startServer = () => {
  const fastify = Fastify({
    logger: true,
  });

  const configSchema = {
    type: "object",
    required: ["PORT"],
    properties: {
      PORT: {
        type: "string",
        default: process.env.NODE_ENV_SERVER_PORT || 8080,
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
