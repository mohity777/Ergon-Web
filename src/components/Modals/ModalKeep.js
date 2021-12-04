import React from 'react'
import { Link } from 'react-router-dom'
import Modale from '../Modal/Modal'
import styleApp from './Modals.module.css'

const ModalKeep = () => {
    return (
        <div>
        
        <Link class={`${styleApp.primary_default_btn} ${styleApp.sideRfq}`} to="##"><i data-feather="plus"></i><Modale/></Link>
        </div>
    )
}

export default ModalKeep
