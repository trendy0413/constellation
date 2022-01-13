import React from 'react'

import { colors } from '../../../colors'
import type { RawIconProps } from '../types'

const IconPresent = ({
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
        d='M15.938 5.438h-3.009c.435-1.02 1.378-2.625 3.009-2.625.723 0 1.312.588 1.312 1.312 0 .724-.588 1.313-1.312 1.313Zm-7.876 0A1.314 1.314 0 0 1 6.75 4.125c0-.724.589-1.313 1.313-1.313 1.622 0 2.568 1.606 3.005 2.626H8.063Zm13.782 0h-3.646c.225-.388.364-.833.364-1.313A2.628 2.628 0 0 0 15.938 1.5C13.883 1.5 12.66 3.066 12 4.337 11.342 3.066 10.117 1.5 8.062 1.5a2.628 2.628 0 0 0-2.624 2.625c0 .48.139.925.364 1.313H2.156a.656.656 0 0 0-.656.656v2.625c0 .363.294.656.656.656h19.688a.656.656 0 0 0 .656-.656V6.094a.656.656 0 0 0-.656-.657ZM10.688 22.5h2.624V10.687h-2.624V22.5ZM20.531 21.844v-10.5a.656.656 0 0 0-.656-.656h-5.25V22.5h5.25a.656.656 0 0 0 .656-.656ZM9.375 22.5V10.687h-5.25a.656.656 0 0 0-.656.657v10.5c0 .363.294.656.656.656h5.25Z'
        fill={color === 'currentColor' ? 'currentColor' : colors[color]}
      />
    </svg>
  )
}

export default IconPresent
