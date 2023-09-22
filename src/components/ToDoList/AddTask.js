import {TextField, Button} from "@mui/material";

export default function AddTask({inputVal, isEdited, onChange, handleClick}) {
  return (
    <>
      <TextField
            variant="outlined"
            onChange={onChange}
            label="type your task"
            value={inputVal}
            className="input"
        />

        <Button
            size="large"
            variant={isEdited ? "outlined" : "contained"}
            color="primary"
            onClick={handleClick}
            className="addButton"
            disabled={inputVal ? false : true}
          >
            {isEdited ? "Edit Task" : "Add Task"}
        </Button>
    </>
  )
}