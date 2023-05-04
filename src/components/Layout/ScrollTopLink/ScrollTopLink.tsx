import { Transition } from '@headlessui/react';
import { ArrowUpIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';

export const ScrollTopLink: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      setVisible(e.target.documentElement.scrollTop >= 150);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [visible]);

  return (
    <Transition
      show={visible}
      enter="transition-opacity duration-150"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <button
        type="button"
        onClick={() => window.scrollTo(0, 0)}
        className="flex no-underline"
      >
        <ArrowUpIcon className="hover:text-puple-400 fixed bottom-16 right-8 z-40 w-10 rounded-full border-2 border-gray-400 bg-white p-1 text-gray-400 md:bottom-52" />
      </button>
    </Transition>
  );
};
