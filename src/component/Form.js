import React from "react";
import "../App.css";

const Form = (props) => {
  return (
    <>
    <div className="body my-5 mx-auto">
      <h2 class="navbar navbar-light bg-primary">Weather Forecast</h2>
      <form class="text-center border border-light p-4" onSubmit={ props.loadweather }>
        <input type="text" name="city" class="form-control" placeholder = "Enter City (Press enter to continue...)" required/>
      </form>
    </div>
    </>
  )
}

export default Form;
