import React from "react";
import "./sidebar.css";
import { FaHome, FaUser, FaKey, FaTools, FaClipboardList, FaChartBar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="sidebar">
            <h2> **LOGO** </h2>
            <ul>
                <li><FaHome /><Link to="/">Página Inicial</Link></li>
                <li><FaUser /><Link to="/user">Usuários</Link></li>
                <li><FaKey /> Chaves</li>
                <li><FaTools /> Equipamentos</li>
                <li><FaClipboardList /> Reservas</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li><FaChartBar /> Relatório</li>
            </ul>
        </div>
    );
};

export default SideBar; 