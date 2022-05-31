/** 
 * App.js
*/
import React from "react";
import Table from "./Table";
import Table02 from "./Table02";

class App extends React.Component{

  render(){
    return(
      <div className="container">
        {/* we are using JSX. 'className' will be changed, in execution mode, to 'class'  */}
        <h1>FIRST Students' List</h1>
        <Table />

        <br></br>

        <h1>SECOND Students' List</h1>
        <Table02 />        
      </div>
    )
  }
}
export default App;