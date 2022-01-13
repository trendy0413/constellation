import React from 'react'

import { colors } from '../../../colors'
import type { RawIconProps } from '../types'

const IconPlaceholder = ({
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
        d='M0 0h1.917v1H2v.917h-.083V2H1v-.083H0V0Zm3.75 0h1.833v2H3.75V0Zm3.667 0H9.25v2H7.417V0Zm3.666 0h1.834v2h-1.834V0Zm3.667 0h1.833v2H14.75V0Zm3.667 0h1.833v2h-1.833V0Zm3.666 0H24v1.917h-1V2h-.917v-.083H22V1h.083V0ZM0 5.583V3.75h2v1.833H0ZM24 3.75v1.833h-2V3.75h2ZM0 9.25V7.417h2V9.25H0Zm24-1.833V9.25h-2V7.417h2Zm-24 5.5v-1.834h2v1.834H0Zm24-1.834v1.834h-2v-1.834h2Zm-24 5.5V14.75h2v1.833H0Zm24-1.833v1.833h-2V14.75h2Zm-24 5.5v-1.833h2v1.833H0Zm24-1.833v1.833h-2v-1.833h2ZM1.917 24H0v-1.917h1V22h.917v.083H2V23h-.083v1Zm3.666 0H3.75v-2h1.833v2Zm3.667 0H7.417v-2H9.25v2Zm3.667 0h-1.834v-2h1.834v2Zm3.666 0H14.75v-2h1.833v2Zm3.667 0h-1.833v-2h1.833v2Zm1.833 0v-1H22v-.917h.083V22H23v.083h1V24h-1.917Z'
        fill={color === 'currentColor' ? 'currentColor' : colors[color]}
      />
    </svg>
  )
}

export default IconPlaceholder
