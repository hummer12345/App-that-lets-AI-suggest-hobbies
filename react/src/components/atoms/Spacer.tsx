import React, { memo } from 'react'

type props = {
  size: number
  horizontal?: boolean
}

const Spacer = memo(({ size, horizontal }: props) => {
  return (
    <div
      style={
        horizontal
          ? {
              width: size,
              height: 'auto',
              display: 'inline-block',
              flexShrink: 0,
            }
          : { width: 'auto', height: size, flexShrink: 0 }
      }
    />
  )
})

Spacer.displayName = 'Spacer'

export default Spacer