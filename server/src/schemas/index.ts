import { userTypeDefs } from './userSchema';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { TimestampTypeDefinition } from 'graphql-scalars';

export const schema = makeExecutableSchema({
  typeDefs: [TimestampTypeDefinition, userTypeDefs],
})