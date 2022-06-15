const DropdownMenu = ({arr}) => {
    return ( 
        <select multiple='true'>
            {arr.map((materiasprimas,index)=>(
                <option key={index}>{materiasprimas.tipo}</option>
            ))}
        </select>
     );
}
 
export default DropdownMenu;