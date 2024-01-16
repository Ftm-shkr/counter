import React, { useState } from 'react';
import styles from "./Counter.module.css";

const Counter = () => {
   const [counter, setCounter] = useState(0);

   const handleChangeCounter = (type = "inc") => {
      setCounter(prev => type === 'inc' ? prev + 1 : prev - 1);
   };

   return (
      <div className={styles.container}>
         <div className={styles.counter_container}>
            <h1 className={styles.counter_value}>Count:
               <span>{counter}</span>
            </h1>
            <button
               className={`${styles.btn} ${styles.increment}`}
               onClick={() => handleChangeCounter("inc")}
            >
               Increment
            </button>
            <button
               className={`${styles.btn} ${styles.decrement}`}
               onClick={() => handleChangeCounter("dec")}
            >
               Decrement
            </button>
         </div>
      </div>
   );
};
export default Counter;