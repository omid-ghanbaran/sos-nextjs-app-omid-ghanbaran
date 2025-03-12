"use client";
import React, { useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  TextField,
  Button,
  Box,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Todo } from "@/types/type";
import {
  fetchTodos,
  addTodo,
  toggleTodo,
  deleteTodo,
} from "@/services/todoService";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const data = await fetchTodos();
        setTodos(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    loadTodos();
  }, []);

  const handleAddTodo = async () => {
    if (newTodo.trim()) {
      try {
        const data = await addTodo(newTodo);
        setTodos([...todos, data]);
        setNewTodo("");
      } catch (error) {
        console.error("Error adding todo:", error);
      }
    }
  };

  const handleToggleTodo = async (id: number) => {
    try {
      const todo = todos.find((todo) => todo.id === id);
      if (todo) {
        const updatedTodo = await toggleTodo(todo);
        setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
      }
    } catch (error) {
      console.error("Error toggling todo:", error);
    }
  };

  const handleDeleteTodo = async (id: number) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <Box sx={{ maxWidth: 500, margin: "auto", mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Todo List
      </Typography>
      <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Add a new task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <Button variant="contained" onClick={handleAddTodo}>
          Add
        </Button>
      </Box>
      <List>
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            secondaryAction={
              <IconButton edge="end" onClick={() => handleDeleteTodo(todo.id)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <Checkbox
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <ListItemText
              primary={todo.title}
              sx={{ textDecoration: todo.completed ? "line-through" : "none" }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TodoList;
