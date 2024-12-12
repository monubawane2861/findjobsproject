import { useEffect, useState } from 'react';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';
import './index.css'



const Login =()=>{


  const [allValue,setValue] = useState({

    username: "",
    password: "",
    Errormsg: ""
  });

  const navigate = useNavigate();
  const token = Cookies.get("jwtToken");

  // console.log(token)

  const onSubmitUserForm = async (e)=>{

      e.preventDefault();

      const api = "https://apis.ccbp.in/login"

      const userData  = {

        username: allValue.username,
        password: allValue.password
      }


      const options = {

        method : "Post",

        body : JSON.stringify(userData)
      }

    try {


      const response = await fetch(api,options)

      const data = await response.json();

      console.log(data.error_msg);

      if(response.ok ===true){
      
        setValue({...allValue,Errormsg : ""})

        Cookies.set("jwtToken" , data.jwt_token);

        navigate('/');

      }

      else{

        setValue({...allValue,Errormsg : data.error_msg})
      }
      
     } catch (error) {

      console.log(error);

      
     }
      

  }


useEffect(()=>{


  if(token !== undefined){

    navigate('/');
  }

},[])  

  return(

    <div className='login-cont'>

    <form onSubmit={onSubmitUserForm}>
  <div className="form-group">
     <h2 style={{textAlign:"center", fontFamily:"fantasy"}}>Welcome!!</h2>
     <br />
    <label htmlFor="exampleInputEmail1">username</label>
    <input type="text" onChange={(e)=>{setValue({...allValue,username: e.target.value})}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your username with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input onChange={(e)=>{setValue({...allValue,password: e.target.value})}}  type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" className="btn btn-primary  submitbtn">Submit</button>
  <br /><br />
</form>

<br />

<p className="text-danger">{allValue.Errormsg}</p>

</div>

  )


}




export default Login;