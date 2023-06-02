import React, { FC, ReactElement } from 'react';
import { Box, Button, Switch, FormControlLabel } from '@mui/material';

const TaskFooter: FC = (): ReactElement => {
  return (
    <Box>
      <FormControlLabel
        label="In Progress"
        control={<Switch color="warning" />}
      />
      <Button>Mark Complete</Button>
    </Box>
  );
};

export default TaskFooter;
