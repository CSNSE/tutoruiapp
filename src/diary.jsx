import React, { useState } from 'react';
import './Diary.css';
import { TutoringEventCreateForm } from './ui-components'; // Import your custom component

const Diary = () => {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState('');

  const addEntry = () => {
    if (newEntry.trim() !== '') {
      setEntries([...entries, newEntry]);
      setNewEntry('');
    }
  };

  const removeEntry = (index) => {
    const updatedEntries = [...entries];
    updatedEntries.splice(index, 1);
    setEntries(updatedEntries);
  };

  return (
    <div className="diary-container">
      <h2>Display</h2>
      <TutoringEventCreateForm

      />
      <br />
      <ul className="entry-list">
        {entries.map((entry, index) => (
          <li key={index} className="entry-item">
            <span>{entry}</span>
            <button onClick={() => removeEntry(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Diary;
