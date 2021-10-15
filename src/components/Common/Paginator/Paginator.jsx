import React, { useState } from 'react';
import styles from "./paginator.module.css";



const Paginator = (props) => {
    // const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pagesCount = 52;
    const pageStep = 5;

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    
    const [leftListValue, setLeftValue] = useState(0);
    const [rightListValue, setRighValue] = useState(5);

    const decrement = () => {
        if (leftListValue - pageStep >= 0){
            setLeftValue(leftListValue - pageStep);
            setRighValue(rightListValue - pageStep);
        }
    };

    const increment = () => {
        if (leftListValue + pageStep < pagesCount){
            setLeftValue(leftListValue + pageStep);
            setRighValue(rightListValue + pageStep);
        }
    }


    return (
        <div className={styles.wrapper}>
            <button name="button" 
            onClick={decrement}>Prev</button>
                <div className={styles.spanWrapper}>
                    {pages.filter(p => p >= leftListValue && p <= rightListValue)
                    .map(p => {
                        return <span className={props.currentPage === p && styles.selectedPage}
                                    onClick={(e) => {
                                        props.onPageChanged(p);
                                    }}>{p}</span>
                    })}
                </div>
            <button name="button"  onClick={increment}>Next</button>
        </div>
    )
}

export default Paginator;