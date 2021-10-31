import React, {useState} from "react";
import './OnOf.module.css';


export let OnOf = () => {


    let [on, setOn] = useState(false)

    const onStyle = {
        borderRadius: '50%',
        marginLeft: '5px',
        width: '30px',
        height: '20px',
        display: 'inline-block',
        border: '1px solid black',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        borderRadius: '50%',
        marginLeft: '5px',
        width: '30px',
        height: '20px',
        display: 'inline-block',
        border: '1px solid black',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        borderRadius: '50%',
        marginLeft: '5px',
        width: '30px',
        height: '20px',
        display: 'inline-block',
        border: '1px solid black',
        padding: '2px',
        backgroundColor: on ? 'green' : 'red'
    }


    return (
        <div>
            <div style={onStyle} onClick={ () => {setOn(true) } }>
                On
            </div>
            <div style={offStyle} onClick={ () => {setOn(false) } }>
                Off
            </div>
            <div style={indicatorStyle}>
            </div>
        </div>
    )
}
