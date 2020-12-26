import { useState } from "react";
class College
{
  constructor(depart)
  {
   this.depart=depart;
  }
  getCollege()
  {
    return "MY department is:"+this.depart;
  }
}
class CollegeName extends College 
{
constructor(name,depart)
{
super(depart);
this.name=name;
}
banner()
{
  let print=super.getCollege();
  print+=" My college name is:"+this.name;
  return print;
}

}

function App() {

    const clgname= new CollegeName("MEC","ECE");
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
      {  clgname.banner()}
    </div>
  );
    }



export default App;
