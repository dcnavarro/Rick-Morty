import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
    return(
        <>
        <Link to="/"><button>Home</button></Link>
        <Link to="/character/:id"><button>Character Detail</button></Link>
        <Link to="/character/create"><button>Create Character</button>
        </Link>
        <hr />
        </>
    )
    }
}

export default NavBar;