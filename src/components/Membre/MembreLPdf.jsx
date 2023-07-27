import React, { useEffect, useState } from 'react'
import { Document, Page, Text, View, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer';
import dateFormat from 'dateformat';
import { useParams } from 'react-router-dom';
import { getMembreId } from '../../actions/membre.action';

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#ffffff",
        color: "black",
    },
    section: {
        margin: 10,
        padding: 10,
    },
    TitreFiche: {
        fontSize : 20,
        textAlign : "center"
    },
    body: {
        margin: 10,
        padding: 10,
        textAlign: 'center',
        size: 2
    },
    table: {
        margin: 10,
        padding: 10,
        textAlign: 'center',
        fontSize: 15
    },
    viewer: {
        width: window.innerWidth, //the pdf viewer will take up all of the width and height
        height: window.innerHeight,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 24,
    },
    text: {
        fontSize: 16,
    },
    image: {

    }


});

const MembrePdfIdFiche = () => {
    const { id } = useParams();
    const [membreid, setMembreid] = useState(null);

    useEffect(() => {
        getMembreId(id).then((membre) => {
            setMembreid(membre);
        }).catch((error) => {
            console.log(error);
        });
    }, [id]);
    if (!membreid) {
        return <div>Loading...</div>
    }
    return (
        <PDFViewer style={styles.viewer}>
            {/* Start of the document*/}
            <Document>
                {/*render a single page*/}
                <Page size="A4" style={styles.pages} >
                    <View style={styles.sections}>
                        <div className="row">
                            <div className="col-md-6">
                            <Image src="./img/user.png" style={{ width: "10%", height: "10%" }} />
                            <Text style={{textAlign : "right"}}>27/07/2023</Text>
                            </div>
                        </div>
                    </View>
                    <View style={styles.TitreFiche}>
                        <div className="text-center">
                            <Text style={{ fontSize: 15, fontWeight: "bold", textAlign : "center" }}>FICHE D'IDENTIFICATION DU MEMBRE</Text>
                        </div>
                    </View>
                    <View style={styles.Titres}>
                        <div className='row'>
                            <div className="col-md-6">
                                <Text style={{marginLeft : 150, marginTop : 50}}>Noms :                             {membreid.prenom} {membreid.nom}</Text>
                                <Text style={{marginLeft : 150}}>Adresse:                          {membreid.adresse}</Text>
                                <Text style={{marginLeft : 150}}>Etat civil:                          {membreid.etatcivil}</Text>
                                <Text style={{marginLeft : 150}}>Profession:                      {membreid.profession} </Text>
                                <Text style={{marginLeft : 150}}>Sexe:                               {membreid.sexe} </Text>
                                <Text style={{marginLeft : 150}}>Téléphone:                      {membreid.telephone}</Text>
                                <Text style={{marginLeft : 150}}>Email:                             {membreid.email}</Text>
                                <Text style={{marginLeft : 150}}>Date naissance :             {membreid.datenaissance}</Text>
                            </div>
                            <div className='col-md-6'>
                                <Text style={styles.image}><i className='fa fa-user'></i></Text>
                            </div>
                        </div>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    );
}

export default MembrePdfIdFiche