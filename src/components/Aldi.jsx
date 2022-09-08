import React , { useState,useEffect }from 'react'
import firebaseDB from '../firebase'
import"./Aldi00.css"
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const Aldi = () => {
    const handleSubmit = (e) =>{
        e.preventDefault()











        
        firebaseDB.child('costs').push(state02,(err) =>{
                
            if(err){
              console.log(err);
            }else{
              console.log("richtig")
            }
           });
        console.log("hamaza")
    }
    const initialState01={
   
  
       prix:'0',
       bemerkung:""
   
        
        }
        const initialState02={
   
  
          prix:'0',
          klamotten:'0',
          rest:'0',
          Lebensmittel :'0',
          bemerkung :""




        
           
           }
 
        const [state01,setstate01]=useState(initialState01);
        const [state02,setstate02]=useState(initialState02);
       
        const handleInputChange1= (e) =>{
            const {name,value,} =e.target;
            console.log("dafi3",categori02  )
            setstate01({...state01,[name]:value})




          
           if(categori02 === "klamotten" ||  categori02=="rest" ||  categori02 === "Lebensmittel"  ||categori02=="droguerie"){
           
            console.log("dafyy")
         

         

            setstate02({
              einkauf :'Aldi',
              klamotten:'0',
              rest:'0',
              Lebensmittel:'0',
              droguerie:'0',
              bemerkung:'k',

              [categori01] :prix01,
             
  

              [categori02]  :prix02,
              prix: Number(prix01)+Number(prix02),
              datum:datum,
              bemerkung:bemerkung

              
           })
        

           }else{
           

            setstate02({
              einkauf :'Aldi',
              klamotten:'0',
              rest:'0',
              Lebensmittel:'0',
              droguerie:'0',
              bemerkung:"",

              [categori01] :prix01,
              bemerkung:'',
              prix: Number(prix01),
              datum:datum,
              bemerkung:bemerkung


              
           })
           }
            
        
 

            

            
            console.log("hamza hastate",state02)
         
                        
            setstate01.prix=Number(state01.prix01 )+  Number(state01.prix02) 
          
          
          
          }
          const [total,setTotal]=useState(0);
          const [isActive, setIsActive] = useState(false);
          const [isActive1, setIsActive1] = useState(false);
          const [isActive2, setIsActive2] = useState(false);
          const [isActive3, setIsActive3] = useState(false);
          const [isActive4, setIsActive4] = useState(false);

          const AddField = (e) =>{
          e.preventDefault()
    
            setIsActive(current => !current);
          }
          const AddField1 = (e) =>{
            e.preventDefault()
              
              setIsActive1(current => !current);

            }
            const AddField2 = (e) =>{
                e.preventDefault()
          
                  setIsActive2(current => !current);
                }
                const AddField3 = (e) =>{
                    e.preventDefault()
              
                      setIsActive3(current => !current);
                    }
                    const AddField4 = (e) =>{
                        e.preventDefault()
                  
                          setIsActive4(current => !current);
                        }
        
                        const { categori01 ,prix01,bemerkung,datum ,categori02,prix02,bemerkung02} = state01;                
  return (
    <div>
        <div className='Grusse'>

        

       ah  schon wieder bei Aldi
       <div className='Frage'>
        wann warst du einkaufen Kerstin?
       </div>
           <div style={{marginTop:"20px"}}>
     <form style={{
        margin:"10px",
        padding :"1rem",
        maxWidth : "1500px",
        alignContent:"center"
     }} onSubmit={handleSubmit}>
       <div >
       <input  className='enterDate' type="date" name="datum" value={datum}  onChange={handleInputChange1}
        
        />
        </div>
        <div className='erste'>

       
        <label  className='KategorieLabel'    htmlFor='name'>  Kategorie</label>
      
        <select   className='KategorieSelect' id='categorie01' name='categori01'  onChange={handleInputChange1}>
   <option > drogueri</option>
    <option >Lebensmittel </option>
    <option  >klamotten</option>
    <option  > rest</option>

 
 
    </select>
   
         <label   className='PrixLabel'  htmlFor='name'  name='prix01'  > preis </label>
        <input  className='PrixInput' type="number" placeholder="entrer votre prix"   name='prix01' onChange={handleInputChange1}
        />
        <button onClick={AddField}> {isActive ? <FaMinus></FaMinus>: <FaPlus></FaPlus>}</button>
         </div>



           <div  className="weiterInput erste" style={{  display: isActive ? '' : 'none'}}>

           <label  className='KategorieLabel'    htmlFor='name'>  Kategorie</label>
           <select  className='KategorieSelect' id='categori02' name='categori02' onChange={handleInputChange1}  >
   <option > drogueri</option>
    <option >Lebensmittel </option>
    <option  >klamotten</option>
    <option  > rest</option>

    </select>
    <label   className='PrixLabel'  htmlFor='prix'> preis </label>
        <input   className='PrixInput' type="number" placeholder="entrer votre prix" name='prix02' onChange={handleInputChange1}
        />
     
        <button onClick={AddField1}> {isActive1 ? <FaMinus></FaMinus>  : <FaPlus></FaPlus>}</button>
         </div>


         <div className="weiterInput1 erste" style={{  display: isActive1 ? '' : 'none'}}>

         <label  className='KategorieLabel'    htmlFor='name'>  Kategorie</label>
           <select  className='KategorieSelect'  id='categorie02' name='categori01'  value={state01}  onChange={handleInputChange1}>
   <option > drogueri</option>
    <option >Lebensmittel </option>
    <option  >klamotten</option>
    <option  > rest</option>

    </select>
    <label     className='PrixLabel'  htmlFor='name1'> preis </label>
        <input   className='PrixInput' type="number" placeholder="entrer votre prix" name='prix02'  
        />
       
        <button onClick={AddField2}> {isActive2 ?  <FaMinus></FaMinus> : <FaPlus></FaPlus>}</button>
         </div>
        <div>
        <label className='BemerkungLabel'    htmlFor='bemerkung'    > bemerkung      </label>
        <input className='BemerkungInput'  type="text" placeholder="entrer votre nom "  name='bemerkung'  onChange={handleInputChange1}
        
        />
        <div className='TotalePreise' >
        total einkauf ist { Number(state01.prix01 )+  Number(state01.prix02)}
        
        </div >
       <button  className='btn' onClick={handleSubmit} onChange={handleInputChange1}>   add</button>
      

       </div>

        </form>
     
        </div>
         </div>   


         
    </div>
  )
}

export default Aldi
