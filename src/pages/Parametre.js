import React from 'react'
import NavBar from '../components/NavBar'
import NavOt from '../components/NavOt'
import Caisse from '../components/Parametre/caisse'
import DepartementParametre from '../components/Parametre/DepartementParametre'
import CategorieMembre from '../components/Parametre/CategorieMembre'
import CulteParametre from '../components/Parametre/CulteParametre'

const Parametre = () => {
  return (
    <div class="wrapper">
            <NavBar />
            <div class="main">
                <NavOt />
                <main className="content">
                    <div className="container-fluid p-0">
                        <h1 className="h3 mb-3"><strong>Parametre</strong> </h1>
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
                                                <span class="hidden-xs-down"><i class="fa-solid fa-cash-register"></i>Caisse</span></a
                                            >
                                        </li>
                                        <li class="nav-item">
                                            <a
                                                class="nav-link"
                                                data-bs-toggle="tab"
                                                href="#departement"
                                                role="tab"
                                            ><span class="hidden-sm-up"></span>
                                                <span class="hidden-xs-down"><i class="fa-solid fa-building"></i>Departement</span></a
                                            >
                                        </li>
                                        <li class="nav-item">
                                            <a
                                                class="nav-link"
                                                data-bs-toggle="tab"
                                                href="#mouve"
                                                role="tab"
                                            ><span class="hidden-sm-up"></span>
                                                <span class="hidden-xs-down"><i class="fa-solid fa-passport"></i>Mouvement</span></a
                                            >
                                        </li>
                                        <li class="nav-item">
                                            <a
                                                class="nav-link"
                                                data-bs-toggle="tab"
                                                href="#pro"
                                                role="tab"
                                            ><span class="hidden-sm-up"></span>
                                                <span class="hidden-xs-down"><i class="fas fa-user-circle"></i>Profession</span></a
                                            >
                                        </li>
                                        <li class="nav-item">
                                            <a
                                                class="nav-link"
                                                data-bs-toggle="tab"
                                                href="#a"
                                                role="tab"
                                            ><span class="hidden-sm-up"></span>
                                                <span class="hidden-xs-down"><i class="fas fa-users"></i>nouveau ne(e)</span></a
                                            >
                                        </li>
                                        <li class="nav-item">
                                            <a
                                                class="nav-link"
                                                data-bs-toggle="tab"
                                                href="#b"
                                                role="tab"
                                            ><span class="hidden-sm-up"></span>
                                                <span class="hidden-xs-down"><i class="fas fa-book"></i>Culte</span></a
                                            >
                                        </li>
                                        <li class="nav-item">
                                            <a
                                                class="nav-link"
                                                data-bs-toggle="tab"
                                                href="#c"
                                                role="tab"
                                            ><span class="hidden-sm-up"></span>
                                                <span class="hidden-xs-down"><i class="fas fa-shopping-cart"></i>Offrande</span></a
                                            >
                                        </li>
                                        <li class="nav-item">
                                            <a
                                                class="nav-link"
                                                data-bs-toggle="tab"
                                                href="#d"
                                                role="tab"
                                            ><span class="hidden-sm-up"></span>
                                                <span class="hidden-xs-down"><i class="fa fa-eur" aria-hidden="true"></i>Devise</span></a
                                            >
                                        </li>
                                        <li class="nav-item">
                                            <a
                                                class="nav-link"
                                                data-bs-toggle="tab"
                                                href="#e"
                                                role="tab"
                                            ><span class="hidden-sm-up"></span>
                                                <span class="hidden-xs-down"><i class="fa-solid fa-boxes-packing"></i>Depense</span></a
                                            >
                                        </li>
                                        <li class="nav-item">
                                            <a
                                                class="nav-link"
                                                data-bs-toggle="tab"
                                                href="#f"
                                                role="tab"
                                            ><span class="hidden-sm-up"></span>
                                                <span class="hidden-xs-down"><i class="fa-solid fa-hammer"></i>ype materiel</span></a
                                            >
                                        </li>

                                    </ul>
                                    <div class="tab-content tabcontent-border">
                                        <div class="tab-pane active" id="home" role="tabpanel">
                                            <div class="p-20">
                                                <Caisse />
                                            </div>
                                        </div>
                                        <div class="tab-pane p-20" id="departement" role="tabpanel">
                                            <DepartementParametre />
                                        </div>
                                        <div class="tab-pane p-20" id="mouve" role="tabpanel">
                                            
                                        </div>
                                        <div class="tab-pane p-20" id="pro" role="tabpanel">
                                            
                                        </div>
                                        <div class="tab-pane p-20" id="a" role="tabpanel">
                                            <CategorieMembre />
                                        </div>
                                        <div class="tab-pane p-20" id="b" role="tabpanel">
                                            <CulteParametre />
                                        </div>
                                        <div class="tab-pane p-20" id="c" role="tabpanel">
                                            
                                        </div><div class="tab-pane p-20" id="d" role="tabpanel">
                                            
                                        </div>
                                        <div class="tab-pane p-20" id="e" role="tabpanel">
                                            
                                        </div>
                                        <div class="tab-pane p-20" id="f" role="tabpanel">
                                            
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

export default Parametre