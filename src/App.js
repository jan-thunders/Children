import React from "react";
import Hello from "./Components/Hello";
import Counter from "./Components/Counter";

const App = () => {
  
      return (
          <div>
            {/* Akash */}

              <Hello>
                <p>I am Jadu😍</p>
                <button>Click Me</button>
              </Hello>

              {/* Akshay */} 

              <Hello> 
                <p>I am the creator of Web</p>
                <button>Click Me</button>
              </Hello>


               {/* Uday */}
              <Hello> 
                   <Counter />
              </Hello>

        


          </div>
      )
}

export default App;