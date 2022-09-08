import React , { useState,useEffect }from 'react'
import Header from './Header'
import "./AddCost.css"
import Aldi from './Aldi'
import Netto from './Netto'



const initialState={
     
   
  search :" no key",
  status :"no  category"

}
const initialState01={
   
 
search01 :"nokey",
status01 :"nocategory"

}

const  initialStatetab={

nom:"no name",
Typee:"no type"

}



const AddCost = () => {
  const [isActive, setIsActive] = useState(false);

  const AddField = () =>{

    
    setIsActive(current => !current);
  
  }
  const [statetabe,setstatetabe]=useState(initialStatetab);


  const [state,setstate]=useState(initialState);
  

  const [state01,setstate01]=useState(initialState01);

  const {search,status} = state
  const {search01,status01} = state01


const handleInputChange1= (e) =>{
  const {name,value,} =e.target;

 
  setstate01({...state01,[name]:value})



}
const karim ="hamza";
    const handleSubmit = (e) =>{
       let hamza= "hahia azebi";
        e.preventDefault();
       
          
         
      
            
              setstatetabe({ 
               nom: state.search,
               Typee :state.status})

              
               
             
    }


  return (
    <div>
    <div>
      <Header/>
    </div>
    <div >

    <div className='frageSelect'>
      Welcome Kerstine  vo wo  hast du wider deine Geld ausgegeben
      <div class="custom-select00">
      <select  className='HauptSelect' id='status01' name='status01'  value={status01}  onChange={handleInputChange1}>
   <option > Aldi</option>
    <option >Kaufland </option>
    <option  >Netto</option>
    <option  > DM</option>
    <option  >Freizei</option>
    <option  > Fahrkosten</option>
    <option  >Klamotten</option>

   
 
    </select>
    
    </div>
    </div>  
    </div>
    <div>
      {status01 ==="Aldi" && <Aldi/>}
      {status01 ==="Netto" && <Netto/>}
      
     
      </div>
</div>
  
  )
}

export default AddCost
