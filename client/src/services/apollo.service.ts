import { apiUrl } from '@/utils/constants/env.const'
import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: apiUrl + '/graphql',
  cache: new InMemoryCache()
})
