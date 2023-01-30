import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Special = () => {
    // const dadurRing = useContext(RingContext)
    const [house, setHouse] = useContext(RingContext)
    return (
        <div>
            <h4>Special</h4>
            <p><small>House:{house}</small></p>
            <p><small>{house}</small></p>
            <button onClick={() => setHouse(house + 1)}>increase</button>
        </div>
    );
};

export default Special;