import React, { FC, ReactElement, useState } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import TaskTitleField from './_taskTitleField';
import TaskDescriptionField from './_taskDescriptionField';
import TaskDateField from './_taskDateField';
import TaskSelectField from './_taskSelectField';
import { Status } from './enums/Status';
import { Priority } from './enums/Priority';

const TaskForm: FC = (): ReactElement => {
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<Date | null>(new Date());
  const [priority, setPriority] = useState<string>(Priority.normal);
  const [status, setStatus] = useState<string>(Status.todo);

  return (
    <Box
      px={4}
      my={6}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Typography mb={2} component="h2" variant="h6">
        Create a Task
      </Typography>

      <Stack sx={{ width: '100%' }} spacing={2}>
        <TaskTitleField onChange={(e) => setTitle(e.target.value)} />
        <TaskDescriptionField
          onChange={(e) => setDescription(e.target.value)}
        />
        <TaskDateField value={date} onChange={(date) => setDate(date)} />
      </Stack>

      <Stack direction="row" sx={{ width: '100%' }} spacing={2} mt={2}>
        <TaskSelectField
          label="Status"
          name="status"
          value={status}
          onChange={(e) => setStatus(e.target.value as string)}
          items={[
            { value: Status.todo, label: Status.todo.toUpperCase() },
            {
              value: Status.inProgress,
              label: Status.inProgress.toUpperCase(),
            },
            { value: Status.completed, label: Status.completed.toUpperCase() },
          ]}
        />
        <TaskSelectField
          label="Priority"
          name="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value as string)}
          items={[
            { value: Priority.high, label: Priority.high.toUpperCase() },
            {
              value: Priority.normal,
              label: Priority.normal.toUpperCase(),
            },
            { value: Priority.low, label: Priority.low.toUpperCase() },
          ]}
        />
      </Stack>
    </Box>
  );
};

export default TaskForm;
