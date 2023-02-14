import { SetStateAction } from 'react'
import { TExchangeRateItem } from '../types'

export type TExchangeRateDetailsModal = {
  openModal: boolean
  setOpenModal: (value: SetStateAction<boolean>) => void
  selectedExchangeRate: TExchangeRateItem | null
}
