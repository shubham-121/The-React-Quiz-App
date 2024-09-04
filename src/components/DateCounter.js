import { useState, useReducer } from "react";
// switch (action.type) {
//     case "dec":
//       return { ...state, count: state.count - state.step };
//     case "inc":
//       return { ...state, count: state.count + state.step };
//     case "setCount":
//       return { ...state, count: action.payload };
//     case "setStep":
//       return { ...state, step: action.payload };
//     case "reset":
//       return { count: 0, step: 1 };

//     default:
//       throw new Error("Unknown action");
function reducer(state, action) {
  console.log(state, action);
  //  return { ...state, count: state.count - state.step };

  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - state.step };

    case "inc":
      return { ...state, count: state.count + state.step };

    case "setCount":
      return { ...state, count: action.payload };

    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return { count: 0, step: 1 };

    default:
      console.log("Unknow operation");
  }
}

function DateCounter() {
  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);

  //useReducer hook

  const initialState = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);
  // console.log(date.setDate(date.getDate() + count));

  const dec = function () {
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
    dispatch({ type: "dec" });
  };

  const inc = function () {
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
    dispatch({ type: "inc" });
  };

  const defineCount = function (e) {
    //increase the count based on step e.g count=10, step=10,20,30...
    // setCount(Number(e.target.value));

    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    //by how much the you want to increase the step
    // setStep(Number(e.target.value));
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    // setCount(0);
    // setStep(1);
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;

//
// import { useReducer } from "react";

// function reducer(state, action) {
//   //two args-  state(previous value i.e 0), and new value (updated value due to new actioni.e +1)

//   console.log(state, action);

//   switch (action.type) {
//     case "dec":
//       return { ...state, count: state.count - state.step };
//     case "inc":
//       return { ...state, count: state.count + state.step };
//     case "setCount":
//       return { ...state, count: action.payload };
//     case "setStep":
//       return { ...state, step: action.payload };
//     case "reset":
//       return { count: 0, step: 1 };

//     default:
//       throw new Error("Unknown action");
//   }
// }

// function DateCounter() {
//   // const [count, setCount] = useState(0);
//   // const [step, setStep] = useState(1);

//   //useReducer hook
//   const initialState = { count: 0, step: 1 };

//   const [state, dispatch] = useReducer(reducer, initialState);
//   const { count, step } = state;

//   // This mutates the date object.
//   const date = new Date("june 21 2027");
//   date.setDate(date.getDate() + count);
//   // console.log(date.setDate(date.getDate() + count));

//   const dec = function () {
//     dispatch({ type: "dec" });

//     // setCount((count) => count - 1);
//     // setCount((count) => count - step);
//   };

//   const inc = function () {
//     dispatch({ type: "inc" });
//     // setCount((count) => count + 1);
//     // setCount((count) => count + step);n
//   };

//   const defineCount = function (e) {
//     dispatch({ type: "setCount", payload: Number(e.target.value) });
//     //increase the count based on step e.g count=10, step=10,20,30...
//     // setCount(Number(e.target.value));
//   };

//   const defineStep = function (e) {
//     //by how much the you want to increase the step
//     dispatch({ type: "setStep", payload: Number(e.target.value) });
//     // setStep(Number(e.target.value));
//   };

//   const reset = function () {
//     dispatch({ type: "reset" });
//     // setCount(0);
//     // setStep(1);
//   };

//   return (
//     <div className="counter">
//       <div>
//         <input
//           type="range"
//           min="0"
//           max="10"
//           value={step}
//           onChange={defineStep}
//         />
//         <span>{step}</span>
//       </div>

//       <div>
//         <button onClick={dec}>-</button>
//         <input value={count} onChange={defineCount} />
//         <button onClick={inc}>+</button>
//       </div>

//       <p>{date.toDateString()}</p>

//       <div>
//         <button onClick={reset}>Reset</button>
//       </div>
//     </div>
//   );
// }
// export default DateCounter;
