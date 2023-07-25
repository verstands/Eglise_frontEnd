import React from "react";
import NavBar from "../components/NavBar";
import NavOt from "../components/NavOt";
import AfficheRecetteFinance from "../components/Fincance/RecetteFinance";
import AfficheDepenseFinance from "../components/Fincance/AfficheDepenseFinance";
import InventaireFinance from "../components/Fincance/IventaireFinance";
import ConsultationFinance from "../components/Fincance/ConsultationFinance";
const Finance = () => {
    return (
        <div class="wrapper">
            <NavBar />
            <div class="main">
                <NavOt />
                <main className="content">
                    <div className="container-fluid p-0">
                        <h1 className="h3 mb-3"><strong>Gestion Fincance</strong> </h1>
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
                                                <span class="hidden-xs-down"><i class="fas fa-user-circle"></i>Recette</span></a
                                            >
                                        </li>
                                        <li class="nav-item">
                                            <a
                                                class="nav-link"
                                                data-bs-toggle="tab"
                                                href="#affecte"
                                                role="tab"
                                            ><span class="hidden-sm-up"></span>
                                                <span class="hidden-xs-down"><i class="fas fa-exchange"></i>Consultation</span></a
                                            >
                                        </li>
    
                                        <li class="nav-item">
                                            <a
                                                class="nav-link"
                                                data-bs-toggle="tab"
                                                href="#depense"
                                                role="tab"
                                            ><span class="hidden-sm-up"></span>
                                                <span class="hidden-xs-down"><i class="fas fa-exchange"></i>Depense</span></a
                                            >
                                        </li>
                                        <li class="nav-item">
                                            <a
                                                class="nav-link"
                                                data-bs-toggle="tab"
                                                href="#inventaire"
                                                role="tab"
                                            ><span class="hidden-sm-up"></span>
                                                <span class="hidden-xs-down"><i class="fas fa-exchange"></i>Consultation depense</span></a
                                            >
                                        </li>
                                    </ul>
                                    <div class="tab-content tabcontent-border">
                                        <div class="tab-pane active" id="home" role="tabpanel">
                                            <div class="p-20">
                                                <AfficheRecetteFinance />
                                            </div>
                                        </div>
                                        <div class="tab-pane p-20" id="affecte" role="tabpanel">
                                            <ConsultationFinance />
                                        </div>
                                        <div class="tab-pane p-20" id="depense" role="tabpanel">
                                            <AfficheDepenseFinance />
                                        </div>
                                        <div class="tab-pane p-20" id="inventaire" role="tabpanel">
                                            <InventaireFinance />
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

export default Finance;