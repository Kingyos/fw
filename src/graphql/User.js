import gql from 'graphql-tag'

export const getAllUser = gql`
  query {
    getUser {
      id
      email
      pw
      store
    }
}`
