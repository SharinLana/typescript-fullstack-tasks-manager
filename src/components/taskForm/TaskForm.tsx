import React, { FC, ReactElement } from 'react';
import { Box, Typography } from '@mui/material';

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
    </Box>
  );
};

export default TaskForm;
