import { Button } from '@mui/material'
import React from 'react'

export const CTAButton = ({ disabled, sx, size, fullWidth, variant='contained', title, style}) => {
  return (
    <>
        <Button  disabled={disabled} sx={sx} size={size} fullWidth={fullWidth} variant={variant} style={style}
        
        >{title}</Button>
    </>
  )
}
