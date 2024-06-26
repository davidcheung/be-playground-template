import { Resolvers } from '~/gql/modules/generated-types'
import { db, importSchema } from '~/gql/helpers'

export const schema = await importSchema('users/user.graphql')

const resolvers: Resolvers = {
  Query: {
    users: async (_, args, context) => {
      return db.query.users.findMany()
    },
    user: async (_, args, context) => {
      console.log(context.req.headers)
      return db.query.users.findFirst({ where: (user, {eq}) => eq(user.id, args.id)})      
    },
  },
  User: {
    updatedAt: async (user, args, context) => {
      return user.updatedAt?.toISOString()
    }
  }
};

export default {
  typeDefs: [schema],
  resolvers ,
}
