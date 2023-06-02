import React, { FC, ReactElement } from 'react';
import { Box, Chip, Typography } from '@mui/material';

const TaskHeader: FC = (): ReactElement => {
  return (
    <Box display="flex" width="100%" justify-content="space-between" mb={4}>
      <Box>
        <Typography variant="h6">Default Header</Typography>
      </Box>
      <Box>
        <Chip variant="outlined" />
      </Box>
    </Box>
  );
};

export default TaskHeader;
