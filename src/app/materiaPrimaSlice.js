import { createSlice } from "@reduxjs/toolkit";
import MateriaPrima from '../cls/MateriaPrima';

const initialMateriaPrima = [
    new MateriaPrima(10,'Fecho',300,'FechosExpress',0.15),
    new MateriaPrima(11,'Gancho',286,'GanchosExpress',0.10)
];

function addMateriaPrimaReducer(mps,mp){
    let proxId = 1 + mps.map(mps => mps.id).reduce((maxId,currId) => Math.max(maxId,currId));
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