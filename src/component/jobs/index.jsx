import Header from '../header';
import { useEffect,useState } from 'react';
import Cookies from 'js-cookie'
import DisplayAlljobs from '../displayAlljobs';
import FilterSec from '../filterSection';

import './index.css'


const Jobs = ()=>{

  const token = Cookies.get("jwtToken");

  const [allValue,setValue] = useState({
       
    userList: [],
    userInput: "",
    emptype:[],
    minpackage:[]


  })

  useEffect (()=>{                  

  const onFetchUserdata = async()=>{

    // console.log(allValue.userCheck);

  const api = `https://apis.ccbp.in/jobs?employment_type=${allValue.emptype}&minimum_package=${allValue.minpackage}&search=${allValue.userInput}`;



  const options = {
 
   method: "Get",
 
   headers : {
 
     Authorization: `Bearer ${token}`
   }
  }

  try {
    
     
 const response = await fetch(api,options);
 
 const data = await response.json();
 
 console.log(data);

 if(response.ok === true){

  setValue({...allValue,userList: data.jobs})
 }

  } catch (error) {

    console.log(error);

    
  }

}

onFetchUserdata();

},[allValue.userInput,allValue.emptype,allValue.minpackage]);

const onGetKeyuser =(e)=>{

  if(e.key === "Enter"){

    // console.log(e.key)
    // console.log(e.target.value)
  setValue({...allValue,userInput: e.target.value})

  }

}


const randerAllData = (value,isChecked)=>{

  if(isChecked === true){

      setValue({...allValue,emptype : [...allValue.emptype,value]});
  }
  else{

      setValue({...allValue,emptype : allValue.emptype.filter(each => each !== value)})
  }


}



const randerRadio = (value)=>{


  setValue({...allValue,minpackage:value});

}



return(
  <>
  <Header/>
  {/* <Background/> */}
    
  <div className="job-bg-first">

  <div className='three-cont-div'>
    <div>
      <h1>Jobs</h1>
    </div>

    <div>
      <p>Search your career opportunity through 12,800 jobs</p>
    </div>

<div className="search-main-bg">
    <div className='search-form'>
    <input  onKeyUp={onGetKeyuser} className="form-control mr-sm-2 inputsearch" style={{width:"60vw"}} type="search" placeholder="Search" aria-label="Search" />
    </div>

  </div>  
  </div>
  </div>
  

<br /><br />
  

   <div className=' main-f-d-cont container'>

     <div className='filter-disply-cont'>

        <div className=' filter-cont'>

          <div className='fil-color-box'>
          <FilterSec userCheckdata={randerAllData} radioCheckdata={randerRadio }/>

          </div>
        </div>

    <div className='all-jobs-cont p-4 d-flex flex-column align-items-center displayalljobs'>

        <ul className=' p-4'>
          {
                                                         //props 
            allValue.userList.map(each =><DisplayAlljobs userDetails ={each} key={each.id} />)

          }

        </ul>
      </div>

     </div>


  </div> 

  <br /><br />

  </>

)
}

export default Jobs;