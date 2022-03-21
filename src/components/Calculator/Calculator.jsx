import React from 'react';
import './Styles.css';
import Container from '@mui/material/Container';
import Button from '../Button/Button';
import { Box } from '@mui/system/';
import { useState } from 'react';

export default function Calculator() {

    const [number,setNumber] = useState(0);
    const [oldNumber, setOldNumber] = useState(0);
    const [operator, setOperator] = useState(0);

    function inputNumber(e) {
        if(number === 0){
            setNumber(e.target.value);
        }
        else{
            if (number.includes(".") && (e.target.value === '.')){
                //could not include comma anymore
            }
            else{
                setNumber(number + e.target.value); 
            }

        }
    }

    function clear(){
        setNumber(0);
    }

    function percentage(){
        setNumber(number / 100);
    }

    function handleSignal() {
        setNumber(-number);
    }

    function handleOperator(e){
        var operatorInput = e.target.value;
        setOperator(operatorInput);
        setOldNumber(number);
        setNumber(0);
    }

    function handleTotal(){
        if( operator === "/"){
            setNumber(parseFloat(oldNumber) / parseFloat(number));
        }
        if( operator === "x"){
            setNumber(parseFloat(oldNumber) * parseFloat(number));
        }
        if( operator === "-"){
            setNumber(parseFloat(oldNumber) - parseFloat(number));
        }
        if( operator === "+"){
            setNumber(parseFloat(oldNumber) + parseFloat(number));
        }                        
    }
    
    return (
        <div>
            
            <Box m={5}/>
            <Container maxWidth="xs">
                
                <div className="wrapper">
                    <h1 className="result">{number}</h1>
                    <Button onClick={clear} title="AC" value="AC" color="default" />                    
                    <Button onClick={handleSignal} title="+/-" value="+/-" color="default" />                                        
                    <Button onClick={percentage} title="%" value="%" color="default" />                                                            
                    <Button onClick={handleOperator} title="/" value="/" color="orange" />                                                                                

                    <Button onClick={inputNumber} title="7" value="7" color="gray" />                                                                                                    
                    <Button onClick={inputNumber} title="8" value="8" color="gray" />                                                                                                    
                    <Button onClick={inputNumber} title="9" value="9" color="gray" />                                                                                                                                            

                    <Button onClick={handleOperator} title="X" value="x" color="orange" />                                                                                

                    <Button onClick={inputNumber} title="4" value="4" color="gray" />                                                                                                    
                    <Button onClick={inputNumber} title="5" value="5" color="gray" />                                                                                                    
                    <Button onClick={inputNumber} title="6" value="6" color="gray" />   

                    <Button onClick={handleOperator} title="-" value="-" color="orange" />                                                                                

                    <Button onClick={inputNumber} title="1" value="1" color="gray" />                                                                                                    
                    <Button onClick={inputNumber} title="2" value="2" color="gray" />                                                                                                    
                    <Button onClick={inputNumber} title="3" value="3" color="gray" />  

                    <Button onClick={handleOperator} title="+" value="+" color="orange" /> 

                    <Button onClick={inputNumber} title="0" value="0" color="gray double" />  
                    <Button onClick={inputNumber} title="," value="." color="gray" />  
                    <Button onClick={handleTotal} title="=" value="=" color="orange" /> 

                </div>
            </Container>
        </div>        
    );
}