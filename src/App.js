import { useState } from "react";

function App() {
  
    const [Toggle,ABCD] = useState(true);

    const toggleHandler = () => {
      const presentState = Toggle;
      ABCD(!presentState);
    }
    let displayContent = "Open";
    if (Toggle) {
      displayContent = "Closed";
    }
 
    return (

    <div>
      <button onClick={toggleHandler}>Toggle</button>
      <div className="content">
        {displayContent}
      </div>
    </div>
  );
    }



export default App;
