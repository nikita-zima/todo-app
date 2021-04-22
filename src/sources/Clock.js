import React from 'react'

function DisplayClock(){
    const now=new Date();

    const year=now.getFullYear();
    const month=now.getMonth()+1;
    const day=now.getDate();

    return(
        <div className="clock">
            <h3>Today is:</h3>
            {`${year}:${month}:${day}`}
        </div>
    );
}
export default DisplayClock;