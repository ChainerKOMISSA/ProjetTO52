import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Detailsevents() {
    //Déclaration des variables 
    const {idEvenement} = useParams();
    const [event, setEvent] = useState(null);

    //Envoi d'une requête à l'API
    useEffect(() => {
        fetch(`http://127.0.0.1:5000/getevent/${idEvenement}`)
        .then(response => response.json())
        .then(data => {
            setEvent(data.event);
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des détails de l\'évènement:', error)
        })
    }, [idEvenement])

    return (
        <div>
            <h2>Voici les détails</h2>
        </div>
    )
  
}

export default Detailsevents