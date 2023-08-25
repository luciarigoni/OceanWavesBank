import './styles.css';
import { useState, useContext } from 'react';

import { AuthContext } from '../../../context/auth';

function Conta () {
    const { authenticated, login} = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit', {email, password});
    }

    return (
        <div id="login">
            <div className='wrapper'>
            <h1 className="title">Faça seu login</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                    <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Digite seu e-mail'></input>
                </div>
                <div className="field">
                    <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Digite sua senha'></input>
                </div>
                <div className="actions">
                    <button type="submit">Entrar</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Conta;