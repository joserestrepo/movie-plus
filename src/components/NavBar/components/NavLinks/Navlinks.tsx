import React, { useState } from 'react'

import { HiHome, HiMagnifyingGlass, HiPlayCircle, HiTv } from 'react-icons/hi2'
import NavLinkItemComponent from '../NavLinkItem/NavLinkItem'
import { HiDotsVertical } from 'react-icons/hi'

const NavlinksComponent: React.FC = () => {
  const [toggle, setToggle] = useState(false)
  const menu = [
    {
      name: 'HOME',
      icon: HiHome,
      toRedirect: '/home',
    },
    {
      name: 'MOVIES',
      icon: HiPlayCircle,
      toRedirect: '/home',
    },
    {
      name: 'SERIES',
      icon: HiTv,
      toRedirect: '/home',
    },
    {
      name: 'SEARCH',
      icon: HiMagnifyingGlass,
      toRedirect: '/home',
    },
  ]

  return (
    <>
      <div className="hidden md:flex gap-8">
        {menu.map((item, index) => (
          <NavLinkItemComponent
            title={item.name}
            Icon={item.icon}
            toRedirect={item.toRedirect}
            key={index}
          />
        ))}
      </div>
      <div className="flex md:hidden gap-5">
        {menu.map(
          (item, index) =>
            index < 3 && (
              <NavLinkItemComponent
                title={''}
                Icon={item.icon}
                toRedirect={item.toRedirect}
                key={index}
              />
            ),
        )}
        <div className="md:hidden" onClick={() => setToggle(!toggle)}>
          <NavLinkItemComponent
            title={''}
            toRedirect={''}
            Icon={HiDotsVertical}
          />
          {toggle ? (
            <div
              className="absolute mt-3 bg-[#121212] 
            border-[1px] border-gray-700 p-3 px-5 py-4 z-[99]"
            >
              {menu.map(
                (item, index) =>
                  index > 2 && (
                    <NavLinkItemComponent
                      title={item.name}
                      Icon={item.icon}
                      toRedirect={''}
                      key={index}
                    />
                  ),
              )}
            </div>
          ) : null}
        </div>
      </div>
    </>
  )
}

export default NavlinksComponent
