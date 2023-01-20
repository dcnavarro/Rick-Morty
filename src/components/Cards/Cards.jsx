import React from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import { getCharacters } from "../../redux/actions";
import {Card} from "../Card/Card";

const Container = styled.div`
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    flex-wrap: wrap;
                    `

class Cards extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount (){
        this.props.getCharacters();
    }

    render(){
        return(
        <Container>
        {
            [...this.props.characters, ...this.props.myCharacters].map (character=>{
                return(
                   <Card 
                   key={character.id}
                   id={character.id}
                   name={character.name}
                   gender={character.gender}
                   species={character.species}
                   status={character.status}                 
                   />
                    )
            })
        }
        </Container>
        )
    }

}

const mapStateToProps = (state) =>{
    return{
        characters: state.characters,
        myCharacters: state.myCharacters
    }

}

const mapDispatchToProps = (dispatch) =>{
    return{
            getCharacters: ()=> dispatch (getCharacters())
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Cards);