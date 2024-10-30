import './App.css';

import Boton from './Components/Button';
import Pantalla from './Components/Pantalla';
import BotonClear from './Components/ButtonClear';

import {useState} from 'react';
import {evaluate} from 'mathjs';

function App() {

  // Se declaran variables constantes con sus funciones para las actualizaciones pertinentes
  const [input, setInput] = useState ('');
  const [lastInput, setLastInput] = useState ('');
  const [history, setHistory] = useState([]);
  const [lastOperation, setLastOperation] = useState('');

  // Se declara una constante que permite agregar un input, para que luego se pueda visualizar en la pantalla de la calculadora
  const agregarInput = (val) => {

  // Esta variable constante y su condicional siguiente se encargan de impedir que se pueda poner varios operadores
  // indicados mismamente en la variable constante la cual es igual a un array
  const operators = ['+', '-', '*', '/', '.'];

  if (operators.includes(val) && operators.includes(lastInput)) {
    return; 
  }

  setInput(input + val);
  setLastInput(val);

  };

  // Se declara una constante que permite calcular el resultado del input anteriormente agregado
  const calcularResultado = () => {

    if(input){
      setInput(evaluate(input));
    }else{
      alert("Por favor ingrese valores para realizar los calculos")
    }

    try {
      const result = evaluate(input); 
      setHistory([...history, `${input} = ${result}`]);
      setLastOperation(input);
      setInput(result.toString());
      setLastInput(result.toString());
    } catch {
      setInput('Error');
    }

  };

  // La siguiente variable constante permite eliminar un caracter del input uno por uno
  const eliminar = () => {
    setInput(input.slice(0, -1)); 
  };

  return (
    <div className="App">

      <img className='Logo-encabezado' src='https://idiomassena.com/moodle/pluginfile.php/2/course/section/1/sena-colombia-logo-green39a900.png'></img>
      
      <div className="contenedor-calculadora">
        <Pantalla input={lastOperation} className="last-operation"/>
        <Pantalla input={input} className="input"/>

        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>

        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>

        </div>
        <div className="fila">
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>

        </div>
        <div className="fila">
          <BotonClear manejarClear={() => {setInput(''); setLastOperation('');}}>Clear</BotonClear>
          <Boton manejarClic={eliminar}>←</Boton>
        </div>

      </div>

      <div className="contenedor-historial">
        <h2>Historial</h2>
        <ul>
          {history.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      </div>

    </div>
  );

}

export default App;
