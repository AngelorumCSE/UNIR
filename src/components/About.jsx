import React from 'react'
import './About.css'

const About = () => {
    
    return (
    <div className="about-container">
        <h1>Acerca de nosotros</h1>
        <div id="info">
            Un equipo más de la asignatura de Ingeniería del Software Avanzada <br></br>
            Tratando de aprender lo máximo posible del mundo de Git y React <br></br>
            (aunque no siempre con el éxito que hubiésemos querido)<br></br>

            El código fuente de esta app se puede encontrar en git en la siguiente ruta: 
            <a href='https://github.com/AngelorumCSE/UNIR'>Repositorio git </a>
            
            
        </div>
    </div>

    )
}

export default About