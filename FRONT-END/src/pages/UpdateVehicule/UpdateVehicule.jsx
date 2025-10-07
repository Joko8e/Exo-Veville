import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import URL from '../../utils/constant/url';

const UpdateVehicule = () => {

    const params = useParams();
    const {idVehicule} = params;

    const[vehicule, setVehicule] = useState([])

    const [allAgence, setAllAgence] = useState([])

    useEffect(()=> {
        getVehiculeById(), getAllAgence()
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const {data, status} =  await axios.put(URL.UPDATE_VEHICULE + '/' + idVehicule, vehicule)
            if(status === 200) setVehicule(data) 
            console.log("info  modifié");
            
        } catch (error) {
            console.log(error.message);
            
        }
    }

    const handleChange = async (event) => {
        const{name, value} = event.target
        setVehicule(prevVehicule => ({...prevVehicule, [name]: value}))
    }

    const getVehiculeById = async () => {
        try {
            const{data, status} = await axios.get(URL.GET_VEHICULE_BY_ID + '/' + idVehicule)
            if(status === 200) setVehicule(data)
        } catch (error) {
            console.log(error.message);
        }
    }

    const getAllAgence = async () => {
        try {
            const {data, status} = await axios.get(URL.GET_ALL_AGENCE)
            if(status === 200) setAllAgence(data)
        } catch (error) {
            console.log(error.message);
            
        }
    }




  return (
    <>

    <form onSubmit={handleSubmit}>
      <label htmlFor="titre">Titre</label>
      <input id='titre' type="text" name='titre' value={vehicule.titre || ""} onChange={handleChange}/>

      <label htmlFor="marque">Marque</label>
      <input id='marque' type="text" name='marque' value={vehicule.marque || ""} onChange={handleChange}/>

      <label htmlFor="modele">Modele</label>
      <input id='modele' type="text" name='modele' value={vehicule.modele || ""} onChange={handleChange}/>


      <label htmlFor="prix">Prix</label>
      <input id='prix' type="number" name='prix_journalier' value={vehicule.prix_journalier || ""} onChange={handleChange}/>

      <label htmlFor="photo">Photo</label>
      <input id='photo' type="text" name='photo' value={vehicule.photo || ""} onChange={handleChange} />


      <label htmlFor="description">Description</label>
      <input id='description' type="text" name='description' value={vehicule.description || ""} onChange={handleChange} />

      <label htmlFor="id_agence">Agence</label>
      <select name="id_agence" id="id_agence" value={vehicule.agence || ""} onChange={handleChange}>
        {allAgence.map(info => (
            <option value={info._id}>{info.ville}</option>))}
      </select>

      <button>Envoyer</button>
    
    </form>


    </>
  )
}

export default UpdateVehicule