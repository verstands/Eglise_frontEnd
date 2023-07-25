import React from "react";
import NavBar from "../components/NavBar";
import NavOt from "../components/NavOt";
import AffichePlannig from "../components/Plannig/AffichePlannig";
import AfficheCommunication from "../components/Communication/AfficheCommunication";
import AddCommunication from "../components/Communication/AddCommunication";
const Communication = () => {
    return (
        <div class="wrapper">
            <NavBar />
            <div class="main">
                <NavOt />
                <main className="content">
                    <div className="container-fluid p-0">
                        <h1 className="h3 mb-3"><strong>Gestion Communication</strong> </h1>
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
                                                <span class="hidden-xs-down"><i class="fas fa-user-circle"></i>Liste de communications</span></a
                                            >
                                        </li>
                                        <li class="nav-item">
                                            <a
                                                class="nav-link"
                                                data-bs-toggle="tab"
                                                href="#adds"
                                                role="tab"
                                            ><span class="hidden-sm-up"></span>
                                                <span class="hidden-xs-down"><i class="fas fa-user-circle"></i>Envoyer un comminiquer</span></a
                                            >
                                        </li>
                                    </ul>
                                    <div class="tab-content tabcontent-border">
                                        <div class="tab-pane active" id="home" role="tabpanel">
                                            <div class="p-20">
                                                <AfficheCommunication />
                                            </div>
                                        </div>
                                        <div class="tab-pane p-20" id="adds" role="tabpanel">
                                            <AddCommunication />
                                        </div>
                                        <div class="tab-pane p-20" id="conge" role="tabpanel">
                                            
                                        </div>
                                        <div class="tab-pane p-20" id="mouvementM" role="tabpanel">
                                            
                                        </div>
                                        <div class="tab-pane p-20" id="mouvementM" role="tabpanel">
                                            
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

export default Communication;