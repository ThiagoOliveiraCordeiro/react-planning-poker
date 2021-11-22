import React, { useState } from 'react';
import './HelloWorld.css'

function HelloWorld (props) {

    const [nome, setNome] = useState('seu nome...')

    function changeNome (e) {
        setNome(e.target.value)
    }

    return (
        <div className="row">
            <div className="col p-1 text-center">
                <p>Bom dia, {nome}!</p>
                <input type="text" name="nome" onChange={(e) => { changeNome(e) }} placeholder="Seu nome"></input>
            </div>
        </div>
    )
}

export default HelloWorld;