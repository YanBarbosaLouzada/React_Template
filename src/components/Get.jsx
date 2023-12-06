import React from 'react'
import '../styles/GetComponent.css'
function GetComponent({ titulo, ano, autor, clean, _id }) {
  return (
    <div className="card">
      {/* <img src={} alt={} className="character-image" /> */}
      <h3 class="cookieHeading">{titulo}</h3>
      <p class="cookieDescription">Espécie: {ano}</p>
      <p class="cookieDescription">Status: {autor}</p>
      <button onClick={() => clean(_id)}>Remover</button>
    </div>
  )
}

export default GetComponent