import { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

import { ExchangeRateListPage } from './Components/Pages'

const theme = createTheme()

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/exchange-rate-list" element={<ExchangeRateListPage />} />
        <Route
          path="*"
          element={<Navigate to="/exchange-rate-list" replace />}
        />
      </Routes>
    </ThemeProvider>
  )
}
