import React, {useState} from 'react'
import styles from './index.module.sass'
import Option from "./option";

const initOptions = [
    {name: 'Площадь', amount: 120, price: 0, id: 'square123'},
    {name: 'Окна', amount: 4, price: 300, id: 'window123'},
    {name: 'Санузел', amount: 2, price: 300, id: 'toilet123'},
    {name: 'Химчистка товаров', amount: 2, price: 300, id: 'chemis123'},
]

const FormOrder = props => {

    const [options, setOptions] = useState(initOptions)

    const plusHandler = id => {
        setOptions(options.map(option => option.id === id ? {...option, amount: option.amount + 1} : option))
    }

    const minusHandler = id => {
        setOptions(options.map(option => option.id === id ? {
            ...option,
            amount: ((option.amount - 1) > 0 ? option.amount - 1 : 0)
        } : option))
    }

    return (
        <div className={styles.form}>
            <div className={styles.form_title}>
                <p>Генеральная уборка</p>
            </div>
            <div className={styles.form_options}>
                {options.map((option, index) => (
                    <Option key={option.id} id={option.id} name={option.name} amount={option.amount}
                            price={option.price} plusHandler={plusHandler} minusHandler={minusHandler}/>
                ))}
            </div>

            <div className={styles.form_footer}>
                <div className={styles.form_footer_price}>
                    <p>Стоимость: <span>3000₽</span></p>
                </div>
                <div className={styles.form_footer_oformlenie}>
                    <p>Перейти к оформлению</p>
                </div>
            </div>
        </div>
    )
}

export default FormOrder