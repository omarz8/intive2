import React from 'react';
import './App.css';
import ListOfPeople from './components/ListOfPeople';
import { DataProvider } from './services/Context';


function App() {
  
  return (
    <DataProvider>
    <div className="App">
      <section className="App-content">
      <ListOfPeople />
      </section>
    </div>
    </DataProvider>
  );
}

export default App;
