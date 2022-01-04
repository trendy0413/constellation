import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

import { colors } from '../../colors'
import Icon from '../Icon'
import { IconName } from '../Icon/types'
import { CopyToClipboardTypes, IconProps } from './types'

const iconColorStyles = (
  colorCode: keyof typeof colors,
  hoverColorCode?: keyof typeof colors,
) => css`
  svg {
    & > path {
      fill: ${colors[colorCode]};
    }
    &:hover > path {
      fill: ${hoverColorCode ? colors[hoverColorCode] : colors[colorCode]};
    }
  }
`

const getIconColor = ({
  color = 'red600',
  hoverColor = 'dark600',
  showSuccess,
  successColor = 'green600',
  successHoverColor = 'green400',
}: IconProps) =>
  showSuccess
    ? iconColorStyles(successColor, successHoverColor)
    : iconColorStyles(color, hoverColor)

const StyledIcon = styled.div<IconProps>`
  width: fit-content;
  svg {
    & > path {
      transition: fill 150ms ease;
    }
  }

  ${(props) => getIconColor(props)};

  &:hover {
    cursor: pointer;
  }
`

const CopyToClipboard = ({
  color,
  customHandler,
  hoverColor,
  size,
  successColor,
  successHoverColor,
  value,
}: CopyToClipboardTypes) => {
  let timeout: ReturnType<typeof setTimeout>

  const [showSuccess, setShowSuccess] = useState<boolean>(false)

  useEffect(() => {
    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClick = () => {
    setShowSuccess(true)

    if (customHandler) {
      customHandler()
    }

    if (document) {
      const temp = document.createElement('textarea')
      temp.value = value || ''
      temp.setAttribute('readonly', '')
      temp.style.position = 'absolute'
      temp.style.left = '-9999px'

      document.body.appendChild(temp)

      temp.select()

      const res: void | boolean = document.execCommand('copy')

      if (res === true) {
        timeout = setTimeout(() => {
          setShowSuccess(false)
        }, 1500)
      }

      document.body.removeChild(temp)
    }
  }

  return (
    <StyledIcon
      color={color}
      hoverColor={hoverColor}
      onClick={handleClick}
      showSuccess={showSuccess}
      successColor={successColor}
      successHoverColor={successHoverColor}
    >
      {showSuccess ? (
        <Icon color={colors.green600} name={IconName.CHECK} size={size} />
      ) : (
        <Icon color={colors.green600} name={IconName.CLIPBOARD} size={size} />
      )}
    </StyledIcon>
  )
}

export default CopyToClipboard
