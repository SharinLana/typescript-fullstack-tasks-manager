import React, { FC, ReactElement } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import TaskTitleField from './_taskTitleField';
import TaskDescriptionField from './_taskDescriptionField';
import TaskDateField from './_taskDateField';
import TaskSelectField from './_taskSelectField';

const TaskForm: FC = (): ReactElement => {
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
        <TaskTitleField />
        <TaskDescriptionField />
        <TaskDateField />
      </Stack>

      <Stack direction="row" sx={{ width: '100%' }} spacing={2} mt={2}>
        <TaskSelectField />
        <TaskSelectField />
      </Stack>
    </Box>
  );
};

export default TaskForm;
