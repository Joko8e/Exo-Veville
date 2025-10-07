import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import URL from '../../utils/constant/url'

const Home = () => {
  // const [accueil, setAccueil]= useState('Page d\'accueil')
  const [vehicule, setVehicule] = useState ([])

  useEffect(()=> {
    getAllVehicule()
  }, [])

  const getAllVehicule = async () => {
    try {
      const { data, status } = await axios.get(URL.GET_ALL_VEHICULE);
      if(status=== 200) setVehicule(data)
      } catch (error) {
      console.log(error.message)
      }
    }



  return (
    <>
    <h1>Veville</h1>
    {vehicule.map(item =>(
      <div key={item._id}>
        <p>{item.titre}</p>
        <p>{item.marque}</p>
        <p>{item.modele}</p>
        <img src={item.photo} alt={item.description} width={200} />
        <p>{item.prix_journalier}</p>
      </div>
    ))}
    </>
  )
}

export default Home