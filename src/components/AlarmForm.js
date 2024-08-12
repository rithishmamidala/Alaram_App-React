// src/components/AlarmForm.js
import React, { useState } from 'react';

const AlarmForm = ({ addAlarm }) => {
    const [time, setTime] = useState('');
    const [label, setLabel] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (time && label) {
            addAlarm({ time, label });
            setTime('');
            setLabel('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="alarm-form">
            <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Alarm Label"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                required
            />
            <button type="submit">Add Alarm</button>
        </form>
    );
};

export default AlarmForm;
