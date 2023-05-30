import React, { FC, ReactElement } from 'react';
import { Grid } from '@mui/material';

const ContentArea: FC = (): ReactElement => {
  return (
    <Grid item md={8} px={4}>
      <h2>Content Area</h2>
    </Grid>
  );
};

export default ContentArea;
