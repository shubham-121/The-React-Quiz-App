import Options from "./Options";

function Questions({ question, dispatch, answer }) {
  // console.log(question);
  // console.log(question.id);

  return (
    <div>
      <h4 className="question">
        {question.question}
        <Options
          question={question}
          dispatch={dispatch}
          answer={answer}
        ></Options>
      </h4>
    </div>
  );
}

export default Questions;

// function Questions() {
//   return (
//     <div>
//       <h5 className="question">Q1- Who developed React library?</h5>
//       <ul className="list">
//         <li>
//           <input type="radio" name="question1" id="correct"></input>
//           Facebook
//         </li>
//         <li>
//           <input type="radio" name="question1"></input>
//           Apple
//         </li>
//         <li>
//           <input type="radio" name="question1"></input>
//           Oracle
//         </li>
//         <li>
//           <input type="radio" name="question1"></input>
//           Nvidia
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Questions;
