import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   todos: [],
   status: "idle",
};

export const todoSlice = createSlice({
   name: "todo",
   initialState,
   reducers: {
      addTodo: (state, action) => {
         state.todos.push({
            id: Math.random() * 100,
            number: action.payload,
         });
      },
      addFact: (state, action) => {
         state.todos.push({
            fact: action.payload,
         });
      },
   },
});

export const { addTodo, addFact } = todoSlice.actions;
