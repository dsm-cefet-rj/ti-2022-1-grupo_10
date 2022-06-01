const DropdownMenu = ({arr}) => {
    return ( 
        <select>
            {arr.map((materiaPrima,index)=>(
                <option key={index}>{materiaPrima.nomeMateriaPrima}</option>
            ))}
        </select>
     );
}
 
export default DropdownMenu;