import React, { FC, ReactElement } from 'react';
import { format } from 'date-fns';
import { Grid, Box } from '@mui/material';

const ContentArea: FC = (): ReactElement => {
  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h2>Status Of Your Tasks As On {format(new Date(), 'PPPP')}</h2>
      </Box>
      <Grid container display="flex" justifyContent="center">
        <Grid>
          <Box>Task Counter</Box>
          <Box>Task Counter</Box>
          <Box>Task Counter</Box>
        </Grid>
        <Grid>
          <Box>Tasks </Box>
          <Box>Tasks </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContentArea;
