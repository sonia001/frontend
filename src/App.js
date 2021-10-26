import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from "@material-ui/core/styles";
import AppRouter from './routers/AppRouter';
import theme from './styles/theme';

export default function App() {
  return (
      <ThemeProvider theme = {theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
          <AppRouter />
      </ThemeProvider>
  );
}
