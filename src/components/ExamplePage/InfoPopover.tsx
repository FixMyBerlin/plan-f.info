import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { Popover } from '../Layout/Popover';

type Props = {
  label: React.ReactNode;
};

export const InfoPopover: React.FC<Props> = ({ label }) => {
  return (
    <Popover
      button={<InformationCircleIcon className="h-6 w-6 text-gray-900" />}
      label={
        <div className="p-4 bg-black text-white leading-snug max-w-sm text-sm m-2 ml-6">
          {label}
        </div>
      }
    />
  );
};
