
import './App.css';
import Button from './component/Button';

function App() {
  return (
    <div >
    <h1 >Create a button in a separate file</h1>
    <Button onClick={() => alert('Create a button in a separate file')}>
      Click
    </Button>
    <Button onClick={() => alert('Create a button in a separate file')}>
      Click
    </Button>
  </div>
  );
}

export default App;
