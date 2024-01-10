import './App.css';
import useStatus from './utils/customHooks/useStatus';

function App() {
  const status = useStatus();
  return (
    <>
    <h1> {status ?"Online":"Offline"} </h1>
    </>
  );
}

export default App;
