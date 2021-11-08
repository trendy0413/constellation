import type { IconProps } from './types'

const IconReceiveV2 = ({
  color = 'currentColor',
  height = 24,
  width = 24,
  ...props
}: IconProps) => {
  return (
    <svg width={width} height={height} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M17 1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V8A5 5 0 0 1 9 8V1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V4a4.977 4.977 0 0 1 2-.9V1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1.6c.739.15 1.419.463 2 .9V1.5ZM.684 14.772l3.844-1.281a4 4 0 0 1 2.89.14l6.549 2.91a.953.953 0 0 1-.619 1.796l-5.023-1.256a.592.592 0 1 0-.272 1.153l5.55 1.233A1.97 1.97 0 0 0 16 17.544v-.036c0-.325-.13-.637-.36-.867a.613.613 0 0 1 .193-.998l5.71-2.447c.301-.13.626-.196.955-.196h.088a1 1 0 0 1 .707 1.707L23 15l-6.947 6.947A3.595 3.595 0 0 1 13.511 23c-1.002 0-2-.14-2.964-.415L5.27 21.077A1.998 1.998 0 0 0 4.72 21h-.113a2 2 0 0 0-1.11.336L1.314 22.79c-.205.136-.445.209-.691.209A.623.623 0 0 1 0 22.377v-6.656a1 1 0 0 1 .684-.949Z'
        fill={color}
      />
    </svg>
  )
}

export default IconReceiveV2
