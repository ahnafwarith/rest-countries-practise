import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}
function LoadCountries() {
  const [user, LoadUser] = useState();
  useEffect(() => {

    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data => console.log(data))

  }, []);
  return (
    <h1>I am loading from JSON rest countries</h1>
  )
}

export default App;
