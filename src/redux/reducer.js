import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];
const initialState = [
  {
      id: Math.floor(Math.random() * 1000),
      item: 'buy milk',
      completed: false,
  },
];

export const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //Adding todos
    addTodos: (state, action) => {
      state.unshift(action.payload);
      // state.item.push(action.payload);
      return state;
    },
    // //remove todos
    // removeTodos: (state, action) => {
    //   state.item.filter((item) => item.id !== action.payload);
    //   return state.filter((item) => item.id !== action.payload);
    // },
    // //update todos
    // updateTodos: (state, action) => {
    //   return state.map((todo) => {
    //     if (todo.id === action.payload.id) {
    //       return {
    //         ...todo,
    //         item: action.payload.item,
    //       };
    //     }
    //    [...state.item] = todo;
    //     return todo;
    //   });
    // },
    // //completed
    // completeTodos: (state, action) => {
    //   return state.map((todo) => {
    //     if (todo.id === action.payload) {
    //       return {
    //         ...todo,
    //         completed: true,
    //       };
    //     }
    //     [...state.item] = todo;
    //     return todo;
    //   });
    // },
  },
});

export const {
  addTodos,
  removeTodos,
  updateTodos,
  completeTodos,
} = addTodoReducer.actions;

export default addTodoReducer.reducer;