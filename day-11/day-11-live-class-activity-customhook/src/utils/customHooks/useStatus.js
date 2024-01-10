import React from 'react';



const useStatus = () => {
    const [status, setStatus] = React.useState(true);
    React.useEffect(() => {
        
        function handleOffline(){
            setStatus(false);
        }
        function handleOnline(){
            setStatus(true);
        }


        window.addEventListener("offline",handleOffline);
        window.addEventListener("online",handleOnline);
        return ()=>{
            window.removeEventListener("offline",handleOffline);
            window.removeEventListener("online",handleOnline);
        }
    }, []);
  return status;
 
}

export default useStatus;
