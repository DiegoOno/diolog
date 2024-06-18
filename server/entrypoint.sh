#!/bin/sh

# Run Prisma migrations
npx prisma migrate dev

# Start the Fastify server
npm start