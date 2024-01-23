

// App.js
import React, { Component } from 'react';
import './App.css';
import { Button, ThemeProvider, withAuthenticator } from '@aws-amplify/ui-react';
import { NavBar, TutoringEventCreateForm, TutoringEventUpdateForm, DispTutorEventCollection,} from "./ui-components";
import { createTutoringEvent, deleteTutoringEvent } from './graphql/mutations';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { generateClient } from "aws-amplify/api";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import EventEdit from './EventEdit';
import { getTutoringEvent } from './graphql/queries';
import Calendar from './Calendar';
import './Calendar.css'
import { listTutoringEvents } from './graphql/queries';

const client = generateClient()

class App extends Component {
  // componentDidMount() {
  //   this.handleDeleteAll();
  // }

  // handleDeleteAll = async () => {
  //   await deleteAll();
  // };

  handleSignOut = () => {};

  render() {
    return (
      <div className="App">
        <header className='App-header'>
          <Router>
            <Routes>
              <Route exact path = '/' element={<div><NavBar/><DispTutorEventCollection/></div>} />
              <Route exact path='/new' element={<div><NavBar /><Calendar /></div>} />
              <Route exact path="/update/:cid" element={<EventEdit />} />
            </Routes>
          </Router>
        </header>
      </div>
    );
  }
}


export default withAuthenticator(App);
function MyFormComponent() {
  const navigate = useNavigate();
  
  const handleSubmit = async (fields) => {
    const updatedFields = {};
    Object.keys(fields).forEach((key) => {
      if (typeof fields[key] === 'string') {
        updatedFields[key] = fields[key].trim();
      } else {
        updatedFields[key] = fields[key];
      }
    });
  
    try {
      const newTutoringEvent = await client.graphql({
        query: createTutoringEvent,
        variables: {
          input: {
            "studentName": updatedFields.studentName,
            "date": updatedFields.date,
            "conceptsCovered": updatedFields.conceptsCovered,
            "image": updatedFields.image
          }
        }
      });
  
      // Additional logic or API calls if needed
  
      // Use navigate to go to a different page (replace '/target-page' with your desired path)
      navigate('/');
    } catch (error) {
      // Handle errors, log them, or show an error message to the user
      console.error('Error creating tutoring event:', error);
    }
  };
  

  const handleCancel = () => {
    navigate('/');
  }
  return (
    <div>
      {/* Other components or content */}
      <TutoringEventCreateForm onSubmit={handleSubmit} onCancel={handleCancel}/>
    </div>
  );
}



function MyUpdateComponent() {
  const navigate = useNavigate();
  const { id } = useParams(); // Use useParams hook to get the ID from the URL

  return (
    <div>
      {/* Other components or content */}
      <TutoringEventUpdateForm
        onSubmit={(fields) => {
          // Example function to trim all string inputs
          const updatedFields = {};
          Object.keys(fields).forEach((key) => {
            if (typeof fields[key] === 'string') {
              updatedFields[key] = fields[key].trim();
            } else {
              updatedFields[key] = fields[key];
            }
          });

          // Use the ID as needed
          console.log('ID:', id);

          // Additional logic or API calls if needed

          // Use navigate to go to a different page (replace '/' with your desired path)
          navigate('/');
        }}
        onCancel={() => navigate('/')}
      />
    </div>
  );
}

// ... (the rest of your code)

// async function deleteAll() {
//   try {
//     // Fetch all tutoring events
//     const result = await client.graphql({
//       query: listTutoringEvents, // Replace with your actual query
//       variables: {}, // Add any required variables
//     });

//     // Check if there are items in the result
//     if (result.data.listTutoringEvents.items) {
//       // Iterate through the events
//       for (const event of result.data.listTutoringEvents.items) {
//         // Check if studentName is empty
//         if (event.studentName === '') {
//           // Use the correct mutation to delete an item
//           await client.graphql({
//             query: deleteTutoringEvent,
//             variables: {
//               input: {
//                 id: event.id,
//               },
//             },
//           });
//         }
//       }

//       console.log('Successfully deleted instances with studentName equal to "".');
//     } else {
//       console.log('No instances found.');
//     }
//   } catch (error) {
//     console.error('Error deleting instances:', error);
//   }
// }


