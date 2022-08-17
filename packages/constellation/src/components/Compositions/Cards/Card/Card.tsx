import cx from 'classnames'
import React from 'react'

import { SemanticColors, Text } from '../../../Base'
import { Button, CloseButton } from '../../../Primitives'
import { Logo } from '../../Logo'
import { CardComponent } from './Card.types'

const Card: CardComponent = ({
  accentColor,
  border,
  button,
  buttonContent = 'GO',
  buttonOnClick,
  className,
  content,
  footer,
  header,
  logoContent,
  onCardClick,
  onClose,
  title,
  variant = 'default',
}) => {
  const variantStyles = {
    announcement: 'flex-row items-center pt-3',
    callout: 'flex-row items-center',
    cta: 'flex-col items-start',
    default: 'flex-col',
  }

  const bodyVariantStyles = {
    announcement: 'body2',
    callout: 'paragraph2',
    cta: 'paragraph1',
    default: 'paragraph1',
  }

  const titleVariantStyles = {
    announcement: 'caption1',
    callout: 'caption1',
    cta: 'body2',
    default: 'title3',
  }

  const isDefault = variant === 'default'
  const isCta = variant === 'cta'

  const Component = onCardClick ? 'button' : 'div'

  return (
    <Component
      onClick={onCardClick}
      className={cx(
        'constellation drop-shadow-cards bg-background-ultra-light mode-light:bg-white-000 w-[327px] rounded-2xl p-4 flex gap-4 relative',
        variantStyles[variant],
        {
          'border border-medium': border,
        },
        { 'border-blue-400': variant === 'callout' },
        className,
      )}
      style={accentColor ? { borderColor: accentColor } : {}}
    >
      {onClose && variant !== 'callout' && (
        <CloseButton onClick={onClose} className='absolute top-4 right-4' />
      )}
      <div className='flex flex-row items-center gap-2'>
        {logoContent && (
          <Logo
            primaryContent={logoContent}
            singleVariant={isDefault || isCta ? 'base' : 'large'}
          />
        )}
        {header}
      </div>

      <div
        className={cx('flex flex-col', {
          'w-44': variant === 'announcement' || variant === 'callout',
        })}
      >
        <Text
          variant={titleVariantStyles[variant] as 'caption1' | 'body2' | 'title3'}
          className='!m-0 w-full'
          truncate={variant === 'announcement' || variant === 'callout'}
          color={variant === 'announcement' ? SemanticColors.medium : SemanticColors.title}
        >
          {title}
        </Text>
        <Text
          variant={bodyVariantStyles[variant] as 'body2' | 'paragraph2' | 'paragraph1'}
          truncate={variant === 'callout'}
          lineClamp={variant === 'announcement' ? 2 : 0}
          className='!m-0 !mt-1 w-full'
        >
          {content}
        </Text>
      </div>
      {(variant === 'callout' || button) && (
        <Button
          text={buttonContent}
          onClick={buttonOnClick}
          variant='primary'
          size={variant === 'callout' ? 'small' : 'default'}
          className={cx({ 'ml-auto': variant === 'callout' })}
          style={accentColor ? { backgroundColor: accentColor } : {}}
        />
      )}
      {footer}
    </Component>
  )
}

export default Card
