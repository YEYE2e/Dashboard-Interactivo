import { Grid, ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import HeaderUI from './components/HeaderUi';
import AlertUI from './components/AlertUI';
import SelectorUI from './components/SelectorUI';
import IndicatorUI from './components/IndicatorUI';

// Definimos un tema oscuro personalizado y elegante
const darkTheme = createTheme({
   palette: {
      mode: 'dark',
      background: {
         default: '#121214', // Fondo general oscuro
         paper: '#1e1e24',   // Fondo de tarjetas e inputs ligeramente más claro
      },
      text: {
         primary: '#ffffff',
         secondary: '#a0a0b0',
      },
   },
});

function App() {
   return (
      <ThemeProvider theme={darkTheme}>
         <CssBaseline />
         <Grid container spacing={5} sx={{ justifyContent: "center", alignItems: "center", padding: '24px' }}>

            {/* Encabezado */}
            <Grid size={{ xs: 12, md: 12 }}>
               <HeaderUI />
            </Grid>

            {/* Alertas */}
            <Grid size={{ xs: 12, md: 12 }} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
               <AlertUI config={{ type: 'success', description: 'No se preveen lluvias' }} />
            </Grid>

            {/* Selector */}
            <Grid size={{ xs: 12, md: 3 }}>
               <SelectorUI/>
            </Grid>

            {/* Indicadores */}
            <Grid container size={{ xs: 12, md: 9 }} spacing={2}>
               <Grid size={{ xs: 12, md: 3 }}>
                  <IndicatorUI title="Temperatura (2m)" description="XX°C" />
               </Grid>
               <Grid size={{ xs: 12, md: 3 }}>
                  <IndicatorUI title="Temperatura aparente" description="XX°C" />
               </Grid>
               <Grid size={{ xs: 12, md: 3 }}>
                  <IndicatorUI title="Velocidad del viento" description="XX km/h" />
               </Grid>
               <Grid size={{ xs: 12, md: 3 }}>
                  <IndicatorUI title="Humedad relativa" description="XX%" />
               </Grid>
            </Grid>

            {/* Gráfico */}
            <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: "none", md: "block" } }}>
               Elemento: Gráfico
            </Grid>

            {/* Tabla */}
            <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: "none", md: "block" } }}>
               Elemento: Tabla
            </Grid>

            {/* Información adicional */}
            <Grid size={{ xs: 12, md: 12 }}>Elemento: Información adicional</Grid>

         </Grid>
      </ThemeProvider>
   );
}

export default App;