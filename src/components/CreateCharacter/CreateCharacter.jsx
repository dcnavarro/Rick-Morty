import React from "react";
import {connect} from "react-redux";
import { createCharacter } from "../redux/actions";



const Form = (props) =>{

    const [form,setForm]= React.useState({
        name: "",
        status: "",
        gender: "",
        species:"",
    })

    const handleChange = (event)=>{
        const property= event.target.name;
        const value= event.target.value; 

        setForm({
            ...form,
            [property]: value
        })
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        props.createCharacter({
            ...form,
            id: Date.now(),
            image: "http://rickandmortyapi.com/api/character/avatar/19.jpeg"
        });
        alert ("Personaje creado");
        }
    

    return(
        <form onSubmit={handleSubmit}>
        <input placeholder= "Name..." name="name" value={form.name} onChange={handleChange} />
        <input placeholder= "Status..." name="status" value={form.status} onChange={handleChange} />
        <input placeholder= "Gender..." name="gender" value={form.gender} onChange={handleChange} />
        <input placeholder= "Species..." name="species" value={form.species} onChange={handleChange} />
        <button type="submit">Submit</button>
        </form>
    )
}


const mapDispatchToProps = (dispatch)=>{
    return{
        createCharacter: (character)=> {dispatch(createCharacter(character))}
    }
}

export default connect(null, mapDispatchToProps) (Form);