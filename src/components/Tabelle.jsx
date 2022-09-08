import React , { useEffect, useState } from 'react'
import Header from './Header'
import firebaseDB from '../firebase'
import {ToastContainer} from 'react-toastify'
import { toast } from 'react-toastify';
import {Link} from 'react-router-dom';
import "./Tabelle.css"

const Tabelle = () => {

    const [data , setData]= useState({});
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
   const onDelete = (id) =>{

    if(window.confirm("bghiti tsuprimmer had lpatient ")){
      firebaseDB.child(`costs/${id}`).remove((err)=>{
         if(err){
          toast.error(err)
         }else{
          toast.success("safi tsuprimer")
         }
      })
    }
 
  }


  return (
<div>

 <Header></Header>
 
 


    <div style={{marginTop:"50px"}}>
    
      <h1 className='greating'>  hey kerstin  das sind dein kosten</h1>
  <table className='table-stayled'>
    
    <thead>
      <tr>
      <th style={{textAlign:"center"}}> nr</th>
          <th style={{textAlign:"center"}}> Einkauf Platz</th>
          <th style={{textAlign:"center"}}>Datum</th>
          <th className='handy' style={{textAlign:"center"}}>Lebensmitel</th>
          <th className='handy'style={{textAlign:"center"}}> klamotten </th>
          <th className='handy'style={{textAlign:"center"}}>droguerie</th>
          <th  className='handy'style={{textAlign:"center"}}> rest</th>
           <th className='handy' style={{textAlign:"center"}}>Bemerkung</th>
           <th  style={{textAlign:"center"}}>prix</th>
           <th  style={{textAlign:"center"}}>Action</th>
          
        </tr>
    </thead>
    <tbody>
    {Object.keys(data).map((id,index)=>{
      return (
       <tr key ={id}>
        <th>{index+1}</th>
        <td>{data[id].einkauf}</td>
        <td>{data[id].datum}</td>
        <td className='handy'>{data[id].Lebensmittel}</td>
        <td className='handy'>{data[id].klamotten }</td>
        <td className='handy'>{data[id].droguerie}</td>
        <td className='handy' >{data[id].rest}</td>
        <td className='handy'>{data[id].bemerkung}</td>
        <td >{data[id].prix}</td>

        <td>
        {   <Link to= {`/update/${id}`}>
            <button className='btn btn-edit'>edit </button>
            
            </Link>
 }
          
       
            {<button className='btn btn-delete'  onClick={()=> onDelete(id)}>delete </button> }
          
           
          <Link to ={`/view/${id}`}>
         
          </Link>

          
          
          
          <Link to ={`/view/${id}`}>
            <button className='btn btn-view'>view </button>
          </Link>
        </td>
       </tr>

      );
    }
    
    )}
    </tbody>
  </table>
    </div>
    </div>
  )
}

export default Tabelle
