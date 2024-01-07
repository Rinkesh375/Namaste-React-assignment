import "./App.css";

function App() {
  return (
    <>
      <div>
        {
          10 > 11 || console.log("10 is not greater than 11") //This is expression which you can write inside jsx;
        }
      </div>

      <h1>
        {
          /*
        let a = 25;
        console.log(a) This is statement which you can not write like this to write a statement inside jsx you will have to wrap those statements inside brackets() IIFE; 

        */

        (function(){
          let a = 25;
          console.log(a);
        })()
        }
      </h1>
    </>
  );
}

export default App;




