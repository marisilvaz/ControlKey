import React from 'react';
import './User.css';
import SideBar from "../components/sidebar";

function User() {
    return (
        <div className="usuarios-container">
            <header className="usuarios-header">
                <h2>Usuários</h2>
                <span>Olá, Fulano de Tal!</span>
            </header>

            <div className="usuarios-filtros">
                <input type="text" placeholder="Nome completo" />
                <select>
                    <option>Selecione o tipo de usuário</option>
                </select>
            </div>

            <div className="usuarios-acoes">
                <button>Adicionar Usuário</button>
                <button>Pesquisar</button>
            </div>

            <table className="usuarios-tabela">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Tp_usuário</th>
                        <th>Telefone</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {[...Array(6)].map((_, i) => (
                        <tr key={i}>
                            <td>Celula</td>
                            <td>Celula</td>
                            <td>Celula</td>
                            <td>Celula</td>
                            <td><button className="editar-btn">✏️</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default User;