export interface ITaskFooter {
  id: string;
  status?: string;
  onStatusChange?: (e: React.SyntheticEvent<Element, Event>) => void;
  onClick?: (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>,
  ) => void;
}
