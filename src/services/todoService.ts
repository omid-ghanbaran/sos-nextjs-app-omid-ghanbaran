import { Todo } from "@/types/type";

const API_URL = "http://localhost:5000/todos";

export const fetchTodos = async (): Promise<Todo[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }
  return response.json();
};

export const addTodo = async (title: string): Promise<Todo> => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, completed: false }),
  });
  if (!response.ok) {
    throw new Error("Failed to add todo");
  }
  return response.json();
};

export const toggleTodo = async (todo: Todo): Promise<Todo> => {
  const response = await fetch(`${API_URL}/${todo.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...todo, completed: !todo.completed }),
  });
  if (!response.ok) {
    throw new Error("Failed to toggle todo");
  }
  return response.json();
};

export const deleteTodo = async (id: number): Promise<void> => {
  const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  if (!response.ok) {
    throw new Error("Failed to delete todo");
  }
};