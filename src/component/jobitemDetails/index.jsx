import Header from '../header';
import './index.css'
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react';
import { FaStar,FaBriefcase } from "react-icons/fa";
import { FaLocationDot, } from "react-icons/fa6";


const JobitemsDetails =()=>{

    //  console.log(useParams());

    const {id} = useParams();

    // console.log(id);

    const token = Cookies.get("jwtToken");

    const [allValues,setValues] = useState({

      allDetails: {}
       
    })


    const [allSkills,setSkills] = useState({

            Skills :[]
    })

    const [allLifeCompany,setLifeCompay] = useState({

           lifeAtCompany: {}
    })

    const [allsimilarJobs, setsimilarJobs] = useState({

         similarJobs: []
    })


    useEffect(()=>{

    const OnfetchuserDetails =async()=>{

      const api =`https://apis.ccbp.in/jobs/${id}`
      
      const options = {

        method : "Get",
         
        headers: {

          Authorization: `Bearer ${token}`
        }
      }

      try {

        const response = await fetch(api,options)

      const data =await response.json();

      if(response.ok === true){

          setValues({...allValues,allDetails:data.job_details})

          setLifeCompay({...allLifeCompany,lifeAtCompany:data.job_details.life_at_company})

          setSkills({...allSkills,Skills:data.job_details.skills})

          setsimilarJobs({...allsimilarJobs,similarJobs:data.similar_jobs})
      }

      console.log(data);
        
      } catch (error) {
        
        console.log(error);
      }
    }

    OnfetchuserDetails();

  },[]);

  return(

  <>

  <Header/>

    <br /><br /><br />
    <div className='job-details-content-cont'>
          
            <li className='job-details-card'>

              <div className='jobs-all-top-cont'>
                  
                  <div className='mr-2'>
                  <img src={allValues.allDetails.company_logo_url} />
                  </div>

                  <div>

                    <h2>{allValues.allDetails.title}</h2>

                    <FaStar className='mr-1 text-warning' />
                     <span>{allValues.allDetails.rating}</span>
                  </div>

              </div>
{/* ------------------------- */}
       <br /><br />

         <div className='location-brief-salary-cont-cont'>

            <div className='location-briaf-salary-cont'>

               <FaLocationDot className='mr-1' />
                <span className='mr-3'>{allValues.allDetails.location}</span>

                <FaBriefcase className='mr-1' />
               <span>{allValues.allDetails.employment_type}</span>
               </div>
               <br /><br />
               <h4>{allValues.allDetails.package_per_annum}</h4>   

      </div>
            <hr />
            <div className='description-const'>

            <h2>Description</h2>

            <p>{allValues.allDetails.job_description}</p>
            </div>
<br />


<h2 className='skill-icon-content' >Skills</h2>
<br />

<div className="jobs-skills-cont">
<br />
<br />

<ul>

{
    allSkills.Skills.map(each=>(
    <div>

          <li key={each.id} className="skill-each-cont mr-5">

      <span className='icon-name'>
    

        <img src={each.image_url} className='skill-icon'/>
        <p className='skill-name'>{each.name}</p>
        
        </span>
    </li>

    </div>
    ))
}  

</ul>

</div> 





<br /><br />

<div className='company-job-cont-cont'>

  <div>

  <h2>Life Company</h2>

  <p>{allLifeCompany.lifeAtCompany.description}</p>

  </div>

   <div>

    <img src={allLifeCompany.lifeAtCompany.image_url} />
   </div>


</div>

<br /><br />

   </li>
</div>





<br /><br /><br /><br />

<div className='common-list-details-cont'>


   <ul>

    {

    allsimilarJobs.similarJobs.map((each=>

      <li key={each.id} className='common-list-details'>

      <div className='logo-title'>

        <div>
        <img src={each.company_logo_url} className='mr-3'/>
        </div>

      <div>

      <h3 >{each.title}</h3>

      </div>

        </div>

        <hr />

        <h2>Description</h2>

        <span className='each-info'>{each.job_description}</span>

<br /><br />
        <FaLocationDot />

        <span className='m-2'>{each.location}</span>  

        <FaBriefcase className='mr-2' />

        <span>{each.employment_type}</span>    

      </li>
    ))

    }



   </ul>

</div>
  

  </>

  )
}

export default JobitemsDetails;