import { FC } from 'react'
import { Box, Grid, IconButton, Typography } from '@mui/material'
import { GridCloseIcon } from '@mui/x-data-grid'
import { DataColumn } from 'src/Components/generic'

import { TExchangeRateDetailsModal } from './types'

import './styles.css'

export const ExchangeRateDetailsModal: FC<TExchangeRateDetailsModal> = ({
  openModal,
  setOpenModal,
  selectedExchangeRate,
}) => {
  return (
    <>
      <IconButton
        style={{
          position: 'absolute',
          zIndex: '999',
          top: 'calc(50% - 86px)',
          right: '12px',
        }}
        onClick={() => setOpenModal(!openModal)}
      >
        <GridCloseIcon />
      </IconButton>
      <Box sx={{ bgcolor: 'background.paper' }} className="modal">
        <Grid container>
          <Typography
            variant="h6"
            style={{
              display: 'flex',
              alignItems: 'center',
              marginRight: '24px',
            }}
          >
            {`Exchange Rate of ${selectedExchangeRate?.name} - ${selectedExchangeRate?.shortName}`}
          </Typography>
        </Grid>
        <Grid container style={{ flexWrap: 'nowrap' }}>
          {selectedExchangeRate &&
            Object.keys(selectedExchangeRate).map((key) => (
              <DataColumn
                key={key}
                title={key}
                exchangeRate={
                  selectedExchangeRate[key as keyof typeof selectedExchangeRate]
                }
              />
            ))}
        </Grid>
      </Box>
    </>
  )
}
