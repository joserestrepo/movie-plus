import React, { useState } from 'react'

import NavlinksComponent from './components/NavLinks/Navlinks'
import NavLinkItemComponent from './components/NavLinkItem/NavLinkItem'
import { HiLogout } from 'react-icons/hi'
import { useDispatch } from 'react-redux'
import { signOut } from '@redux/slices/auth.slice'

const NavBarComponent: React.FC = () => {
  const [toggle, setToggle] = useState(false)
  const dispatch = useDispatch()

  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex  gap-8 items-center">
        <h1>Movie plus</h1>
        <NavlinksComponent />
      </div>
      <img
        src="assets/images/avatar.jpg"
        className="w-[40px] rounded-full cursor-pointer"
        onClick={() => setToggle(!toggle)}
      />
      {toggle && (
        <div
          className="absolute mt-28 bg-[#121212] 
            border-[1px] border-gray-700 p-3 px-5 py-4 z-[99] right-0"
        >
          <NavLinkItemComponent
            title={'Cerrar sesión'}
            toRedirect={''}
            Icon={HiLogout}
            onClick={() => dispatch({ type: signOut.type })}
          />
        </div>
      )}
    </div>
  )
}

export default NavBarComponent
