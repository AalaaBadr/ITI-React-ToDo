import './ToDo.css';
import AddTask from './AddTask';
import TaskList from './TaskList';
import { useState } from "react";
import { Container } from "@mui/material";

function ToDo() {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdited, setIsEdited] = useState(false);
  const [editedId, setEditedId] = useState(null);

  const onChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleClick = () => {
    if (!isEdited) {
      setTodos([
        ...todos,
        { val: inputVal, isDone: false, id: new Date().getTime() }
      ]);
    }
    else {
      setTodos([...todos, { val: inputVal, isDone: false, id: editedId }]);
    }
    setInputVal("");
    setIsEdited(false);
  };

  const onDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleDone = (id) => {
    const updated = todos.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos(updated);
  };

  const handleEdit = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    const editVal = todos.find((todo) => todo.id === id);
    setEditedId(editVal.id);
    setInputVal(editVal.val);
    setTodos(newTodos);
    setIsEdited(true);
  };

  return (
    <Container component="main" className="container">
      <AddTask inputVal={inputVal} isEdited={isEdited} onChange={(e)=>onChange(e)} handleClick={()=>handleClick()} />
      <TaskList todos={todos} onDelete={(id)=>onDelete(id)} handleDone={(id)=>handleDone(id)} handleEdit={(id)=>handleEdit(id)}/>
    </Container>
  );
}

export default ToDo;