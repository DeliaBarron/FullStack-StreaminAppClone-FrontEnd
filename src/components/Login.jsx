import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useLazyQuery } from "@apollo/client"
import { GET_MOVIES, GET_USERS } from "../graphql/Query.js"



const Login = () => {
    const navigate = useNavigate()
    const[email, setEmail]=useState("")
    const[password, setPassword]=useState("")
    const[isInvalid,setIsInValid]=useState("")

    const [getUsers,{error,data}]=useLazyQuery(GET_USERS,{
        variables:{email, password}
    })

  return (
    <div className="container-fluid form-container">
        <div className="logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/HBO-Logo.svg/1200px-HBO-Logo.svg.png" alt="" />
        </div>
        <form className="py-3" onSubmit={async(e)=>{
            e.preventDefault()
            await getUsers().then((res)=>{
                var data=res.data.getUsers
                if(!data.length){
                    setIsInValid('Invalid Credentials')
                    console.log(data)
                }else{
                    navigate('/home')
                    console.log(data)
                }
            })
            
        }}
        >
            <div className="row">
                <label htmlFor="">Email</label>
                <input type="text" className="form-control" onChange={(e)=>{
                    setEmail(e.target.value)
                }}/>
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="password" className="form-control" onChange={(e)=>{
                    setPassword(e.target.value)
                }}/>
            </div>
            <div><span>{isInvalid}</span></div>
            <button type="submit" className="btn btn-outline-light mt-2">
                LogIn
            </button>
        </form>
        
    </div>
  )
}

export default Login