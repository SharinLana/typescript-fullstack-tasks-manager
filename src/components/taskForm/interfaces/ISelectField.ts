import { IDisabled } from './IDisabled';
import { SelectChangeEvent } from '@mui/material';

export interface ISelectField extends IDisabled {
  name?: string;
  label?: string;
  value?: string;
  onChange?: (e: SelectChangeEvent) => void;
}
