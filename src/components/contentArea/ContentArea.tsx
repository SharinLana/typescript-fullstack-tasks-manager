import React, { FC, ReactElement } from 'react';
import { format } from 'date-fns';
import { Grid, Box } from '@mui/material';

const ContentArea: FC = (): ReactElement => {
  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h2>
          Status Of Your Tasks As On{' '}
          {format(new Date(), 'PPPP')}
        </h2>
      </Box>
    </Grid>
  );
};

export default ContentArea;
