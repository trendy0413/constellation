import React from 'react'

import { colors } from '../../../colors'
import type { RawIconProps } from '../types'

const IconKeyboard = ({
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
        d='M22 20.25H2c-1.105 0-2-.923-2-2.063V5.813C0 4.673.895 3.75 2 3.75h20c1.105 0 2 .923 2 2.063v12.375c0 1.139-.895 2.062-2 2.062ZM5.333 8.734V7.016a.508.508 0 0 0-.5-.516H3.167c-.276 0-.5.23-.5.516v1.718c0 .285.224.516.5.516h1.666c.276 0 .5-.23.5-.516Zm4 0V7.016a.508.508 0 0 0-.5-.516H7.167c-.276 0-.5.23-.5.516v1.718c0 .285.224.516.5.516h1.666c.276 0 .5-.23.5-.516Zm4 0V7.016a.508.508 0 0 0-.5-.516h-1.666c-.277 0-.5.23-.5.516v1.718c0 .285.223.516.5.516h1.666c.277 0 .5-.23.5-.516Zm4 0V7.016a.508.508 0 0 0-.5-.516h-1.666c-.277 0-.5.23-.5.516v1.718c0 .285.223.516.5.516h1.666c.277 0 .5-.23.5-.516Zm4 0V7.016a.508.508 0 0 0-.5-.516h-1.666c-.277 0-.5.23-.5.516v1.718c0 .285.223.516.5.516h1.666c.277 0 .5-.23.5-.516Zm-14 4.125v-1.718a.508.508 0 0 0-.5-.516H5.167c-.276 0-.5.23-.5.516v1.718c0 .285.224.516.5.516h1.666c.276 0 .5-.23.5-.516Zm4 0v-1.718a.508.508 0 0 0-.5-.516H9.167c-.276 0-.5.23-.5.516v1.718c0 .285.224.516.5.516h1.666c.277 0 .5-.23.5-.516Zm4 0v-1.718a.508.508 0 0 0-.5-.516h-1.666c-.277 0-.5.23-.5.516v1.718c0 .285.223.516.5.516h1.666c.277 0 .5-.23.5-.516Zm4 0v-1.718a.508.508 0 0 0-.5-.516h-1.666c-.277 0-.5.23-.5.516v1.718c0 .285.223.516.5.516h1.666c.277 0 .5-.23.5-.516Zm-14 4.125v-1.718a.508.508 0 0 0-.5-.516H3.167c-.276 0-.5.23-.5.516v1.718c0 .285.224.516.5.516h1.666c.276 0 .5-.23.5-.516Zm12 0v-1.718a.508.508 0 0 0-.5-.516H7.167c-.276 0-.5.23-.5.516v1.718c0 .285.224.516.5.516h9.666c.277 0 .5-.23.5-.516Zm4 0v-1.718a.508.508 0 0 0-.5-.516h-1.666c-.277 0-.5.23-.5.516v1.718c0 .285.223.516.5.516h1.666c.277 0 .5-.23.5-.516Z'
        fill={color === 'currentColor' ? 'currentColor' : colors[color]}
      />
    </svg>
  )
}

export default IconKeyboard
