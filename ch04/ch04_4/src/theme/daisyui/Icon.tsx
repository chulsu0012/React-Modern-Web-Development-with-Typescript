import type {FC} from 'react'
import type { ButtonProps } from './Button'
import { Button } from './Button'
import { Icon as CIcon } from '../../components'
import type { IconProps as CIconProps } from '../../components'

export type IconProps = ButtonProps & CIconProps & {
    iconClassName?: string
}

export const Icon: FC<IconProps> = ({name, iconClassName, className, ...buttonProps}) =>
{
  const btnClassName = ['btn-circle', className].join(' ')
  return (
    <button {...buttonProps} className={btnClassName}>
      <CIcon className={iconClassName} name={name}/>
    </button>
  )
}