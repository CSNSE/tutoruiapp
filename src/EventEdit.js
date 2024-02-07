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

// import React, { Component}  from "react";
// import { NavBar, TutoringEventUpdateForm } from "./ui-components";
// import { useParams } from "react-router-dom";
// import './App.css';
// import { useNavigate } from "react-router-dom";
// function EditEvent(){
//     return <Put />;
// }

//     function Put(){
//         const {cid} = useParams();
//         console.log("found"+{cid});
//         return(
//             <div><header className="App-header">
//                 <NavBar/>
//                 <TutoringEventUpdateForm idProp={cid} onCancel={navToMain} onSubmit={navToMain}/>
//             </header></div>
//         );
        
//     }
//     function navToMain(){
//         console.log('hi');
        
//     }
// export default EditEvent




// import React from "react";
// import { NavBar, TutoringEventUpdateForm } from "./ui-components";
// import { useParams, useNavigate } from "react-router-dom";
// import './App.css';

// function EditEvent() {
//     const navigate = useNavigate();

//     function Put() {
//         const { cid } = useParams();
//         console.log("found" + cid);
        
//         return (
//             <div>
//                 <header className="App-header">
//                     <NavBar />
//                     <TutoringEventUpdateForm idProp={cid} onCancel={navToMain} onSubmit={(navToMain)}/>
//                 </header>
//             </div>
//         );
//     }

//     function navToMain() {
//         console.log('hi');
//         navigate('/');
//     }

//     return <Put />;
// }

// export default EditEvent;