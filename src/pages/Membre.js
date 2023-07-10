import React from "react";
import NavBar from "../components/NavBar";
import NavOt from "../components/NavOt";
import NumberDashboad from "../components/Dashboad/NumberDashboad";
import GraphiqueLineDashboad from "../components/Dashboad/GraphiqueLineDashboad";
import PaysDashboad from "../components/Dashboad/PaysDashboad";
import MembreAffiche from "../components/Membre/MembreAffiche";
import AffecterMembre from "../components/Membre/AffecterMembre";
import MembreEnfantAffiche from "../components/Membre/membreEnfantAffiche";
import Mouvementmembre from "../components/Membre/Mouvementmembre";

const Membre = () => {
    return (
        <div class="wrapper">
            <NavBar />
            <div class="main">
                <NavOt />
                <main className="content">
                    <div className="container-fluid p-0">
                        <h1 className="h3 mb-3"><strong>Gestion Membre</strong> </h1>
                        <div class="page-wrapper">
                            <div class="row">
                                <div class="card">
                                    <ul class="nav nav-tabs" role="tablist">
                                        <li class="nav-item">
                                            <a
                                                class="nav-link active"
                                                data-bs-toggle="tab"
                                                href="#home"
                                                role="tab"
                                            ><span class="hidden-sm-up"></span>
                                                <span class="hidden-xs-down">Membres</span></a
                                            >
                                        </li>
                                        <li class="nav-item">
                                            <a
                                                class="nav-link"
                                                data-bs-toggle="tab"
                                                href="#affecte"
                                                role="tab"
                                            ><span class="hidden-sm-up"></span>
                                                <span class="hidden-xs-down">Affect Membre Departement</span></a
                                            >
                                        </li>
                                        <li class="nav-item">
                                            <a
                                                class="nav-link"
                                                data-bs-toggle="tab"
                                                href="#conge"
                                                role="tab"
                                            ><span class="hidden-sm-up"></span>
                                                <span class="hidden-xs-down">Enfant Membre</span></a
                                            >
                                        </li>
                                        <li class="nav-item">
                                            <a
                                                class="nav-link"
                                                data-bs-toggle="tab"
                                                href="#mouvementM"
                                                role="tab"
                                            ><span class="hidden-sm-up"></span>
                                                <span class="hidden-xs-down">Mouvement Membre</span></a
                                            >
                                        </li>
                                        <li class="nav-item">
                                            <a
                                                class="nav-link"
                                                data-bs-toggle="tab"
                                                href="#RapportM"
                                                role="tab"
                                            ><span class="hidden-sm-up"></span>
                                                <span class="hidden-xs-down">Rapport Mouvement Membre</span></a
                                            >
                                        </li>
                                    </ul>
                                    <div class="tab-content tabcontent-border">
                                        <div class="tab-pane active" id="home" role="tabpanel">
                                            <div class="p-20">
                                                <MembreAffiche />
                                            </div>
                                        </div>
                                        <div class="tab-pane p-20" id="affecte" role="tabpanel">
                                            <AffecterMembre />
                                        </div>
                                        <div class="tab-pane p-20" id="conge" role="tabpanel">
                                            <MembreEnfantAffiche />
                                        </div>
                                        <div class="tab-pane p-20" id="mouvementM" role="tabpanel">
                                            <Mouvementmembre />
                                        </div>
                                        <div class="tab-pane p-20" id="mouvementM" role="tabpanel">
                                            <Mouvementmembre />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    )
}

export default Membre;