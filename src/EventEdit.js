import React, { Component}  from "react";
import { NavBar, TutoringEventUpdateForm } from "./ui-components";
import { useParams } from "react-router-dom";
import './App.css';

function EditEvent(){
    return <Put />;
}

    function Put(){
        const {cid} = useParams();
        console.log("found"+{cid});
        return(
            <div><header className="App-header">
                <NavBar/>
                <TutoringEventUpdateForm idProp={cid}/>
            </header></div>
        );
    }

export default EditEvent