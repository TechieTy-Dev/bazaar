import { Fragment } from "react";
import React from 'react'

const Clock = () => {

  return (
    <Fragment>
      <section className="mt-4 ml-5 font-black timer-container clock-timer">
        <section className="timer">
          <div className="flex clock">
         
            
            <section>
              <p>16</p>
              
            </section>{" "}
            <span>:</span>
            <section>
              <p>41</p>
            
            </section>{" "}
            <span>:</span>
            <section>
              <p>08</p>
           
            </section>
          </div>
        </section>
      </section>
    </Fragment>
  );
};



export default Clock