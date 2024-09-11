import React from 'react';
import { useState } from 'react';
import styles from './App.module.css';
import powerimagem from './assets/powered.png';
import leftArrowImage from './assets/leftarrow.png';

import { levels,cauculateImc,} from './Helpers/imc.ts';
import {Griditem} from './Camponentes/Griditem/Griditem.tsx';

const App = () =>{

    const [heightField, setHeightField,] = useState <number>(0);
    const [weightField, setWeightField,] = useState <number>(0);
    const [ToShow, setToShow] = useState< import('./Helpers/imc.ts').level | null>(null);

    const handleCalculateButton = () => {
        if (heightField && weightField ) {
            setToShow(cauculateImc(heightField,weightField));
        } else 
        {
            alert("Digite todos os campos.");
        }

    };
    const handleBackButton=() =>{
        setToShow(null);
        setHeightField(0);
        setWeightField(0);
    }

    return (
        <div className={styles.main}>
            <header>
                <div className={styles.headerContainer}>
                    <img src={powerimagem} alt='' width={150} />
                </div>
            </header>
            <div className={styles.container}>
                <div className={styles.leftSide}>
                    <h1> Caucule seu IMC. </h1>
                    <p>IMC é a sigla para Índice de Massa Corpórea, parãmetro adotado pela a Organização Mundial de Saúde para caucular o peso ideal de cada pessoa.</p>
                    <input
                        type='number'
                        placeholder='Digete a sua altura. Ex: 1.5 (em métros)'
                        value={heightField > 0 ? heightField : ''}
                        onChange={e => setHeightField(parseFloat(e.target.value))} 
                        disabled={ToShow ? true: false}
                        />
                    
                    <input
                        type='number'
                        placeholder='Digete a seu peso . Ex: 70.5 (em Kg)'
                        value={weightField > 0 ? weightField : ''}
                        onChange={e => setWeightField(parseFloat(e.target.value))} 
                        disabled={ToShow ? true: false}
                        />
                    <button onClick={handleCalculateButton}disabled={ToShow ? true: false} >Caucule</button>
                </div>
                <div className={styles.rightSide}>
                    {!ToShow &&
                        <div className={styles.grid}>
                            {levels.map((item, key) => (
                                <Griditem key={key} item={item} />
                            ))}
                        </div>
                    }
                    {ToShow &&
                        <div className={styles.rightBig}>
                            <div className={styles.rightArrow} onClick={handleBackButton}>
                                <img src={ leftArrowImage} alt='' width={25}/>
                            </div>
                            <Griditem item={ToShow} />
                        </div>}
                </div>

            </div>
        </div>
    );
}
export default App;