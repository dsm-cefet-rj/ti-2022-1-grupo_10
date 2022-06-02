import { createSlice } from "@reduxjs/toolkit";
import MateriaPrima from '../cls/MateriaPrima/';

const initialMateriaPrima = [
    new MateriaPrima(1,'Fecho',1,'FechosExpress',1),
    new MateriaPrima(1,'Gancho',1,'GanchosExpress',0.5)
];

function addMateriaPrimaReducer(mps,mp){
    let proxId = 1 + mps.map(p => mps.id).reduce((maxId,currId) => Math.max(maxId,currId));
    return mps.concat([{...mp, id: proxId, qtdUsos: 0}]);
}

export const materiaPrimaSlice = createSlice(
    {
        name: 'CadastroMateriaPrima',
        initialState: initialMateriaPrima,
        reducers: {
            addMateriaPrima: (state,action) => addMateriaPrimaReducer(state,action.payload)
        }
    }
)

export const {addMateriaPrima} = materiaPrimaSlice.actions;
export default materiaPrimaSlice.reducer;