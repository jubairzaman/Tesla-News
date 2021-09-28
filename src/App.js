import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import NewsPaper from './Components/NewsPaper/NewsPaper';

function App() {
  return (
    <div className="App">
      <div>
        <h1> Welcome to Tesla News </h1>
      </div>

      <NewsPaper></NewsPaper>


    </div>
  );
}

export default App;
