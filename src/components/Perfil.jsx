import React from 'react'
import './Perfil.css'

function Perfil ({ user , logintext}) {
  
    console.log('Logintext:', logintext);
    return (
    <div className="perfil-container">
        <h2>Datos del perfil {user}</h2><br></br>
        Último login: {logintext}
        
    </div>

    )
}

export default Perfil