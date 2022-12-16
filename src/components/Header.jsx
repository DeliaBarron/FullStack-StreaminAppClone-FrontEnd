import { Form, Nav, Navbar, NavLink } from "reactstrap"
import { Link } from "react-router-dom"

const Header = () => {
  return (
      <Navbar fixed="top">
        <Nav>
            <Link to='/' className="navbar-link">Home</Link>
          
            <Link to='/create-movie' className="navbar-link">New Movie</Link>
        </Nav>
        
        <Nav>
          <Link to='/login' className="navbar-link">LogIn</Link>
        </Nav>
      </Navbar>

  )
}

export default Header