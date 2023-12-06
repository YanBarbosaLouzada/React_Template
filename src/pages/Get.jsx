import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import GetComponent from '../components/Get';
import '../styles/GetComponent.css'
function CharacterList() {
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        const fetchLivros = async () => {
            try {
                const response = await axios.get('http://localhost:4000/livros/');
                setLivros(response.data);
            } catch (error) {
                console.error("Erro ao buscar os livros:", error);
            }
        };

        fetchLivros();
    }, []);
    function clean(id) {
        setLivros(livros.filter(u => u._id !== id))
    }

    return (

        <div >
            <Navbar />

            <div className='card-container'>
                {
                    livros.map(livro => <GetComponent key={livro._id} clean={clean}{...livro} />)
                }
            </div>
        
           

        </div >
    );
}

export default CharacterList;
