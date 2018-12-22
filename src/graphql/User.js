import gql from 'graphql-tag'

export const getAllUser = gql`
  query {
    getAllUser {
      id
      email
      pw
      store
    }
}`

export const addUser = gql`
  mutation ($email: String!, $pw: String!, $store: Int!) {
    addUser(email: $email, pw: $pw, store: $store) {
      email,
      pw,
      store
    }
}`
