import { Box, Container, Typography, Checkbox } from "@mui/material";
import { Todo } from "../services/mock_services/data/MockData";
import { useState } from "react";

type TodoProps = {
  todo: Todo;
};

const TodoCard = ({ todo }: TodoProps) => {
  const [checked, setChecked] = useState(todo.completed);

  return (
    <>
      <Typography variant="body1" component="h3" color="initial">
        {todo.title}
      </Typography>
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    </>
  );
};

export default TodoCard;
