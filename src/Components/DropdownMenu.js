const DropdownMenu = ({arr}) => {
    return ( 
        <select multiple='true'>
            {arr.map((materiaPrima,index)=>(
                <option key={index}>{materiaPrima.tipo}</option>
            ))}
        </select>
     );
}
 
export default DropdownMenu;