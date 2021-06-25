import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import TodoItem from '../TodoItem/TodoItem';
import { v4 as uuid } from 'uuid';

export default function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  if (todos.length) {
    return (
      <Paper elevation={5}>
        <List>
          {todos.map((todo, idx) => (
            <>
              <TodoItem
                task={todo.task}
                key={uuid()}
                id={todo.id}
                completed={todo.completed}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
              />
              {idx !== todos.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );
  } else {
    return null;
  }
}
