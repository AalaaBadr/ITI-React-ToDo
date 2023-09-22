import Task from './Task';
import { List } from "@mui/material";

export default function TaskList({todos, onDelete, handleDone, handleEdit}) {
  return (
    <>
      <List>
            {todos.map((todo) => { 
              return (
              <Task todo={todo} onDelete={(id)=>onDelete(id)} handleDone={(id)=>handleDone(id)} handleEdit={(id)=>handleEdit(id)}/>
              );
            })}
          </List>
    </>
  )
}
