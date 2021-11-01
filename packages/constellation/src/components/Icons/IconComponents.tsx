import type { IconProps } from './types'

const IconComponents = ({
  color = 'currentColor',
  height = 24,
  width = 24,
  ...props
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        d='M17.286 5.286 12.07 0 6.786 5.286 12.07 10.5l5.215-5.214Zm-8.357 0 3.142-3.143 3.072 3.143-3.072 3.071L8.93 5.286ZM24 12l-5.214-5.214L13.57 12l5.215 5.286L24 12Zm-13.429 0L5.286 6.786 0 12l5.286 5.286L10.57 12Zm5.072 0 3.143-3.143L21.929 12l-3.143 3.143L15.643 12Zm-13.5 0 3.143-3.143L8.429 12l-3.143 3.143L2.143 12Zm15.143 6.786L12.07 13.5l-5.285 5.286L12.07 24l5.215-5.214Zm-8.357 0 3.142-3.143 3.072 3.143-3.072 3.071-3.142-3.071Z'
        fill={color}
      />
    </svg>
  )
}

export default IconComponents
