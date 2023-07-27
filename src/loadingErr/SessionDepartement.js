import React from 'react';

const SessionDepartement = () => {
    return `Bearer ${localStorage.getItem("departement")}`;
};

export default SessionDepartement;