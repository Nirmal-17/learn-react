import Student from "./Student";
import UserInfo from "./Userinfo";
import User from "./Userinfo";

function App(){
 return(
  <div>
    <h1>my  react app details:</h1>
    <User
    id={0} 
    name="nirmal"
    role="react native developer"
    /><br></br>

    <User
    id={1}
    name="john"
    role="backend"/>
    

  <br>
  </br>
  <User
  id={2}
  name="taran"
  role="marketing"/><br></br>
  <Student/>
  </div>


 );
}
 export default App;