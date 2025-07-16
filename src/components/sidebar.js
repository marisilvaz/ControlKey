import React from "react";
import "./sidebar.css";
import { FaHome, FaUser, FaKey, FaTools, FaClipboardList, FaChartBar } from "react-icons/fa";

const SideBar = () => {
    return (
        <div className="sidebar">
            <h2> **LOGO** </h2>
            <ul>
                <li><FaHome /> Página Inicial</li>
                <li><FaUser /> Usuários</li>
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