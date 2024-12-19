
import './index.css'
import Header from '../header';
import { IoCallOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Footer from '../footer';

const Jobservice = ()=> {
  return (

    <>

    <Header/>
   
      <div className='main-bg-const'>
           
           <div className='bg-top-backside-color'>

                   <div className='box'>
                      <img src="image/resumeboy.png"/>

                        <h4 style={{textAlign:"center"}}>Highlight your peofile</h4>
                        <p style={{textAlign:"center"}}>Your profile is given a higher rank when recruiters search CVs of active candidates in  database</p>
                   </div>
                   <div className='box'>

                    <img src="image/cartoon boy.png"  />
                    <h4 style={{textAlign:"center"}}>Highlight your peofile</h4>
                    <p style={{textAlign:"center"}}>Your profile is given a higher rank when recruiters search CVs of active candidates in  database</p>
                   </div>
                   <div className='box '>

                    <img src="image/calgirl.png" width="270px" />
                    <h4 style={{textAlign:"center"}}>Highlight your peofile</h4>
                    <p style={{textAlign:"center"}}>Your profile is given a higher rank when recruiters search CVs of active candidates in  database</p>
                   </div>

           </div>

           <div className='white-bottom-bg'>


               <div className='search-png-info'>

                      <div className='img-search'> 

                        <img src="image/seachpng.png"  />
                      </div>

                      <div className='heading-parag'>
                        
                             <h1>resume</h1>
                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eum non perferendis officiis necessitatibus numquam temporibus tempora dignissimos unde cum. Odio exercitationem nemo illo iusto quas asperiores harum recusandae quasi.</p>
                      </div>

                  
               </div>
                  
      
           </div>

      </div>


      <div className='second-service-page container col-5'>


               <div className='cl-info-cont'>
             
                      <div className='cl-info-cont-cont'>
  
                     <h4><IoCallOutline />Talk to us</h4>
                       <br />

                     <p>Call us tall free</p> 

                     <p>9:00 AM to 9:00 Pm</p> 

                     <p>International Customer Call   <Link> +18298737332</Link></p> 

                  </div>

                 
               </div>

               <div className='contact-cont'>

                     <div className='contact-cont-cont col-11'>

                             <h3>Contact us</h3>
                          
                           <form >
                                
                                Name <br />
                                <input type="text" className='form-control' placeholder='type your name here' />
                                <br />
                                Email <br />
                                <input type="email"  className='form-control' placeholder='type your email here' />
                                <br />
                                Mobile No <br />
                                <input type="number"  className='form-control'  placeholder='type your mobile number here' />
                                <br />
                                Write Your Quary here: <br />
                                <input type="text"  className='form-control' placeholder='eg. I am interested' />
                                <br />

                                <input type="Submit" />

                                </form> 
                     </div>


               </div>


        </div>

        <br /><br /><br /><br /><br /><br />

        <Footer/>


    </>


  )
}

export default Jobservice;
