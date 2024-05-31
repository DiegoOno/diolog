import 'dotenv/config';
import Fastify from 'fastify';
import fastifyEnv from '@fastify/env';

export const startServer = () => {
  const fastify = Fastify({
    logger: true
  });

  const schema = {
    type: 'object',
    required: [ 'PORT' ],
    properties: {
      PORT: {
        type: 'string',
        default: process.env.NODE_ENV_SERVER_PORT || 8080,
      },
    },
  };

  const options = {
    confKey: 'config',
    schema,
    dotenv: true,
    data: process.env
  }

  fastify.register(fastifyEnv, options);

  return fastify;
};
