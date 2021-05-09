import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

function AddUser(props) {
  const addUserHandler = (event) => {
    //prevent reload page
    event.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        {/* username */}
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        {/* years */}
        <label htmlFor="age">Age (years)</label>
        <input id="age" type="number" />
        {/* button */}
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
