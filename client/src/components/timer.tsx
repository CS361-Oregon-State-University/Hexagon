import React from 'react';
import { useTimer } from 'react-timer-hook';

export function MyTimer({ expiryTimestamp }) {
    const {
        totalSeconds,
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


    return (
        <div style={{ textAlign: 'center' }}>
            {/* <div className="countdown font-mono text-2xl">
                    <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
            </div> */}
            <div style={{ fontSize: '50px' }} className='m-6'>
                <span>{hours < 10 ? '0' + hours : hours}</span>:
                <span>{minutes < 10 ? '0' + minutes : minutes}</span>:
                <span>{seconds < 10 ? '0' + seconds : seconds}</span>
            </div>
            {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}
            <div className="join">
            <button onClick={start} className="btn btn-neutral m-1">Start</button>
            <button onClick={pause} className="btn btn-neutral m-1">Pause</button>
            <button onClick={resume} className="btn btn-neutral m-1">Resume</button>
            <button onClick={() => {
                // Restarts to 5 minutes timer
                const time = new Date();
                time.setSeconds(time.getSeconds() + 300);
                restart(time)
            }} className="btn btn-neutral m-1">Restart</button>
            </div>
        </div>
    );
}
