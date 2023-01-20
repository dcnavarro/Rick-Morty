import styled from "styled-components";
import {useDispatch} from "react-redux";
import { deleteCharacter } from "../../redux/actions";


const Tarjeta = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
`


const Card  = ({name, status, species, gender, id}) =>{
    
    const dispatch = useDispatch();
    const handleClick= ()=>{
    dispatch(deleteCharacter(id))
}
    
    return(
        <Tarjeta>
            <button onClick={handleClick}>X</button>
            <p>Name: {name}</p>
            <p>Status: {status}</p>
            <p>Species: {species}</p>
            <p>Gender: {gender}</p>
        </Tarjeta>
    )
}

export default Card;