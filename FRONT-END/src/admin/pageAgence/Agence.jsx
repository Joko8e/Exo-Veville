import axios from 'axios';
import React, { useEffect, useState } from 'react'
import URL from '../../utils/constant/url.js';
import { Link } from 'react-router-dom';
import { AGENCE_FIELDS } from '../../utils/config/FormFields.js';

const Agence = () => {

    const [agence, setAgence] = useState({
        name: "",
        adresse:"",
        ville:"",
        cp: "",
        description:"",
        photo:""
    });

    const [allAgence, setAllAgence] = useState([])

    useEffect(()=> {
        getAllAgence()
    }, [])

    const getAllAgence = async () => {
        try {
            const {data, status} = await axios.get(URL.GET_ALL_AGENCE)
            setAllAgence(data)
        } catch (error) {
            console.log(error.message)
        }
    }

    const deleteAgence =  async (id) => {
        try {
            const {data, status} = await axios.delete(URL.DELETE_AGENCE + '/' + id)
            if(status === 200) console.log('Agence supprimé')
        } catch (error) {
            console.log(error.message)
        }
    }


    const handleChange = (event) => {


        const{name, value} = event.target  
        setAgence(prevAgence => ({...prevAgence, [name]: value }))
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const {status} = await axios.post(URL.POST_AGENCE, {
                ...agence,
                cp: parseInt(agence.cp)
            })
            if(status === 201){
                console.log('Agence ajouté!');
            }
        } catch (error) {
            console.log(error.message);
        }
    }



  return (
    <>
    <table className="table table-striped table-bordered">
        <thead className='table-dark'>
            <tr>
                <th>Name</th>
                <th>Adresse</th>
                <th>Ville</th>
                <th>CP</th>
                <th>Description</th>
                <th>Photo</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {allAgence.map((item, index) => (
                <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.adresse}</td>
                    <td>{item.ville}</td>
                    <td>{item.cp}</td>
                    <td>{item.description}</td>
                    <td><img src={item.photo} alt={item.name} width={200}/></td>
                    <td>
                        <Link className="btn btn-info me-2" to={{pathname:`detail/${item._id}`}}>
                            <i className='bi bi-eye'></i>
                        </Link>
                        <Link className='btn btn-warning me-2' to={{pathname: `update/${item._id}`}}>
                            <i className='bi bi-pencil'></i>
                        </Link>
                        <button className='btn btn-danger' onClick={() => deleteAgence(item._id)}>
                            <i className='bi bi-trash'></i>
                        </button>
                    </td>
                </tr>
                ))}
        </tbody>
    </table>


    <form className= 'd-flex' onSubmit={handleSubmit}>
        {AGENCE_FIELDS.map(field => (
          <div key={field.id}>
            <label htmlFor={field.id}>{field.label} : </label>
            <input  
              type={field.type}
              name={field.name}
              id={field.id}
              placeholder={field.placeholder}
              onChange={handleChange}
            />
          </div>
        ))}
        <button>Envoyer</button>
      </form>
    {/* <form className='d-flex' onSubmit={handleSubmit}>
    <label htmlFor="name">Name</label>
    <input id='name' type="text" name='name' onChange={handleChange}/>

    <label htmlFor="adresse">Adresse</label>
    <input id='adresse' type="text" name='adresse' onChange={handleChange}/>

    <label htmlFor="ville">Ville</label>
    <input id='ville' type="text" name='ville' onChange={handleChange}/>

    <label htmlFor="cp">CP</label>
    <input id='cp' type="number" name='cp' onChange={handleChange}/>

    <label htmlFor="description">Description</label>
    <input id='description' type="text" name='description' onChange={handleChange}/>

    <label htmlFor="photo">Photo</label>
    <input id='photo' type="text" name='photo' onChange={handleChange}/>

    <button>Envoyer</button>
    </form> */}
    </>
  )
}

export default Agence