export type TExchangeRateItem = {
  shortName: string
  validFrom: string
  name: string
  country: string
  move: number
  amount: number
  valBuy: number
  valSell: number
  valMid: number
  currBuy: number
  currSell: number
  currMid: number
  version: number
  cnbMid: number
  ecbMid: number
}

export type TExchangeRateList = Array<TExchangeRateItem>
