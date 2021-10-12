import React from 'react'
import styles from "./index.module.css";

const Option = ({id, name, amount, price, plusHandler, minusHandler}) => {
    return (
        <div className={styles.option}>
            <p>{name}</p>
            {price &&
            <div className={styles.option_price}>
                <p>{price}₽ x</p>
            </div>
            }
            <div className={styles.option_control}>
                <img src='icons/minus.svg' onClick={() => minusHandler(id)}/>
                <p>{amount}</p>
                <img src='icons/plus.svg' onClick={() => plusHandler(id)}/>
            </div>
        </div>
    )
}

export default Option