import { FC } from 'react'
import { Grid, Typography } from '@mui/material'

import type { TDataColumn } from './types'

export const DataColumn: FC<TDataColumn> = ({ title, exchangeRate }) => {
  return (
    <Grid
      title={title}
      style={{
        margin: '12px',
        padding: '8px',
      }}
    >
      <Typography>{title}</Typography>
      <Typography style={{ marginTop: '12px' }}>{exchangeRate}</Typography>
    </Grid>
  )
}
