import React, { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';

const TaskCounter: FC = (): ReactElement => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          sx={{
            backgroundColor: 'transparent',
            border: '5px solid',
            width: '96px',
            height: '96px',
            marginBottom: '16px',
            borderColor: 'warning.light',
          }}
        >
          <Typography variant="h4" color="#fffff">
            10
          </Typography>
        </Avatar>
        <Typography
          color="#ffff"
          fontWeight="bold"
          fontSize="20px"
          variant="h5"
        >
          Subtitle
        </Typography>
      </Box>
    </>
  );
};

export default TaskCounter;
