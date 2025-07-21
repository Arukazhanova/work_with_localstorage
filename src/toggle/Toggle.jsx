import React, {useEffect, useState} from 'react';

const Toggle = () => {
    const[isOn, setIsOn]=useState(false);
    useEffect(() => {
        document.body.style.backgroundColor = isOn?'black':'white';
    },[isOn]);

    useEffect(() => {
        const saved=localStorage.getItem('isOn');
        if (saved){
            setIsOn(JSON.parse(saved));
        }
    },[]);
    useEffect(() => {
        localStorage.setItem('isOn', JSON.stringify(isOn));
    },[isOn]);
    return (
        <div>
            <h1 >{isOn? 'Включено' : 'Выключено'}</h1>
            <button className='button' onClick={()=>setIsOn(!isOn)}>Переключить</button>
        </div>
    );
};

export default Toggle;