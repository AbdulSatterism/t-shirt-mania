import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './GrandPa.css';


export const RingContext = createContext('props drill process');
export const MoneyContext = createContext(555)

const GrandPa = () => {
    // const house = 7;
    const [house, setHouse] = useState(1)
    const [money, setMoney] = useState(555)
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <MoneyContext.Provider value={[money, setMoney]}>
                <div className='grandPa'>
                    <h2>grand pa</h2>
                    <section className='flex'>
                        <Father house={house}></Father>
                        <Uncle house={house}></Uncle>
                        <Aunty house={house}></Aunty>
                    </section>
                </div>
            </MoneyContext.Provider>
        </RingContext.Provider>
    );
};

export default GrandPa;

/*
context create step:
1. declare a context
2.set provider for context
3. use context in the place where you want to get the context
*/