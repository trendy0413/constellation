import React from 'react'

import type { IconProps } from './types'

const IconLink = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        d='M10.17 13.83a1.264 1.264 0 0 1 0 1.844 1.309 1.309 0 0 1-1.844 0 6.496 6.496 0 0 1 0-9.179l4.596-4.596a6.496 6.496 0 0 1 9.18 0 6.496 6.496 0 0 1 0 9.18l-1.935 1.934a8.97 8.97 0 0 0-.52-3.142l.61-.623a3.871 3.871 0 0 0 0-5.506 3.871 3.871 0 0 0-5.505 0L10.17 8.326a3.871 3.871 0 0 0 0 5.505Zm3.66-5.504a1.309 1.309 0 0 1 1.844 0 6.496 6.496 0 0 1 0 9.179l-4.596 4.596a6.496 6.496 0 0 1-9.18 0 6.496 6.496 0 0 1 0-9.18l1.935-1.934a9.09 9.09 0 0 0 .52 3.155l-.61.61a3.871 3.871 0 0 0 0 5.505 3.871 3.871 0 0 0 5.505 0l4.583-4.583a3.871 3.871 0 0 0 0-5.505 1.264 1.264 0 0 1 0-1.843Z'
        fill={color}
      />
    </svg>
  )
}

export default IconLink
