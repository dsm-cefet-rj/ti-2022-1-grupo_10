import { createSlice } from "@reduxjs/toolkit";
import MateriaPrima from '../cls/MateriaPrima/';

const initialMateriaPrima = [
    new MateriaPrima('Fecho',1,'FechosExpress',1),
    new MateriaPrima('Gancho',1,'GanchosExpress',2)
];

function addMateriaPrimaReducer(mps,mp){
    let proxId = 1 + mps.map(p => mps.id).reduce((maxId,currId) => Math.max(maxId,currId));

}