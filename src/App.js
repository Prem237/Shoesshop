import { useState } from "react";
class College
{
  constructor(depart)
  {
   this.depart=depart;
  }
  getCollege()
  {
    return "MY department is"+this.depart;
  }
}

function App() {
    const Clg =new College("ECE");
  
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
      {  Clg.getCollege()}
    </div>
  );
    }



export default App;
