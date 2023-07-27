import React from 'react'
import NavBar from '../components/NavBar'
import NavOt from '../components/NavOt'
import MembreStatistique from '../components/Statistique/MembreStatistique'

const Statistique = () => {
  return (
    <div class="wrapper">
    <NavBar />
    <div class="main">
        <NavOt />
        <main className="content">
            <div className="container-fluid p-0">
                <h1 className="h3 mb-3"><strong>Statistique</strong> </h1>
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
                                        <span class="hidden-xs-down"><i class="fas fa-calendar"></i> Membres Statistique</span></a
                                    >
                                </li>
                            </ul>
                            <div class="tab-content tabcontent-border">
                                <div class="tab-pane active" id="home" role="tabpanel">
                                    <div class="p-20">
                                        <MembreStatistique />
                                    </div>
                                </div>
                                <div class="tab-pane p-20" id="addsxx" role="tabpanel">
                                   
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

export default Statistique