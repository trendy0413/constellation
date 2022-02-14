import { styled } from '@stitches/react'
import React from 'react'

import { ColorKeysType } from '../../colors/types'
import { theme } from '../../stitches.config'
import { TextComponentProps } from './types'

/* eslint-disable sort-keys, sort-keys-fix/sort-keys-fix */
const BaseText = styled('span', {
  fontFeatureSettings: '"zero", "ss01"',
  color: '$grey800',
  variants: {
    color: Object.assign(
      {},
      ...Object.keys(theme.colors).map((color) => ({
        [color]: {
          color: theme.colors[color as ColorKeysType],
        },
      })),
    ),
    variant: {
      display: {
        fontSize: '$40',
        fontWeight: 600,
        fontFeatureSettings: "'zero' on, 'ss01' on",
      },
      'title-1': {
        fontSize: '$32',
        fontWeight: 600,
        fontFeatureSettings: "'ss01' on, 'zero' on",
      },
      'title-2': {
        fontSize: '$24',
        fontWeight: 600,
        fontFeatureSettings: "'ss01' on, 'zero' on",
      },
      'title-3': {
        fontSize: '$20',
        fontWeight: 600,
        fontFeatureSettings: "'zero' on, 'ss01' on",
      },
      subheading: {
        fontSize: '$20',
        fontWeight: 500,
        fontFeatureSettings: "'ss01' on, 'zero' on",
      },
      'body-mono': {
        fontSize: '$16',
        fontWeight: 500,
        fontFeatureSettings: "'tnum' on, 'lnum' on, 'zero' on, 'ss01' on",
      },
      'body-1': {
        fontSize: '$16',
        fontWeight: 500,
        fontFeatureSettings: "'ss01' on, 'zero' on",
      },
      'body-2': {
        fontSize: '$16',
        fontWeight: 600,
        fontFeatureSettings: "'ss01' on, 'zero' on",
      },
      'paragraph-mono': {
        fontSize: '$14',
        fontWeight: 500,
        fontFeatureSettings: "'tnum' on, 'lnum' on, 'zero' on, 'ss01' on",
      },
      'paragraph-1': {
        fontSize: '$14',
        fontWeight: 500,
        fontFeatureSettings: "'zero' on, 'ordn' on",
      },
      'paragraph-2': {
        fontSize: '$14',
        fontWeight: 600,
        fontFeatureSettings: "'zero' on, 'ss01' on",
      },
      'caption-1': {
        fontSize: '$12',
        fontWeight: 500,
        fontFeatureSettings: "'ss01' on, 'zero' on",
      },
      'caption-2': {
        fontSize: '$12',
        fontWeight: 600,
        fontFeatureSettings: "'zero' on, 'ss01' on",
      },
      overline: {
        fontSize: '$12',
        fontWeight: 600,
        fontFeatureSettings: "'zero' on, 'ss01' on",
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
      },
      micro: {
        fontSize: '$10',
        fontWeight: 500,
        fontFeatureSettings: "'ss01' on, 'zero' on",
      },
    },
  },
})
/* eslint-enable sort-keys, sort-keys-fix/sort-keys-fix */

const Text = ({
  as = 'span',
  children,
  color = 'grey800',
  variant = 'body-1',
  ...props
}: TextComponentProps) => (
  <BaseText as={as} color={color} variant={variant} {...props}>
    {children}
  </BaseText>
)

export default React.memo(Text)
