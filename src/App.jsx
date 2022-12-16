import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import Form from './components/Form'
import Login from './components/Login'
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  const client=new ApolloClient({
    cache: new InMemoryCache(),
    uri:'http://localhost:3000'
  })

  return (
    <div className="App">
      <Router>
        <ApolloProvider client={client}>
          <Header></Header>
          <Routes>
            <Route path='/create-movie' element={<Form/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route index element={<Login/>}></Route>
          </Routes>
        </ApolloProvider>
      </Router>
    </div>
  )
}

export default App
