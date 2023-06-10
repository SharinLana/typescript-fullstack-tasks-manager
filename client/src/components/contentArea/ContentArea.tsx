import React, { FC, ReactElement } from 'react';
import { format } from 'date-fns';
import { Grid, Box, Alert, LinearProgress } from '@mui/material';
import { useQuery } from 'react-query';
import TaskCounter from '../taskCounter/TaskCounter';
import Task from '../task/Task';
import { sendApiRequest } from '../../helpers/sendApiRequest';
import { ICreateTaskResponse } from './interfaces/ICreateTaskResponse';

const ContentArea: FC = (): ReactElement => {
  const { error, isLoading, data, refetch } = useQuery('tasks', async () => {
    return await sendApiRequest<ICreateTaskResponse[]>(
      'http://localhost:3200/',
      'GET',
    );
  });

  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h2 style={{ fontWeight: 400 }}>
          Status Of Your Tasks As On {format(new Date(), 'PPPP')}
        </h2>
      </Box>
      <Grid container display="flex" justifyContent="center">
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
        >
          <TaskCounter />
          <TaskCounter />
          <TaskCounter />
        </Grid>
        <Grid item display="flex" flexDirection="column" xs={10} md={8}>
          {error ? (
            <Alert severity="error">
              There was an error fetching your tasks
            </Alert>
          ) : (
            ''
          )}

          {!error && Array.isArray(data) && data.length === 0 && (
            <Alert severity="warning">
              You do not have any tasks created yet. Start by creating some
              tasks
            </Alert>
          )}
          <Task id="1" />
          <Task id="2" />
          <Task id="3" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContentArea;
