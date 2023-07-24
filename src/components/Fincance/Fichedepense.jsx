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
    Titre: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
        border: '1pt solid black',
        height: '1%'
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
        marginBottom: 15
    },
    subtitle: {
        fontSize: 24,
        marginBottom: 16
    },
    text: {
        fontSize: 16,
        marginBottom: 8
    },
    image : {

    }
    

});

const Fiechedepense = () => {
    const { id } = useParams();
    const [membreid, setMembreid] = useState(null);

    useEffect(() => {
        getMembreId(id).then((membre) => {
            setMembreid(membre);
        }).catch((error) => {
            console.log(error);
        });
    }, [id]);
    if(!membreid) {
        return <div>Loading...</div>
    }
    return (
        <PDFViewer style={styles.viewer}>
            {/* Start of the document*/}
            <Document>
                {/*render a single page*/}
                <Page size={{ width: 500, height: 200 }} style={styles.page} >
                    <View style={styles.Titre}>
                        <div className='row'>
                            <div className="col-md-6">
                                <Text style={styles.title}>{membreid.prenom} {membreid.nom}</Text>
                                <Text style={styles.subtitle}>Departement</Text>
                                <Text style={styles.text}>Adresse: {membreid.adresse}</Text>
                                <Text style={styles.text}>Etat civil: {membreid.etatcivil}</Text>
                                <Text style={styles.text}>Profession: {membreid.profession} </Text>
                                <Text style={styles.text}>Sexe: {membreid.sexe} </Text>
                                <Text style={styles.text}>Téléphone: {membreid.telephone}</Text>
                                <Text style={styles.text}>Email: {membreid.email}</Text>
                                <Text style={styles.text}>Date naissance : {membreid.datenaissance}</Text>
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

export default Fiechedepense