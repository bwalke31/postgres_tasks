import { Fragment } from "react";

import InputTodo from "./components/InputTodos";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;
