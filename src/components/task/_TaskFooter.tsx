import React, { FC, ReactElement } from 'react';
import { Box, Button, Switch, FormControlLabel } from '@mui/material';

const TaskFooter: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="space-between"
      mt={4}
    >
      <FormControlLabel
        label="In Progress"
        control={<Switch color="warning" />}
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: 'white' }}
      >
        Mark Complete
      </Button>
    </Box>
  );
};

export default TaskFooter;
