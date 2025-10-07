import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import URL from '../../utils/constant/url';

const DetailVehicule = () => {

    const params = useParams();
    const { idVehicule } = params;

    const [vehicule, setVehicule] = useState([])

    useEffect(() => {
        getVehiculeById()
    }, [])

    const getVehiculeById = async () => {
        try {
            const {data, status} = await axios.get(URL.GET_VEHICULE_BY_ID + '/' + idVehicule)
            if(status === 200) setVehicule(data)
        } catch (error) {
            console.log(error.message)
        }
    }




  return (
    <div>
        <p>{vehicule.agence}</p>
        <p>{vehicule.titre}</p>
        <p>{vehicule.marque}-{vehicule.modele}</p>
        <p>{vehicule.description}</p>
        <p>{vehicule.prix_journalier}</p>
        <img src={vehicule.photo} alt={vehicule.titre} />
    </div>
  )
}

export default DetailVehicule