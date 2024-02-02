import React, { useState, useEffect } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useNavigate } from 'react-router-dom';
import { generateClient } from 'aws-amplify/api';
import { createTutoringEvent, deleteTutoringEvent } from './graphql/mutations';
import EditCalendar from './calEdit';
const client = generateClient();

function Calendar() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [tempEventId, setTempEventId] = useState(null);

  useEffect(() => {
    // Set the selected date when the component mounts
    const today = new Date();
    setSelectedDate(today);
  }, []);

  const handleDayClick = async (date) => {
    try {
      // If the clicked date is the same as the selected date, unselect it
      if (selectedDate && date.getTime() === selectedDate.getTime()) {
        setSelectedDate(null);
        return;
      }

      // Delete existing temporary event before creating a new one
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
      console.error('Error handling day click:', error);
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
    handleCancel();
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
            // Display the EventEdit form with the ID of the new event
            < EditCalendar cid={tempEventId} onCancel={handleCancel} />
          ) : (
            <>
              {/* Additional content to display when no temporary event is selected */}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Calendar;
