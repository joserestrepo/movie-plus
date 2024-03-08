import React from 'react'
import { NavLinkItemProps } from './models/navLinkItem.model'
import { Link } from 'react-router-dom'

const NavLinkItemComponent: React.FC<NavLinkItemProps> = ({
  Icon,
  title,
  toRedirect,
  onClick,
}) => {
  return (
    <>
      {onClick ? (
        <div
          className="text-white flex items-center gap-3
        text-[15px] font-semibold cursor-pointer hover:underline
        underline-offset-8 mb-2"
          onClick={onClick}
        >
          <Icon />
          <h2 className="tracking-wider">{title}</h2>
        </div>
      ) : (
        <Link
          to={toRedirect}
          className="text-white flex items-center gap-3
                      text-[15px] font-semibold cursor-pointer hover:underline
                      underline-offset-8 mb-2"
        >
          <Icon />
          <h2 className="tracking-wider">{title}</h2>
        </Link>
      )}
    </>
  )
}

export default NavLinkItemComponent
