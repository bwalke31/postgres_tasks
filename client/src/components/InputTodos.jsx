import React, { Fragment, useState } from "react";

export default function InputTodo() {
  const [description, setDescription] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:4000/todos/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <h1 className="mt-5 text-center">Input Todo</h1>
      <form className="d-flex mt-5" onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className="btn btn-success">
          Add
        </button>
      </form>
    </Fragment>
  );
}
