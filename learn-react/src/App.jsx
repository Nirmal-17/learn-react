import Student from "./Student";
import User from "./Userinfo";
import { useState } from "react";
function App(){
 return(
  <div>
    <h1>my  react app details:</h1>
    <User
    id={1}
    name="john"
    role="backend"
    age={22}/>
    

  <br>
  </br>
  <User
  id={2}
  name="taran"
  role="marketing"
  age={19}/><br></br>

  <Student/>
  </div>


 );
}
 export default App;
 
