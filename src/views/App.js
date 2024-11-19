import logo from './logo.svg';
import './App.scss';
import React from 'react';
import TextComponent from '../components/TextComponent';
import FormComponent from '../components/FormComponent';
import NumberShowComponent from '../components/NumberShowComponent';
import ConditionComponent from '../components/ConditionComponent';
import PaddingComponent from '../components/PaddingComponent';
/**
 * /component: class component and function component (arrow function) 
 */

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <NumberShowComponent number={29}></NumberShowComponent>
        <PaddingComponent></PaddingComponent>

        <ConditionComponent></ConditionComponent>
        <PaddingComponent></PaddingComponent>

        <TextComponent></TextComponent>
        <PaddingComponent></PaddingComponent>

        <FormComponent></FormComponent>
        <PaddingComponent></PaddingComponent>
      </header>
    </div>
  );
}

export default App;
