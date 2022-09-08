import React  ,{ useEffect, useState } from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom'
import firebaseDB from '../firebase'
import {Link} from 'react-router-dom'
import './view.css'

const View = () => {
    const[patient, setPatient]= useState({})
    const {id} = useParams()
    useEffect(() =>{
      firebaseDB.child(`costs/${id}`).get().then((snapshot)=>{
        if(snapshot.exists()) {
            setPatient({...snapshot.val()})
        }else{
            setPatient({})
        }

      })
    },[id])
  return (
    <div>
        <Header></Header>
        <div   style={{marginTop:"50px"}} className='card'>

            <div className='card-header'>
              

            </div>

            <div className='conatiner0'>
                <p> einkauf  detaails </p>
                <strong> ID:</strong>
                <span> {id} </span>
                <br/>
                <br/>
                <strong> einkauf:</strong>
                <span> {patient.einkauf} </span>
                <br/>
                <br/>
                <strong>total:</strong>
                <span> {patient.prix} </span>
                <br/>
                <br/>
                <strong>droguerie:</strong>
                <span> {patient.droguerie} </span>
                <br/>
                <br/>

                <strong>Lebensmittel:</strong>
                <span> {patient.Lebensmittel} </span>
                <br/>
                <br/>
                <strong>rest:</strong>
                <span> {patient.rest} </span>
                <br/>
                <br/>
                <strong>bemerkung:</strong>
                <span> {patient.bemerkung} </span>
                <br/>

                <br/>
                <Link to ='/Tabelle'>
                    <button className='btn btn-edit'> zurück</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default View
