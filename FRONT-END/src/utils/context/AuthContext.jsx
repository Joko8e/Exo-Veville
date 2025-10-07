import React, {createContext, useState, useEffect} from "react";

//URL
import URL from '../constant/url';
import axios from 'axios';
import { Children } from "react";

//créer un context d'authentification
export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    
    // Etat pour stocker les informations de l'utilisateur connecté
    const [user, setUser] = useState(null)

    //Fonction pour gérer l'authentification de l'user
    const login =  async (dataForm) => {
        try {
            // requete axios
            const{data, status} = await axios.post(URL.AUTH_SIGN, dataForm);

            if(status === 200) setUser(data)
        } catch (error) {
            console.log(error.message);
        }
    }

    return(
        <AuthContext.Provider value={{login, user}} >
            {children}
        </AuthContext.Provider>
    )
}