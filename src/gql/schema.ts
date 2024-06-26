import { mergeSchemas } from "@graphql-tools/schema";

import UserSchema from "./modules/users/users";

const models = [UserSchema];

const definition = models.reduce(
  (acc, model) => {
    acc.typeDefs = acc.typeDefs.concat(model.typeDefs);
    acc.resolvers = acc.resolvers.concat(model.resolvers);
    return acc;
  },
  { typeDefs: [], resolvers: [] }
);

export const schema = mergeSchemas(definition);
