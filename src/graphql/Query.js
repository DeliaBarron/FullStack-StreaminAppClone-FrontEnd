import {gql} from '@apollo/client'

export const GET_MOVIES=gql`
    query getMovies{
        getMovies{
            _id
            title
            description
            likes
            image
            relDate
        }
    }
`
export const GET_USERS= gql`
    query getUsers($email:String!, $password:String!){
        getUsers(input:{email:$email, password:$password}){
            _id
            email
            password
        }
    }
`