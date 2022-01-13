import React from 'react'

import { colors } from '../../../colors'
import type { RawIconProps } from '../types'

const IconUnlocked = ({
  color = 'currentColor',
  height = 24,
  width = 24,
  ...props
}: RawIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      fill={color === 'currentColor' ? 'currentColor' : colors[color]}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M16.998 8h1c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2h-12c-1.1 0-2-.9-2-2V10c0-1.1.9-2 2-2h1v.002h1.897l.003-.067V8h6.2V6c0-1.71-1.39-3.1-3.1-3.1-1.45 0-2.67 1-3.008 2.346l-1.787-.669A5.002 5.002 0 0 1 16.997 6v2Zm-7 7c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2Z'
        fill={color === 'currentColor' ? 'currentColor' : colors[color]}
      />
    </svg>
  )
}

export default IconUnlocked
