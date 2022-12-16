import {gql} from '@apollo/client'

export const CREATE_MOVIE=gql `
mutation createMovie($title:String!, $description:String!,$image:String!,$relDate:String!){
    createMovie(input:{title:$title, description:$description,image:$image,relDate:$relDate}){
        _id
        title
        description
        image
        relDate
    }
}
`
export const UPDATE_MOVIE=gql`
mutation updateMovie($likes:String,$_id:ID){
    updateMovie(likes:$likes, _id:$_id){
        _id
        title
        description
        likes
        image
        relDate
    }
}
`

