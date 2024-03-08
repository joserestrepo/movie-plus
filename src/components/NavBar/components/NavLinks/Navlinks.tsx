import React from 'react'

import { HiHome } from 'react-icons/hi2'
import NavLinkItemComponent from '../NavLinkItem/NavLinkItem'

const NavlinksComponent: React.FC = () => {
  const menu = [
    {
      name: 'HOME',
      icon: HiHome,
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
      </div>
    </>
  )
}

export default NavlinksComponent
