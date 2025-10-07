import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router'

////Page
import Home from './pages/HomePage/Home'
import Nothing from './pages/PageNothing/Nothing'
import DetailAgence from './pages/DetailAgence/DetailAgence'



///ADMIN
import Vehicule from './admin/pageVehicule/Vehicule'
import Agence from './admin/pageAgence/Agence'
import Dashboard from './admin/pageDashboard/Dashboard'
import UpdateAgence from './pages/UpdateAgence/UpdateAgence'
import DetailVehicule from './pages/DetailVehicule/DetailVehicule'

//// TEMPLATE
import Template from './components/template/Template'
import TemplateAdmin from './components/template/TemplateAdmin'
import UpdateVehicule from './pages/UpdateVehicule/UpdateVehicule'




function App() {

  return (
    <Routes>
      <Route path='/' element={<Template/>}>
        <Route index element={<Home/>}/>
        
      </Route>

      <Route path='/dashboard'element={<TemplateAdmin/>}>
        <Route index  element={<Dashboard/>}/>
        <Route path='agence' element={<Agence/>}/>
        <Route path='agence/detail/:idAgence' element={<DetailAgence/>}/>
        <Route path='agence/update/:idAgence' element={<UpdateAgence/>}/>
        <Route path='vehicule' element={<Vehicule/>}/>
        <Route path='vehicule/detail/:idVehicule' element={<DetailVehicule/>}/>
        <Route path='vehicule/update/:idVehicule' element={<UpdateVehicule/>}/>
      </Route>

      <Route path='*' element={<Nothing/>}/>

    </Routes>
  )
}

export default App
