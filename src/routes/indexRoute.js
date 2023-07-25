import React, { Component  } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboad from '../pages/Dashboad';
import Membre from '../pages/Membre';
import Addmembre from '../components/Membre/Addmembre';
import Updatemembre from '../components/Membre/Updatemembre';
import Detailmembre from '../components/Membre/Detailmembre';
import AddMembreEnfant from '../components/Membre/AddmembreEnfant';
import AddmouvementMembre from '../components/Membre/AddmouvementMembre';
import AfficheNouveau from '../components/Nouveau/AfficheNouveau';
import AddNouveau from '../components/Nouveau/Addnouveau';
import Nouveau from '../pages/Nouveau';
import Finance from '../pages/Fincance';
import AddRecetteFinance from '../components/Fincance/AddRecetteFinance';
import Erreur from '../components/Erreur';
import DepenseFinance from '../components/Fincance/DepenseFinance';
import Paie from '../pages/Paie';
import Plannig from '../pages/Plannig';
import Communication from '../pages/Communication';
import Materiel from '../pages/Materiel';
import UpdateMmembre from '../components/Membre/UpdateMmembre';
import UpdateMouvement from '../components/Membre/UpdateMouvement';
import MembrePdfId from '../components/Membre/MembrePdf';
import MembrePdfIdFiche from '../components/Membre/MembreLPdf';
import MmebreListePdf from '../components/Membre/MmebreListePdf';
import AffecterPdf from '../components/Membre/AffecterPdf';
import MembreEnfantPdf from '../components/Membre/MembreEnfantPdf';
import MouvementmembrePdf from '../components/Membre/MouvementmembrePdf';
import NouveauPdf from '../components/Nouveau/NouveauPdf';
import UpdateNouveau from '../components/Nouveau/UpdateNouveau';
import RapportMouvementPdf from '../components/Membre/RapportMouvementPdf';
import RapportNouveauPdf from '../components/Nouveau/RappportNouveauPdf';
import RecetteFinancePdf from '../components/Fincance/RecetteFinancePdf';
import ConsultationFinancePdf from '../components/Fincance/ConsultationFinancePdf';
import CarteDepense from '../components/Fincance/CarteDepense';
import RapportTypeDepensePdf from '../components/Fincance/RapportTypeFinancePdf';

class IndexRoute extends Component {
    render(){
        return(
            <Routes>
                <Route path="/"  element={<Login />} />
                <Route path="/dashboad"  element={<Dashboad />} />
                <Route path="/membre"  element={<Membre />} />
                <Route path="/addmembre"  element={<Addmembre />} />
                <Route path="/updatemembre/:id"  element={<Updatemembre />} />
                <Route path="/updatemembreEnfant/:id"  element={<UpdateMmembre />} />
                <Route path="/detailmembre/:id"  element={<Detailmembre />} />
                <Route path="/addmembreEnfant"  element={<AddMembreEnfant />} />
                <Route path="/AddmouvementMembre"  element={<AddmouvementMembre />} />
                <Route path="/AddNouveau"  element={<AddNouveau />} />
                <Route path="/Nouveau"  element={<Nouveau />} />
                <Route path="/Finance"  element={<Finance />} />
                <Route path="/AddRecetteFinance"  element={<AddRecetteFinance />} />
                <Route path="/DepenseFinance"  element={<DepenseFinance />} />
                <Route path="/Paie"  element={<Paie />} />
                <Route path="/Planning"  element={<Plannig />} />
                <Route path="/Communication"  element={<Communication />} />
                <Route path="/materiel"  element={<Materiel />} />
                <Route path="/UpdateMouvement/:id"  element={<UpdateMouvement />} />
                <Route path="/MembrePdfId/:id"  element={<MembrePdfId />} />
                <Route path="/MembrePdfIdFiche/:id"  element={<MembrePdfIdFiche />} />
                <Route path="/Listemembres"  element={<MmebreListePdf />} />
                <Route path="/AffecterPdf"  element={<AffecterPdf />} />
                <Route path="/MembreEnfantPdf"  element={<MembreEnfantPdf />} />
                <Route path="/MouvementmembrePdf"  element={<MouvementmembrePdf />} />
                <Route path="/NouveauneePdf"  element={<NouveauPdf />} />
                <Route path="/UpdateNouveau/:id"  element={<UpdateNouveau />} />
                <Route path="/RapportMouvementPdf"  element={<RapportMouvementPdf />} />
                <Route path="/RapportNouveauPdf"  element={<RapportNouveauPdf />} />
                <Route path="/RecetteFinancePdf"  element={<RecetteFinancePdf />} />
                <Route path="/ConsultationFinancePdf"  element={<ConsultationFinancePdf />} />
                <Route path="/CarteDepense/:id"  element={<CarteDepense />} />
                <Route path="/RapportTypeDepensePdf"  element={<RapportTypeDepensePdf />} />
                <Route path="/*"  element={<Erreur />} />
            </Routes> 
        );
    }
}

export default IndexRoute;