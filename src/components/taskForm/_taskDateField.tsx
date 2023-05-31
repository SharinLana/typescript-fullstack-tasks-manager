import React, { FC, ReactElement, useState } from 'react';
import { TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const TaskDateField: FC = (): ReactElement => {
  const [date, setDate] = React.useState<Date | null>(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label="Task Date"
        format="dd/MM/yyyy"
        value={date}
        onChange={(newValue) => {
          setDate(newValue);
        }}
      />
    </LocalizationProvider>
  );
};

export default TaskDateField;
