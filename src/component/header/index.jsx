import { Link } from 'react-router-dom';
import './index.css'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'

const Header =()=>{

  const navigate = useNavigate();

  const token = Cookies.get("jwtToken")

  const onLogoutButton = ()=>{

    Cookies.remove("jwtToken")

    navigate("/Login")

  }


  return(

  <div>

<div className='mob-view'>
  
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <Link to= "/" className='logo'>
          <span  style={{fontSize:"30px", fontFamily:"Bebas Neue", color:"black"}}>jobs <span  style={{color:"#f06f35", fontFamily: "Bebas Neue", letterSpacing: "5px"}}> <span style={{fontFamily:"fantasy", fontSize:"34px"}}>L</span>izard</span></span>
        </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link to="/jobs"  className="nav-link" href="#">Find Jobs</Link>
            </li>

            <li className="nav-item">
              <Link to="/blog"  className="nav-link" href="#">Blog</Link>
            </li>

            <li className="nav-item">
              <Link to="/jobservice"  className="nav-link" href="#">Job Service</Link>
            </li>
           
      <br />
        </ul>

      <div className='log-btn-mob'>
      <button className="logbtn" onClick={onLogoutButton}>Logout</button>
      </div>
    </div>
</nav>

  

</div>


<div className='lap-view'>

    <nav className="my-nav fixed-top" style={{backgroundColor:"white"}}>
        <Link to= "/" className='logo'>
          <span  style={{fontSize:"30px", fontFamily:"Bebas Neue", color:"black"}}>jobs <span  style={{color:"#f06f35", fontFamily: "Bebas Neue", letterSpacing: "5px"}}> <span style={{fontFamily:"fantasy", fontSize:"34px"}}>L</span>izard</span></span>
        </Link>

        <ul className="nav-ul-cont">

          <li>
            <Link to="/" className="my-nav-items" >Home</Link>
          </li>
          <li>

           <Link to="/jobs" className="my-nav-items" > Jobs</Link>
          </li>

          <li>

      <Link to="/blog" className="my-nav-items" >Blog</Link>
      </li>

      <li>

    <Link to="/jobservice" className="my-nav-items" > Job Service</Link>
    </li>

        </ul>

    <button className="logbtn" onClick={onLogoutButton}>Logout</button>
      
    </nav>
</div>
</div>
  )

}

export default Header;