import React from 'react'
import "../styles/Errorpage.css"
import { Link } from 'react-router-dom'

function Errorpage() {
  return (
    <div id='errorPage'>
      <h1>Esta pagina não existe</h1>
      <h2>ERROR 404</h2>
      <h6><Link to='/'>Voltar a página inicial</Link></h6>
    </div>
  )
}

export default Errorpage
