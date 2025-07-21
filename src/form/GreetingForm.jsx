import React, {useEffect, useState} from 'react';

const GreetingForm = () => {
    const[name, setName] = useState('');
    const [displayName, setDisplayName] = useState('');

    useEffect(() => {
        const saved = localStorage.getItem('displayName');
        if (saved){
            setDisplayName(JSON.parse(saved));
        }
    },[]);

    useEffect(() => {
         localStorage.setItem('displayName',JSON.stringify(displayName));
     }, [displayName]);

    return (
        <div>
            <form onSubmit={(e)=> e.preventDefault()}  action="">
                <input   onChange={(e)=> setName(e.target.value) } value={name}  type="text"/>
                <button className='button' onClick={()=>{ if(name!==''){ setDisplayName(name); setName('');}}} >Submit</button>
                <h1 >{displayName ? `Hello, ${displayName}` : ' '}</h1>
            </form>
        </div>
    );
};

export default GreetingForm;