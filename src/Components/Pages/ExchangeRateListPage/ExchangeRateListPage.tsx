import { FC, useState, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios'
import {
  Box,
  Container,
  Grid,
  CircularProgress,
  Typography,
  Modal,
  DialogContent,
} from '@mui/material'
import { Table } from 'src/Components/generic'
import { ExchangeRateDetailsModal } from './ExchangeRateListPageModal'
import { columns } from './columns'
import { baseUrl } from 'src/config'

import { TExchangeRateItem, TExchangeRateList } from './types'

export const ExchangeRateListPage: FC = () => {
  const [exchangeRateList, setExchangeRateList] = useState<TExchangeRateList>(
    []
  )
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [selectedExchangeRate, setSelectedExchangeRate] =
    useState<TExchangeRateItem | null>(null)
  const [openModal, setOpenModal] = useState<boolean>(false)

  const onFetchExchangeRateList = async (): Promise<void> => {
    try {
      const res: AxiosResponse<TExchangeRateList> = await axios.get(baseUrl)
      if (res) setExchangeRateList(res.data)
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  const onRowClick = (rowData: TExchangeRateItem) => {
    setSelectedExchangeRate(rowData)
    setOpenModal(!openModal)
  }

  useEffect(() => {
    onFetchExchangeRateList()
  }, [])

  return (
    <>
      <Box sx={{ justifyContent: 'center' }}>
        <Container sx={{ py: 3 }} maxWidth="lg">
          <Typography variant="h4" align="left">
            Exchange Rate List
          </Typography>
          <Grid
            container
            sx={{
              height: 'calc(100vh - 140px)',
            }}
          >
            {isLoading ? (
              <CircularProgress />
            ) : (
              <Table
                data={exchangeRateList}
                columns={columns}
                getRowId={(row) => row.shortName}
                onRowClick={(rowData) => onRowClick(rowData.row)}
              />
            )}
          </Grid>
        </Container>
        <Modal open={openModal}>
          <DialogContent>
            <ExchangeRateDetailsModal
              openModal={openModal}
              setOpenModal={setOpenModal}
              selectedExchangeRate={selectedExchangeRate}
            />
          </DialogContent>
        </Modal>
      </Box>
    </>
  )
}
