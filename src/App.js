import logo from './logo.svg';
import './App.css';


function Welcome(props) {
  return "Selamat Datang " + props.name;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Welcome name='Zulvan' />
        </p>
        
      </header>
    </div>
  );
}

export default App;
