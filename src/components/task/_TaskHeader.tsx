import React, { FC, ReactElement } from 'react';
import { Box, Chip, Typography } from '@mui/material';

const TaskHeader: FC = (): ReactElement => {
  return (
    <Box>
      <Box>
        <Typography>Default Header</Typography>
      </Box>
      <Box>
        <Chip />
      </Box>
    </Box>
  );
};

export default TaskHeader;
