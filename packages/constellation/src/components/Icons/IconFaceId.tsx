import type { IconProps } from './types'

const IconFaceId = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
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
        d='M1.194 6.567a.597.597 0 1 1-1.194 0v-1.99c0-1.352.125-2 .485-2.673A3.418 3.418 0 0 1 1.904.485C2.577.125 3.225 0 4.577 0h1.99a.597.597 0 1 1 0 1.194h-1.99c-1.172 0-1.634.09-2.11.344a2.224 2.224 0 0 0-.929.929c-.255.476-.344.938-.344 2.11v1.99ZM7.284 8.239a.836.836 0 0 0-.836.836v1.671a.836.836 0 0 0 1.671 0V9.075a.836.836 0 0 0-.835-.836ZM16.716 8.239a.836.836 0 0 0-.835.836v1.671a.836.836 0 0 0 1.671 0V9.075a.836.836 0 0 0-.835-.836ZM8.147 17.513a.597.597 0 1 1 .72-.952c.899.68 2.043 1.11 3.073 1.11 1.084 0 2.275-.465 3.187-1.199a.597.597 0 1 1 .749.93c-1.114.897-2.565 1.464-3.936 1.464-1.306 0-2.698-.523-3.793-1.353ZM10.269 14.328c0 .33.267.597.597.597 1.529 0 2.149-.778 2.149-2.388V8.836a.597.597 0 0 0-1.194 0v3.701c0 1.003-.153 1.194-.955 1.194a.597.597 0 0 0-.597.597ZM23.403 7.164a.597.597 0 0 1-.597-.597v-1.99c0-1.172-.09-1.634-.344-2.11a2.224 2.224 0 0 0-.929-.929c-.476-.255-.938-.344-2.11-.344h-1.99a.597.597 0 0 1 0-1.194h1.99c1.352 0 2 .125 2.673.485.61.326 1.093.809 1.419 1.419.36.673.485 1.321.485 2.673v1.99c0 .33-.267.597-.597.597ZM1.194 17.433a.597.597 0 0 0-1.194 0v1.99c0 1.352.125 2 .485 2.673.326.61.809 1.093 1.419 1.419.673.36 1.321.485 2.673.485h1.99a.597.597 0 1 0 0-1.194h-1.99c-1.172 0-1.634-.09-2.11-.344a2.224 2.224 0 0 1-.929-.929c-.255-.476-.344-.938-.344-2.11v-1.99ZM23.403 16.836a.597.597 0 0 0-.597.597v1.99c0 1.172-.09 1.634-.344 2.11a2.224 2.224 0 0 1-.929.929c-.476.255-.938.344-2.11.344h-1.99a.597.597 0 0 0 0 1.194h1.99c1.352 0 2-.125 2.673-.485a3.418 3.418 0 0 0 1.419-1.419c.36-.673.485-1.321.485-2.673v-1.99a.597.597 0 0 0-.597-.597Z'
        fill={color}
      />
    </svg>
  )
}

export default IconFaceId
