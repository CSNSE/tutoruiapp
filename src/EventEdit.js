import React, { Component}  from "react";
import { NavBar, TutoringEventUpdateForm } from "./ui-components";
import { useParams } from "react-router-dom";
import './App.css';
import { useNavigate } from "react-router-dom";
function eventEdit(){
    return <Put/>;
}
    function Put(){
      const navigate = useNavigate();

        const {cid} = useParams();
        console.log("found"+{cid});
        return(
            <div><header className="App-header">
                <NavBar/>
                <TutoringEventUpdateForm idProp={cid} onCancel={navToMain} onSuccess={navToMain}/>
            </header></div>
        );
        function navToMain(){
          navigate('/')
            console.log('Success!');
    
        }
        
    }
    
export default eventEdit

