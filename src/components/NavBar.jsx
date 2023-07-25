import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav id="sidebar" className="sidebar js-sidebar">
                <div className="sidebar-content js-simplebar">
                    <a className="sidebar-brand" href="index.html">
                        <span className="align-middle">AdminKit</span>
                    </a>
                    <ul className="sidebar-nav">
                        <li className="sidebar-header">
                            Pages
                        </li>

                        <li className="sidebar-item active">
                            <Link className="sidebar-link" to="/dashboad">
                                <i className="align-middle" data-feather="sliders"></i> <span
                                    className="align-middle">Tableau de bord</span>
                            </Link>
                        </li>

                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/membre">
                                <i className="align-middle" data-feather="user"></i> <span className="align-middle">Gestion membre</span>
                            </Link>
                        </li>

                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/Nouveau">
                                <i className="align-middle" data-feather="log-in"></i> <span className="align-middle">Gestion nouveau</span>
                            </Link>
                        </li>

                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/Finance">
                                <i className="align-middle" data-feather="user-plus"></i> <span className="align-middle">Gestion finance
                                    </span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/Planning">
                                <i className="align-middle" data-feather="square"></i> <span className="align-middle">Gestion planning</span>
                            </Link>
                        </li>

                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="ui-buttons.html">
                                <i className="align-middle" data-feather="square"></i> <span className="align-middle">Gestion statistique</span>
                            </Link>
                        </li>

                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/Communication">
                                <i className="align-middle" data-feather="square"></i> <span className="align-middle">Gestion communication</span>
                            </Link>
                        </li>

                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/materiel">
                                <i className="align-middle" data-feather="square"></i> <span className="align-middle">Gestion materiel</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/Parametre">
                                <i className="align-middle" data-feather="square"></i> <span className="align-middle">Parametre</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="sidebar-cta">
                        <div className="sidebar-cta-content">
                            <strong className="d-inline-block mb-2">Se decoonecter</strong>
                            
                            <div className="d-grid">
                                <a href="upgrade-to-pro.html" className="btn btn-primary"><i className="fa fa-sign-out"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;