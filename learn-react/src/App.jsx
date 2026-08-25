//import Student from "./Student";
//import User from "./user";

function App(){
  function greet(name){
    console.log("hello " + name);
  }
  return(
    <div>
     <h1>react events</h1>
     <button onClick={()=>greet("Nirmal")}>
      Click me</button>
      </div>
  );
}
export default App;