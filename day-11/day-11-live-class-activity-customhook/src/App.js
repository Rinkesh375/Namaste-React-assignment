import "./App.css";
import useLocalStorage from "./utils/customHooks/useLocalStorage";
import useStatus from "./utils/customHooks/useStatus";

function App() {
  const status = useStatus();
  const [localStorageData, setLocalStorageData] = useLocalStorage(1);
  console.log("See the Sequence in conole -3") 
  return (
    <>
    {/* This one for Status of offline and online */}
      <h1> {status ? "Online" : "Offline"} </h1>



       {/* This one for getting and setting data for input box */}
      <input
        type="text"
        value={localStorageData}
        onChange={(e) => {
          setLocalStorageData(e.target.value);
        }}
      />
    </>
  );
}

export default App;
