import React, { Fragment, useState, useEffect } from "react";
import EditTodo from "./EditTodos";

export default function ListTodos() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:4000/todos/");
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const deleteTodo = async (todo_id) => {
    try {
      const response = await fetch(`http://localhost:4000/todos/${todo_id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((todo) => todo.todo_id !== todo_id));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getTodos();
  });

  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            return (
              <tr key={todo.todo_id}>
                <th scope="row">{todo.description}</th>
                <td>
                  <EditTodo todo={todo} />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteTodo(todo.todo_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
}
