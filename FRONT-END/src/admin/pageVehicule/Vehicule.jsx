import axios from 'axios'
import React, { use, useEffect, useState } from 'react'
import URL from '../../utils/constant/url'
import { Link } from 'react-router-dom'

const Vehicule = () => {

  const[vehicule, setVehicule] = useState({
    id_agence:"",
    titre: "",
    marque:"",
    modele:"",
    description:"",
    photo:"",
    prix_journalier: ""
  })

  const [allVehicule, setAllVehicule] = useState([])
  const [allAgence, setAllAgence] = useState([])

  useEffect(()=> {
    getAllVehicule(), getAllAgence()
  },[])

  const getAllVehicule =  async () => {
    try {
      const {data, status} = await axios.get(URL.GET_ALL_VEHICULE)
      if(status === 200) setAllVehicule(data)
    } catch (error) {
      console.log(error.message);
      
    }
  }

  const deleteVehicule = async (id) => {
    try {
      const {data, status} =  await axios.delete(URL.DELETE_VEHICULE_BY_ID + '/' + id)
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

  const handleChange = (event) => {
    const{name, value} = event.target
    setVehicule(prevVehicule => ({...prevVehicule, [name]: value}))
  }

  const handleSubmit = async (event) =>{
    event.preventDefault();
    try {
      console.log("aaaaa",vehicule);
      const {status} = await axios.post(URL.POST_VEHICULE, {
        ...vehicule,
        prix_journalier: parseInt(vehicule.prix_journalier)
      })
      if(status === 201) console.log('Vehicule ajouté')
      
    } catch (error) {
      console.log(error.message)
    }
  }


  return (
    <>
    
    <table className="table table-striped table-bordered">
        <thead className='table-dark'>
            <tr>
                <th>Vehicule</th>
                <th>Agence</th>
                <th>Titre</th>
                <th>Marque</th>
                <th>Modele</th>
                <th>Description</th>
                <th>photo</th>
                <th>Prix</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {allVehicule.map((item, index) => (
                <tr key={item._id}>
                    <td>{index}</td>
                    <td>{item.id_agence?.ville}</td>
                    <td>{item.titre}</td>
                    <td>{item.marque}</td>
                    <td>{item.modele}</td>
                    <td>{item.description}</td>
                    <td><img src={item.photo} alt={item.name} width={200}/></td>
                    <td>{item.prix_journalier}</td>
                    <td>
                        <Link className="btn btn-info me-2" to={{pathname:`detail/${item._id}`}}>
                            <i className='bi bi-eye'></i>
                        </Link>
                        <Link className='btn btn-warning me-2' to={{pathname: `update/${item._id}`}}>
                            <i className='bi bi-pencil'></i>
                        </Link>
                        <button className='btn btn-danger' onClick={() => deleteVehicule(item._id)}>
                            <i className='bi bi-trash'></i>
                        </button>
                    </td>
                </tr>
                ))}
        </tbody>
    </table>


    <form onSubmit={handleSubmit}>
      <label htmlFor="titre">Titre</label>
      <input id='titre' type="text" name='titre' onChange={handleChange}/>

      <label htmlFor="marque">Marque</label>
      <input id='marque' type="text" name='marque' onChange={handleChange}/>

      <label htmlFor="modele">Modele</label>
      <input id='modele' type="text" name='modele' onChange={handleChange}/>


      <label htmlFor="prix">Prix</label>
      <input id='prix' type="number" name='prix_journalier' onChange={handleChange}/>

      <label htmlFor="photo">Photo</label>
      <input id='photo' type="text" name='photo' onChange={handleChange} />


      <label htmlFor="description">Description</label>
      <input id='description' type="text" name='description' onChange={handleChange} />

      <label htmlFor="id_agence">Agence</label>
      <select name="id_agence" id="id_agence" onChange={handleChange}>
        {allAgence.map(info => (
        <option value={info._id}>{info.ville}</option>))}
      </select>

      <button>Envoyer</button>
    
    </form>

    </>
  )
}

export default Vehicule