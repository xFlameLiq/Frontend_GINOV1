import "../styles/App.css";
import TasksDisplayer from "../components/TasksDisplayer.tsx";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { FormEvent, useState } from "react";

interface TareaModel {
  name: string;
  done: boolean;
}

function App() {
  
  const [newTask, setNewTask] = useState<string>("");
  const [listTasks, setListTasks] = useState<TareaModel[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const onSubmit = (e: FormEvent): void => {
    e.preventDefault();
    if (newTask.trim() === "") {
      alert("Campo vacio, favor de colocar texto");
      return;
    }
    if (listTasks.some((task) => task.name === newTask)) {
      alert("Ya existe esa tarea");
      return;
    }
    addTask(newTask);
    setNewTask("");
  };

  const addTask = (tarea: string): void => {
    const newTasks: TareaModel[] = [...listTasks, { name: tarea, done: false }];
    setListTasks(newTasks);
  };

  const statusTask = (index: number): void => {
    const statusTask: TareaModel[] = [...listTasks];
    statusTask[index].done = !statusTask[index].done;
    setListTasks(statusTask);
  };

  const deleteTask = (index: number): void => {
    const deleteTask: TareaModel[] = [...listTasks];
    deleteTask.splice(index, 1);
    setListTasks(deleteTask);
  };

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid item xs={12}>
          <Card sx={{ width: "700px" }}>
            <CardHeader
              title="Tareas"
              sx={{ textAlign: "center" }}
            ></CardHeader>
            <CardContent>
              <form onSubmit={onSubmit}>
                <TextField
                  id="outlined-basic"
                  label="Escribe tu tarea"
                  variant="outlined"
                  fullWidth
                  onChange={onChange}
                  value={newTask}
                  sx={{ marginBottom: "2rem" }}
                />
                <Button variant="contained" type="submit" fullWidth>
                  GUARDAR
                </Button>
              </form>
              {listTasks.map((task, index) => (
                <TasksDisplayer
                  key={index}
                  id={index} // Utiliza un key único para cada tarea
                  name={task.name}
                  done={task.done}
                  statusFn={() => statusTask(index)}
                  deleteFn={() => deleteTask(index)}
                />
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
