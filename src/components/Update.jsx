import React , { useEffect, useState } from 'react'
import firebaseDB from '../firebase'
import {useNavigate, useParams} from 'react-router-dom';
import Header from './Header';
import"./update.css"
import {Link} from 'react-router-dom'
const initialState={
    name :'',
    email:'',
   contact:'',
   fees :'',
    status :'not paye',
    sex:'',
    nachname:''


}

const initialState02={
  name :'',
  email:'',
 contact:'',
 fees :'',
  status :'not paye',
  sex:'',
  nachname:''


}


const Update = () => {
  const edit = (e) =>{
    e.preventDefault()



    onDelete(id)
    
    firebaseDB.child('costs').push(state,(err) =>{
            
        if(err){
          console.log(err);
        }else{
          console.log("richtig")
        }
       });
    console.log("hamaza")
}


const onDelete = (id) =>{

    firebaseDB.child(`costs/${id}`).remove((err)=>{
   
    })
  

}

const handleInputChange1= (e) =>{
    const {name,value,} =e.target;
  
   
    setstate01({...state,[name]:value})
    setstate02({...state,[name]:value})
    
    setstate({...state,[name]:value, prix:Number(state.Lebensmittel)+Number(state.rest)})
    console.log("dafi33",state01)
  
  
  
  }
    const [data , setData]= useState({});
    
    
    const {id} = useParams()
    const [state02,setstate02]=useState(initialState02);
    const [state,setstate]=useState(initialState);
    const [state01,setstate01]=useState(initialState);

    useEffect(()=>{
        firebaseDB.child('costs').on("value",(snapshop) =>{
         if(snapshop.val() !=null){
           setData({...snapshop.val()})
         }else{
           setData({})
         }
        })
        return () =>{
         setData({})
         console.log("hamza",data)
        }
   },[])
   const {einkauf,datum,Lebensmittel,droguerie,rest,prix} = state02;
   useEffect(()=>{
    if (id){
     setstate({...data[id]})
   
  
    }else{
     setstate({...initialState})
    }
    },[id,data])
    console.log("dafy",state)
  return (
    
    <div>
      <Header></Header>
      <div style={{marginTop:"50px"}}>
        <form>
       

      <div className='seconde'>
      <label >einkauf</label>

  
            <select   className='KategorieSelect'   name='einkauf'  value={state.einkauf} onChange={handleInputChange1}>
   <option > Aldi</option>
    <option >Lebensmittel </option>
    <option  >klamotten</option>
    <option  > rest</option>
</select>
<label >date </label>
            <input className='BemerkungInput'  type="date" placeholder="entrer votre nom "
value={state.datum} name='datum'
onChange={handleInputChange1}/>
    </div>
<div className='second'>
<label className='lebensmittel' >lebensmittel </label>
            <input className='BemerkungInput'  type="number" placeholder="entrer votre nom "
value={state.Lebensmittel} name='Lebensmittel'
onChange={handleInputChange1} />
<label >droguerie </label>
            <input className='BemerkungInput'  type="number" placeholder="entrer votre nom "
value={state.droguerie} onChange={handleInputChange1} name='droguerie'/>
<div className='third'>
<label >rest</label>
            <input className='BemerkungInput'  type="number" placeholder=''
 name='rest' value={state.rest}
onChange={handleInputChange1}/>




<label >bemerkung</label>
            <input className='BemerkungInput'  type="text" placeholder="no comment "
value={state.bemerkung } 
onChange={handleInputChange1} name='bemerkung'/>
</div>
<div>
<div>
<button  className='btn btn-edit' onClick={edit}> edit </button>
<Link to ='/Tabelle'>
<button className='btn btn-edit'> Zurück</button>
</Link>
</div>
</div>

</div>
           
        </form>
        <div className='textende'>
        dein total einkauf ist  ist  {state.prix}
        </div>
    </div>
    </div>
  )
}

export default Update
