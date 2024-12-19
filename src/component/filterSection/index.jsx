import './index.css';

const EmployeType = [

    {
        label : "Full Time",
        jobtype : "FULLTIME"
    },

    
    {
        label : "Part Time",
        jobtype : "PARTTIME"
    },

    {
        label :"Freelance",
        jobtype : "FREELANCE"
    },

    {
        label :"Internship",
        jobtype : "INTERNSHIP"
    }

]



const salaryRange =[

    {
        salaryId:"1000000",
        label :"10 LPA And Above"
    },

    {
        salaryId:"2000000",
        label :"20 LPA And Above"
    },

    {
        salaryId:"3000000",
        label :"30 LPA And Above"
    },


    {
        salaryId:"4000000",
        label :"40 LPA And Above"
    }
]





const FilterSec = (props)=>{

const{userCheckdata}=props;

const{radioCheckdata}=props;


    const randreAllUser =()=>{

        const CheckboxEl =(e)=>{

            console.log(e.target.value)
            userCheckdata(e.target.value,e.target.checked);
        }

        return (


            <ul className='filter-cont-filter'>
            <br /><br/>

                <h5>Type of Employment</h5>

                
            {

            EmployeType.map((each)=>(
              <li key={each.label}>

              <input type="checkbox" className='m-2' value={each.jobtype} id={each.jobtype} onChange={CheckboxEl}/>

                  <label htmlFor={each.jobtype}>{each.label}</label>
                  

               </li>

          ))
            
            }
            </ul>

        )


    }


    const randersallary = ()=>{


        const RadioBoxEl = (e)=>{


            radioCheckdata(e.target.value);
           

        }

        return(

        <ul className='filter-cont-filter'>

        <h5>Salary Range</h5>

            {
    salaryRange.map((each)=>(

        <li key={each.label}>
                        <input type="radio" className='m-2' name="salary" id={each.salaryId}  value={each.salaryId} onChange={RadioBoxEl} />
                        <label htmlFor={each.salaryId}>{each.label}</label>
                    </li>
                ))
            }
        </ul>
        )
    }
 

return(
<div>
{randreAllUser()}
{randersallary()}

</div>

);
    
}

export default FilterSec;