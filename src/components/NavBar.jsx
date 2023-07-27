import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [loading, setLoading] = useState(true);
    const menu = useSelector((state) => state.menuReducer);

    useEffect(() => {
        setLoading(false);
    }, [menu]);
    return (
        <>
            <nav id="sidebar" className="sidebar js-sidebar">
                <div className="sidebar-content js-simplebar">
                    <a className="sidebar-brand" href="index.html">
                        <span className="align-middle">Nom eglise</span>
                    </a>
                    <ul className="sidebar-nav">
                        <li className="sidebar-header">
                            Pages
                        </li>
                        

                        {menu && menu.length > 0 ? (
                            menu.map((mn) => {
                                return (
                                    <li className="sidebar-item">
                                        <Link className="sidebar-link" to={mn.id_menu && mn.id_menu.lien}>
                                            <i className={mn.id_menu && mn.id_menu.icon}></i> <span
                                                className="align-middle">{mn.id_menu && mn.id_menu.nom_menu}</span>
                                        </Link>
                                    </li>
                                )
                            })
                        ) : (
                            <center>
                                <li className="fa fa-pulse fa-spinner" style={{color : 'white'}}></li>
                            </center>
                        )}


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