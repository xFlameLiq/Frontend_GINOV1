import {
  Typography,
  ListItem,
  ListItemText,
  Checkbox,
  Divider,
  Button,
} from "@mui/material";

interface TasksDisplayerProps {
  id: number;
  name: string;
  done: boolean;
  statusFn: (value: number) => void;
  deleteFn: (value: number) => void;
}

const TasksDisplayer: React.FC<TasksDisplayerProps> = ({
  id,
  name,
  done,
  statusFn,
  deleteFn,
}) => {
  const updateTask = (): void => {
    statusFn(id);
  };

  const deleteTask = (): void => {
    deleteFn(id);
  };

  return (
    <>
      <ListItem>
        <Checkbox checked={done}></Checkbox>
        <ListItemText
          primary={<Typography variant="body1">{name}</Typography>}
        />
        <Button
          variant="contained"
          type="button"
          onClick={updateTask}
          sx={{ marginRight: "1rem" }}
        >
          {done ? (
            <Typography>Pendiente</Typography>
          ) : (
            <Typography>Realizada</Typography>
          )}
        </Button>
        <Button
          variant="contained"
          type="button"
          onClick={deleteTask}
          sx={{
            backgroundColor: "red",
            "&:hover": {
              backgroundColor: "darkred",
            },
          }}
        >
          <Typography>ELIMINAR</Typography>
        </Button>
      </ListItem>
      <Divider />
    </>
  );
};

export default TasksDisplayer;
