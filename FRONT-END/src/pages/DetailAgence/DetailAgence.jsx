import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import URL from '../../utils/constant/url.js';

const DetailAgence = () => {

    const params = useParams();
    const { idAgence } = params;

    const[agence, setAgence] = useState([])

    useEffect(() => {
        getAgenceById()
    }, [])

    const getAgenceById = async () => {
        try {
            const {data, status} = await axios.get(URL.GET_AGENCE_BY_ID + '/' + idAgence)
            if(status === 200) setAgence(data)
        } catch (error) {
            console.log(error.message)
        }
    }


  return (
    <div>
        <p>{agence.name}</p>
        <p>{agence.adresse} - {agence.ville} - {agence.cp}</p>
        <p>{agence.description}</p>
        <img src={agence.photo} alt={agence.name} />
    </div>
  )
}

export default DetailAgence