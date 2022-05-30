/** 
 * App.js
*/
import React from "react";
import Table from "./Table";

class App extends React.Component{

  render(){
    return(
      <div className="container">
        {/* we are using JSX. 'className' will be changed, in execution mode, to 'class'  */}
        <h1>Students' List</h1>

        <Table />
        
      </div>
    )
  }
}
export default App;