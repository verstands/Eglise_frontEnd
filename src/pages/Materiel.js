import React from 'react'
import NavBar from '../components/NavBar';
import NavOt from '../components/NavOt';
import MaterielMateriel from '../components/Materiel/materielMateriel';
import AddMateriel from '../components/Materiel/AddMateriel';
import MaterielPdfId from '../components/Materiel/MaterielPdfId';

const Materiel = () => {
    return (
        <div class="wrapper">
            <NavBar />
            <div class="main">
                <NavOt />
                <main className="content">
                    <div className="container-fluid p-0">
                        <h1 className="h3 mb-3"><strong>Gestion Materiels</strong> </h1>
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
                                                <span class="hidden-xs-down"><i class="fas fa-user-circle"></i>Materiels</span></a
                                            >
                                        </li>
                                        <li class="nav-item">
                                            <a
                                                class="nav-link"
                                                data-bs-toggle="tab"
                                                href="#adds"
                                                role="tab"
                                            ><span class="hidden-sm-up"></span>
                                                <span class="hidden-xs-down"><i class="fas fa-add"></i> Ajouter un materiel</span></a
                                            >
                                        </li>
                                        <li class="nav-item">
                                            <a
                                                class="nav-link"
                                                data-bs-toggle="tab"
                                                href="#conge"
                                                role="tab"
                                            ><span class="hidden-sm-up"></span>
                                                <span class="hidden-xs-down"><i class="fas fa-add"></i> Rappor materiel</span></a
                                            >
                                        </li>
                                    </ul>
                                    <div class="tab-content tabcontent-border">
                                        <div class="tab-pane active" id="home" role="tabpanel">
                                            <div class="p-20">
                                                <MaterielMateriel />
                                            </div>
                                        </div>
                                        <div class="tab-pane p-20" id="adds" role="tabpanel">
                                            <AddMateriel />
                                        </div>
                                        <div class="tab-pane p-20" id="conge" role="tabpanel">
                                            <MaterielPdfId />
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

export default Materiel