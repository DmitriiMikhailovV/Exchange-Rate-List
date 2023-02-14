import { GridColDef, GridEventListener, GridRowModel } from '@mui/x-data-grid'

export type TTable = {
  data: Array<GridRowModel>
  columns: Array<GridColDef>
  getRowId: (row: GridRowModel) => string
  onRowClick: GridEventListener<'rowClick'>
}
