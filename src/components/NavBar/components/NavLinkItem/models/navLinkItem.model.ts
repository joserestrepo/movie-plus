import { ElementType } from 'react'
import { To } from 'react-router-dom'

export interface NavLinkItemProps {
  Icon: ElementType
  title: string
  toRedirect: To
  onClick?: any
}
