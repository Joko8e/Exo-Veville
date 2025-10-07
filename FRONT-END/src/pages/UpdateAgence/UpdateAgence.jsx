import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import URL from '../../utils/constant/url';

const UpdateAgence = () => {

    const params = useParams();
    const {idAgence} = params;

    const [agence, setAgence] = useState([])

    useEffect(() => {
        getAgenceById()
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const {data, status} = await axios.put(URL.UPDATE_AGENCE + '/' + idAgence, agence)
            if(status === 200) setAgence(data)
            console.log("Info modifié");
            
        } catch (error) {
            console.log(error.message)
        }
    }

    const handleChange = (event) => {
        const{name, value} = event.target
        setAgence(prevAgence => ({...prevAgence, [name]: value}))
    }

    const getAgenceById = async () => {
        try {
            const {data, status} = await axios.get(URL.GET_AGENCE_BY_ID + '/' + idAgence)
            if(status === 200) setAgence(data) 
        } catch (error) {
            console.log(error.message);
            
        }
    }


  return (

    <>

    <h1>Update Agence</h1>
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id='name' type="text" name='name' value={agence.name || ""} onChange={handleChange}/>

        <label htmlFor="adresse">Adresse</label>
        <input id='adresse' type="text" name='adresse' value={agence.adresse || ""} onChange={handleChange}/>

        <label htmlFor="ville">Ville</label>
        <input id='ville' type="text" name='ville' value={agence.ville || ""} onChange={handleChange}/>

        <label htmlFor="cp">CP</label>
        <input id='cp' type="number" name='cp' value={agence.cp || ""} onChange={handleChange}/>

        <label htmlFor="description">Description</label>
        <input id='description' type="text" name='description' value={agence.description || ""} onChange={handleChange}/>

        <label htmlFor="photo">Photo</label>
        <input id='photo' type="text" name='photo' value={agence.photo || ""} onChange={handleChange}/>

        <button>Envoyer</button>
    </form>
    
    </>
  )
}

export default UpdateAgence