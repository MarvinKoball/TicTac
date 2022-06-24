import './App.css';
import Button from './components/getImageButton/button';

function App() {
  /** mehr js stuff */
  
  return (
    <div className="App">
     <Button apiURL={'http://localhost:9090/api/welpen'}/>
    </div>
  );
}

export default App;
