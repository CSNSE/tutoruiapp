import React from "react";
import { NavBar, TutoringEventUpdateForm } from "./ui-components";
import { useParams, useNavigate } from "react-router-dom";
import './App.css';
import { deleteTutoringEvent } from "./graphql/mutations";
import { generateClient } from 'aws-amplify/api';

const client = generateClient();

function EditCalendar(id) {
    const { cid } = id;
    const navigate = useNavigate();

    const deleteTemporaryEvent = async () => {
        try {
            // Delete the temporary tutoring event
            await client.graphql({
                query: deleteTutoringEvent,
                variables: {
                    input: {
                        id: cid,
                    },
                },
            });
            navToMain();
        } catch (error) {
            console.error('Error deleting temporary tutoring event:', error);
        }
    };

    function navToMain(){
        navigate('/')
          console.log('Success!');
  
      }
    return (
        <div>
            <header className="App-header">
                <TutoringEventUpdateForm idProp={cid} onCancel={() => deleteTemporaryEvent()} onSuccess={(navToMain)} />
            </header>
        </div>
    );
}

export default EditCalendar;
