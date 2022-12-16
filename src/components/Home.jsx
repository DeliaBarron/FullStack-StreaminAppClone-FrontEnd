import { GET_MOVIES } from "../graphql/Query"
import { UPDATE_MOVIE } from "../graphql/Mutation"
import { useLazyQuery, useMutation } from "@apollo/client"
import { useEffect, useState } from "react"
//react-strapComponents
import {Button, Card, CardBody, CardFooter, CardText, CardTitle } from "reactstrap"
import { useLocation } from "react-router-dom"

const Home = () => {
  // const location=useLocation()
  // const locationState=location.state
  const [updateMovie]=useMutation(UPDATE_MOVIE,{})
  var[likesCount, setLikesCount]=useState(0)
  var[id,setId]=useState("")


  useEffect(()=>{
    getMovies()
  },[])

  const [getMovies,{error,data}]=useLazyQuery(GET_MOVIES)
  if (error)return<h1>ERROR LAZY QUERY</h1>
  if (data){
    console.log(data)
  }

  return (
    <div className="row home-cards">
      {
        data &&
        data.getMovies.map(({_id, title, description,likes, relDate, image})=>(
          <div className="col-3 mb-2" key={_id}>
          <Card className="mainCard mx-3 mt-3" >
          <img className="mt-2" src={image} alt="image" style={{
        height:300, alignSelf: 'center'
      }} />
            <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardText>{description}</CardText>
            <CardText>{relDate}</CardText>
            </CardBody>
            <CardFooter key-id={_id}>
              <Button onClick={async(e)=>{
                e.preventDefault()
                let cardKeyId=e.target.parentElement.getAttribute('key-id')
                setId(cardKeyId)
                console.log(id)
                  setLikesCount(likesCount+= 1)
                console.log(likesCount)
                await updateMovie({variables:{likesCount,id}})
                // console.log()                
              }}>
                likes: {likes}
              </Button>
            </CardFooter>
          </Card>
        </div>
        ))
      }
    </div>
  )
}

export default Home