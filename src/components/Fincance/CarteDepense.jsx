import React, { useEffect, useState } from 'react'
import { Document, Page, Text, View, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer';
import dateFormat from 'dateformat';
import { useParams } from 'react-router-dom';
import { getMembreId } from '../../actions/membre.action';
import { getDepenseId } from '../../actions/DepenseAction';

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

const CarteDepense = () => {
    const { id } = useParams();
    const [membreid, setMembreid] = useState(null);

    useEffect(() => {
        getDepenseId(id).then((membre) => {
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
                                <Text style={styles.title}>{membreid.pournous} {membreid.nom}</Text>
                                <Text style={styles.subtitle}>Departement</Text>
                                <Text style={styles.text}>Date Dépense: {dateFormat(membreid.created_at, 'dd/mm/yyyy')}</Text>
                                <Text style={styles.text}>Designation Depense: {membreid.beneficiaire}</Text>
                                <Text style={styles.text}>Montant Depense: {membreid.montant} {membreid.devise_id}</Text>
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

export default CarteDepense