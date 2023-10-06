/* eslint-disable import/no-extraneous-dependencies */
import {
  Button,
  Dialog,
  DialogTrigger,
  Popover as ReactAriaPopover,
} from 'react-aria-components';

type Props = {
  button: React.ReactNode;
  label: React.ReactNode;
};

export const Popover: React.FC<Props> = ({ button, label }) => {
  return (
    <DialogTrigger>
      <Button>{button}</Button>
      <ReactAriaPopover>
        <Dialog>{label}</Dialog>
      </ReactAriaPopover>
    </DialogTrigger>
  );
};
