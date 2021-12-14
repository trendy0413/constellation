import React from 'react'

import type { IconProps } from './types'

const IconRefresh = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
  return (
    <svg width={width} height={height} fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path
        d='M20.473 3.525C18.296 1.35 15.31 0 11.993 0 5.357 0 0 5.37 0 12s5.358 12 11.992 12c5.373 0 9.888-3.522 11.425-8.38a.48.48 0 0 0-.468-.62h-1.768c-.424 0-.797.27-.97.658A8.99 8.99 0 0 1 11.993 21c-4.969 0-9.006-4.035-9.006-9s4.037-9 9.005-9c2.492 0 4.713 1.035 6.334 2.67l-3.124 3.123c-.63.63-.184 1.707.707 1.707h7.341a.75.75 0 0 0 .75-.75V2.413c0-.89-1.077-1.337-1.707-.707l-1.82 1.819Z'
        fill={color}
      />
    </svg>
  )
}

export default IconRefresh
