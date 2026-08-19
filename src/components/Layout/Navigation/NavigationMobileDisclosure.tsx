import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react'
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/20/solid'
import React, { type ReactNode } from 'react'

type Props = {
  button: ReactNode
  children: ReactNode
}

export const NavigationMobileDisclosure: React.FC<Props> = ({ button, children }) => {
  return (
    <Disclosure>
      {({ open }: { open: boolean }) => (
        <>
          {/* Mobile menu button */}
          <DisclosureButton className="inline-flex w-full items-center justify-between py-3 !text-sm">
            {button}
            {open ? (
              <MinusCircleIcon className="h-6 text-black" />
            ) : (
              <PlusCircleIcon className="h-6 text-black" />
            )}
          </DisclosureButton>

          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <DisclosurePanel className="flex flex-col gap-2 py-2 pl-5">{children}</DisclosurePanel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
