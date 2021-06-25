import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import useInputState from '../../Hooks/useInputState';

export default function TodoForm({ addTodo }) {
  const [value, handleValueChange, reset] = useInputState('');
  return (
    <Paper
      style={{
        margin: '1rem 0',
        padding: '0 1rem',
      }}
    >
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleValueChange}
          margin="normal"
          label="Add new task"
          fullWidth
        />
      </form>
    </Paper>
  );
}
