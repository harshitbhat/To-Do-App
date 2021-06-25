import React from 'react';
import useToggleState from '../../Hooks/useToggleState';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import EditTodoForm from '../EditTodoForm/EditTodoForm';

export default function TodoItem({
  id,
  task,
  completed,
  removeTodo,
  toggleTodo,
  editTodo,
}) {
  const [isEditing, toggle] = useToggleState(false);
  return (
    <ListItem style={{ height: '64px' }}>
      {isEditing ? (
        <EditTodoForm task={task} id={id} editTodo={editTodo} toggle={toggle} />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onClick={() => toggleTodo(id)}
          />
          <ListItemText
            style={{ textDecoration: completed ? 'line-through' : 'none' }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Edit" onClick={toggle}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}
