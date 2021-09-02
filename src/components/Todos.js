import React, { useState } from "react";
import { addTodos } from "../redux/reducer";
import { GoPlus } from "react-icons/go";
import { useDispatch } from "react-redux";

// const mapStateToProps = (state) => {
//   return {
//     todos: state,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addTodo: (obj) => dispatch(addTodos(obj)),
//   };
// };

const Todos = (props) => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const add = () => {
    if (todo === "") {
      alert("Input is Empty");
    }
    //  else {
      //  props.addTodo({
      //   id: Math.floor(Math.random() * 1000),
      //   item: todo,
      //   completed: false,
      // });

      dispatch(
        addTodos({
          id: Math.floor(Math.random() * 1000),
          item: todo,
          completed: false,
          // uID: new Date().getTime(),
        })
      );
      setTodo("");
    // }
  };
  //console.log("props from store", props);
  return (
    <div className="addTodos">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input"
        value={todo}
      />  

      <button
        className="add-btn"
        onClick={() => add()}
      >
        <GoPlus />
      </button>
      <br />
    </div>
  );
};



export default Todos;