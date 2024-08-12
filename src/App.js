// src/App.js
import React, { useState } from 'react';
import AlarmForm from './components/AlarmForm';
import AlarmList from './components/AlarmList';
import './styles.css';

const App = () => {
    const [alarms, setAlarms] = useState([]);

    const addAlarm = (alarm) => {
        setAlarms([...alarms, alarm]);
    };

    const removeAlarm = (index) => {
        setAlarms(alarms.filter((_, i) => i !== index));
    };

    return (
        <div className="app">
            <h1>Alarm App</h1>
            <AlarmForm addAlarm={addAlarm} />
            <AlarmList alarms={alarms} removeAlarm={removeAlarm} />
        </div>
    );
};

export default App;
