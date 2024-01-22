import React, { useState, useEffect } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import TutoringEventCreateForm from './ui-components/TutoringEventCreateForm';
import { useNavigate } from 'react-router-dom';
import { generateClient } from 'aws-amplify/api';
import { createTutoringEvent, deleteTutoringEvent } from './graphql/mutations';
import './App.css';
import EventEdit from './EventEdit';

const client = generateClient();

function formatDate(inputDateStr) {
  const inputDate = new Date(inputDateStr);
  const day = inputDate.getDate().toString().padStart(2, '0');
  const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
  const year = inputDate.getFullYear();
  return `${month}/${day}/${year}`;
}

function Calendar() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [tempEventId, setTempEventId] = useState(null);

  useEffect(() => {
    // Set the selected date when the component mounts
    const today = new Date();
    setSelectedDate(today);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const handleDayClick = async (date) => {
    try {
      // Check if there is an existing temporary event, delete it before creating a new one
      if (tempEventId) {
        await deleteTemporaryEvent();
      }

      // Format the date as 'YYYY-MM-DD'
      const formattedDate = date.toISOString().split('T')[0];

      // Create a temporary tutoring event
      const newTutoringEvent = await client.graphql({
        query: createTutoringEvent,
        variables: {
          input: {
            studentName: 'Student Name',
            date: formattedDate,
            conceptsCovered: 'Concepts Covered',
            image: 'Image',
          },
        },
      });

      // Extract the ID of the created event
      const eventId = newTutoringEvent.data.createTutoringEvent.id;

      // Set the temporary event ID and selected date
      setTempEventId(eventId);
      setSelectedDate(date);
    } catch (error) {
      console.error('Error creating temporary tutoring event:', error);
    }
  };

  const handleCancel = async () => {
    // Check if there is a temporary event to delete
    if (tempEventId) {
      await deleteTemporaryEvent();
    }

    // Clear the temporary event ID and selected date
    setTempEventId(null);
    setSelectedDate(null);
  };

  const handleCreateEvent = async (fields) => {
    // Handle creating the actual tutoring event here (similar to your existing logic)
    // ...

    // After creating the actual event, clear the temporary event
    await deleteTemporaryEvent();

    // Use navigate to go to a different page (replace '/target-page' with your desired path)
    navigate('/');
  };

  const deleteTemporaryEvent = async () => {
    try {
      // Delete the temporary tutoring event
      await client.graphql({
        query: deleteTutoringEvent,
        variables: {
          input: {
            id: tempEventId,
          },
        },
      });
    } catch (error) {
      console.error('Error deleting temporary tutoring event:', error);
    }
  };

  const navigateBack = () => {
    navigate('/'); // Replace '/' with the path to DispTutorEvent
  };
  
return (
  <div>
    <h1>Calendar</h1>
    <DayPicker selected={selectedDate} onDayClick={handleDayClick} />
    <button onClick={navigateBack}>Back</button>
    {selectedDate && (
      <div>
        {tempEventId ? (
          // Display the EditEvent form with the ID of the new event
            <EventEdit cid={tempEventId} onCancel={handleCancel} />
        ) : (
          <>
         
          </>
        )}
      </div>
    )}
  </div>
);
}

export default Calendar;