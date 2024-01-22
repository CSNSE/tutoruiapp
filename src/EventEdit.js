



import React from "react";
import { NavBar, TutoringEventUpdateForm } from "./ui-components";
import { useParams, useNavigate } from "react-router-dom";
import './App.css';
import { deleteTutoringEvent } from "./graphql/mutations";
import { generateClient } from 'aws-amplify/api';

const client = generateClient();

function EditEvent(id) {
    const navigate = useNavigate();

    function Put() {
        const { cid } = id;
        console.log("found" + cid);
        
        const deleteTemporaryEvent = async () => {
            try {
              // Delete the temporary tutoring event
              await client.graphql({
                query: deleteTutoringEvent,
                variables: {
                  input: {
                    id: cid, // Use the correct id here
                  },
                },
              });
              navToMain();
            } catch (error) {
              console.error('Error deleting temporary tutoring event:', error);
            }
          };

        return (
            <div>
                <header className="App-header">
                    <NavBar />
                    <TutoringEventUpdateForm idProp={cid} onCancel={deleteTemporaryEvent} onSubmit={(navToMain)}/>
                </header>
            </div>
        );
    }

    function navToMain() {
        console.log('hi');
        navigate('/');
    }
  
    return <Put />;
}

export default EditEvent;
