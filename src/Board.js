import React , { useState } from 'react';
import checkmarck from './checkmark.webp'
import './App.css';

const colors = ['crimson' , "yellow" , "rgba(0, 168, 255, 1)" , "orange" , "limegreen" , "black"]

const calculateHint = require('./hintService')



function Board(props) {

  let [historyDisplay , setHistoryDisplay] = useState([]);
  let [finished , setFinihed] = useState(false);

  let [history]  = React.useState([])  ;
  
  const newTry = function(guess){
    history.push([...guess]);
    setHistoryDisplay(historyDisplay);
    if(guess.toString() === props.target.toString()){
      setFinihed(true);
    }
  }

  const replay = function(){
    window.location.reload(false);
  }


  historyDisplay = history.map((values , step) => {
      let hint = calculateHint(values , props.target)
      return(
      <div className="row" key={step +1}>
        <span className="rowCount" >{step}</span>
        <Pawn value={values[0]}></Pawn>
        <Pawn value={values[1]}></Pawn>
        <Pawn value={values[2]}></Pawn>
        <Pawn value={values[3]}></Pawn>
        <div className="hint" >{hint[0]}<br/>{hint[1]}</div>
      </div>)}
  )
  
  let bottom = function(){
    if(finished){
      return(<div>You won ! <br/>
      <button onClick={() => replay()}>Play again</button></div>)
    }
      return(<div className="row"> <Input newTry={newTry}></Input></div>)
    
  }

  return (
    <div className="Board">
      {historyDisplay}
      
      {bottom()}
    </div>
  );
}

function Input(props) {  
  const [values, setValues] = useState([1 , 1 , 1 , 1]);


  let changeColor = function(index){
    let color = values[index]
    let newColor = color !== 5 ? color + 1 : 0 ;
    let copy = [...values] ;
    copy[index] = newColor ;
    setValues(copy);
  }

  let pawns = values.map( (value , index) => 
  <span key={index}  onClick={() => changeColor(index)}><Pawn value={value} index={index} ></Pawn></span>)

return (
  <div className="Input">
      {pawns}
      <button className="checkButton" onClick={()=> props.newTry(values)} ><img alt="Sumbit" className="check"  src={checkmarck} ></img></button>
  </div>
);
}

function Pawn(props) {  
  return (
    <div className="Pawn" style={{backgroundColor : colors[props.value]}}>
    </div>
  );
}


export default Board;