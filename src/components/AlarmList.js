// src/components/AlarmList.js
import React from 'react';

const AlarmList = ({ alarms, removeAlarm }) => {
    return (
        <ul className="alarm-list">
            {alarms.map((alarm, index) => (
                <li key={index} className="alarm-item">
                    {alarm.time} - {alarm.label}
                    <button onClick={() => removeAlarm(index)}>Remove</button>
                </li>
            ))}
        </ul>
    );
};

export default AlarmList;
