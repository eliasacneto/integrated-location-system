import React from 'react'
import MenuAppBar from '../../components/MenuAppbar/MenuAppBar'
import ButtonCard from '../../components/ButtonCard/ButtonCard'
import './Welcome.css'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <>
    <MenuAppBar />
    <div className='btn-cards'>

    
    <ButtonCard title="Acessar como Administrador"
    link="/admin"> </ButtonCard>
    <p> ou </p>
    <ButtonCard title="Acessar como Colaborador"/>
    </div>
    </>
  )
}

export default Welcome