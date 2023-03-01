import React from "react";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Clock.css';

function Clock () {
    const [time, setTime] = useState(new Date());
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const refreshClock = () => {
        setTime(new Date());
    }

    useEffect(()=>{
        const timerId = setInterval(refreshClock,1000);
        return function cleanup() {
            clearInterval(timerId);
        }
    })

    return (
        // <div class="d-flex flex-row justify-content-center">
        <div class='largeContainer'>
            <div class="timeContainer">{hours}</div>
            <div class="timeContainer">{minutes}</div>
            <div class="timeContainer">{seconds}</div>
        </div>
    )
};

export default Clock;
