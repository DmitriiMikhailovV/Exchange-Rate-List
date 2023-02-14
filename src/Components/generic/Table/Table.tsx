import { FC } from 'react'
import { DataGrid } from '@mui/x-data-grid'

import type { TTable } from './types'

export const Table: FC<TTable> = ({ data, columns, getRowId, onRowClick }) => {
  return (
    <DataGrid
      sx={{
        '&.MuiDataGrid-root .MuiDataGrid-cell:focus-within': {
          outline: 'none !important',
        },
        cursor: 'pointer',
      }}
      rows={data}
      columns={columns}
      getRowId={getRowId}
      onRowClick={onRowClick}
      disableColumnMenu
      hideFooter
    />
  )
}
