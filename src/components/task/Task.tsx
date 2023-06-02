import React, { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import TaskHeader from './_TaskHeader';
import TaskDescription from './_TaskDescription';
import TaskFooter from './_TaskFooter';

const Task: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="flex-start"
      flexDirection="column"
      mb={4}
      p={2}
      sx={{
        width: '100%',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: 'error.light',
      }}
    >
      <TaskHeader />
      <TaskDescription />
      <TaskFooter />
    </Box>
  );
};

export default Task;
