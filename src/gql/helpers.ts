import { loadSchema } from '@graphql-tools/load'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'

import { createOrGetDb } from '../db';

const db = createOrGetDb();

const importSchema = (schemaPath: string) => {
  const basePath = './src/gql/modules/';
  
  const filepath = basePath + schemaPath;
  return loadSchema(filepath, { loaders: [new GraphQLFileLoader()] })
}

export { db, importSchema };
