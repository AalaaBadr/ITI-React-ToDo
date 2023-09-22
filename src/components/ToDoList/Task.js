import { ListItem, Checkbox, Typography, Button } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

export default function Task({todo, onDelete, handleDone, handleEdit}) {
  return (
    <ListItem divider="bool" className="list">
        <Checkbox
            onClick={() => handleDone(todo.id)}
            checked={todo.isDone}
        />

        <Typography
            className="text"
            style={{color: todo.isDone ? "green" : "" , textDecoration: todo.isDone ? "line-through" : "" }}
            key={todo.id}
        >
        {todo.val}
        </Typography>
                    
        <Button
            onClick={() => handleEdit(todo.id)}
            variant="contained"
            startIcon={<Edit />}
            className="listButtons"
        >
        edit
        </Button>

        <Button
            onClick={() => onDelete(todo.id)}
            color="error"
            variant="contained"
            startIcon={<Delete />}
            className="listButtons"
        >
        delete
        </Button>
    </ListItem>   
  )
}