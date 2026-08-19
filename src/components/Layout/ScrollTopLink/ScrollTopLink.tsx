import { Transition } from '@headlessui/react'
import { ArrowUpIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'

import { trackEvent } from '~/components/matomo/trackEvent'

export const ScrollTopLink: React.FC = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(document.documentElement.scrollTop >= 150)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [visible])

  const handleClick = () => {
    window.scrollTo(0, 0)
    trackEvent({
      category: 'Back To Top Button',
      action: 'Click',
      label: `Page: ${window.location.pathname}`,
    })
  }

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
      <button type="button" onClick={handleClick} className="flex">
        <ArrowUpIcon className="fixed right-8 bottom-16 z-40 w-8 rounded-full border-2 border-gray-400 bg-white p-1 text-gray-400 hover:border-purple-300 hover:text-purple-400 md:bottom-52" />
      </button>
    </Transition>
  )
}
