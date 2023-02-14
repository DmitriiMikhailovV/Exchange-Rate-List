import { GridColDef } from '@mui/x-data-grid'

export const columns: Array<GridColDef> = [
  {
    field: 'shortName',
    headerName: 'Short Name',
    flex: 1,
  },
  {
    field: 'validFrom',
    headerName: 'Valid from',
    flex: 1,
  },
  {
    field: 'name',
    headerName: 'Name',
    flex: 1,
  },
  {
    field: 'country',
    headerName: 'Country',
    flex: 1,
  },
]
