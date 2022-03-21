import React from 'react';
//import { ButtonHTMLAttributes } from "react";
import './Styles.css';

export default function Button(props) {

    return(
        <button
        onClick={props.onClick}
        className = {props.color}
        value={props.value}
        >
            {props.title}
        </button>
    );
}