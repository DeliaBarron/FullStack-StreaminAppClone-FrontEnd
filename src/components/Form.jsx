import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useMutation } from "@apollo/client"
import{CREATE_MOVIE} from '../graphql/Mutation.js'


const Form = () => {
    const navigate=useNavigate()
    const [title,setTitle]=useState("")
    const[description,setDes]=useState("")
    const [relDate, setRelDate]=useState("")
    const[image,setImage]=useState("")

    const[createMovie]=useMutation(CREATE_MOVIE,{})
    return (
    <div className="container-fluid form-container">
     <form className="py-3" onSubmit={async (e)=>{
        e.preventDefault()
        await createMovie({
            variables:{title,description,relDate,image}
        })
        navigate('/home')
     }}>
        <div className="mb-3 row">
             <label className="form-label" htmlFor="">Movie title</label>
             <input className="form-control" type="text"  onChange={(e)=>{
                setTitle(e.target.value)
                // console.log(title)
             }} />
        </div>
        <div className="mb-3 row" >
             <label className="form-label" htmlFor="">Movie description  </label>
             <input className="form-control" type="text" onChange={(e)=>{
                setDes(e.target.value)
             }}  />
        </div>
        <div className="mb-3 row">
             <label className="form-label" htmlFor="">Movie release date </label>
             <input className="form-control" type="text" onChange={(e)=>{
                setRelDate(e.target.value)
             }}  />
        </div>
        <div className="mb-3 row">
             <label className="form-label" htmlFor="">Movie image  </label>
             <input className="form-control" type="text" onChange={(e)=>{
                setImage(e.target.value)
             }} />
        </div>
        <button type="submit" className="btn btn-outline-light mb-2">
             Save
        </button>
     </form>
    </div>
  )
}

export default Form