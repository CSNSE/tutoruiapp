import React from 'react';
import { DayPickerProps } from 'react-day-picker';

// Define the props for the Calendar component
interface CalendarProps {}

// Define the state for the Calendar component
interface CalendarState {
  selectedDate: Date | null;
  tempEventId: string | null; // Assuming the event ID is a string
}

// Define the Calendar component as a React functional component
declare const Calendar: React.FC<CalendarProps>;

// Define the props for the EventEdit component
interface EventEditProps {
  cid: string; // Assuming the event ID is a string
  onCancel: () => void;
}

// Define the state for the EventEdit component if needed
// interface EventEditState {}

// Define the EventEdit component as a React functional component
declare const EventEdit: React.FC<EventEditProps>;

// Export the Calendar component
export default Calendar;

// Export the EventEdit component (if it's in a separate file)
export { EventEdit };
