import { useState } from "react";

function Student() {
    // Counter state
    const [count, setCount] = useState(0);

    //input Name state
    const [inputName, setInputName] = useState("");
//submitted name state
const [submittedName, setSubmittedName]= useState("");

    return (
        <div>
            {/* Counter */}
            <h1>Count: {count}</h1>

            <button
                style={{
                    backgroundColor: "green",
                    color: "white",
                    borderRadius: "5px",
                    padding: "5px 10px",
                    border: "none",
                    cursor: "pointer"
                }}
                onClick={() => setCount(count + 1)}
            >
                Increase
            </button>

            <button
                style={{
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "5px",
                    padding: "5px 10px",
                    margin: "0 5px",
                    border: "none",
                    cursor: "pointer"
                }}
                onClick={() => setCount(count - 1)}
            >
                Decrease
            </button>

            <button
                style={{
                    padding: "5px 10px",
                    borderRadius: "5px",
                    border: "1px solid black",
                    cursor: "pointer"
                }}
                onClick={() => setCount(0)}
            >
                Reset
            </button>

            <br />
            <br />
            <input
                type="text"
                placeholder="Enter your name"
                value={inputName}
                onChange={(event) => setInputName(event.target.value)}
            />
<button
 
 style={{
    marginLeft:"5px",
    padding:"5px 10px"
 }}
 onClick={()=>setSubmittedName(inputName)}>
Submit 
</button>
{submittedName &&(
    <h2>Hello, {submittedName}</h2>
)}
        </div>
    );
}

export default Student;