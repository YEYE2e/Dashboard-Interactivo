import { Grid, ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { useState } from 'react';
import HeaderUI from './components/HeaderUi';
import AlertUI from './components/AlertUI';
import SelectorUI from './components/SelectorUI';
import IndicatorUI from './components/IndicatorUI';
import useFetchData from './hooks/useFetchData';

const darkTheme = createTheme({
   palette: {
      mode: 'dark',
      background: {
         default: '#121214', 
         paper: '#1e1e24',   
      },
      text: {
         primary: '#ffffff',
         secondary: '#a0a0b0',
      },
   },
});

const CITY_COORDINATES: Record<string, { lat: number; lon: number }> = {
   guayaquil: { lat: -2.19616, lon: -79.88621 },
   quito: { lat: -0.180653, lon: -78.467838 },
   manta: { lat: -0.96212, lon: -80.71271 },
   cuenca: { lat: -2.90013, lon: -79.00458 },
};

function App() {
   const [selectedCity, setSelectedCity] = useState('guayaquil');
   const coords = CITY_COORDINATES[selectedCity];
   const dataFetcherOutput = useFetchData(coords.lat, coords.lon);

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

            {/* Selector de ciudad */}
            <Grid size={{ xs: 12, md: 3 }}>
               <SelectorUI selectedCity={selectedCity} onCityChange={setSelectedCity} />
            </Grid>

            {/* Indicadores */}
            <Grid container size={{ xs: 12, md: 9 }} spacing={2}>
               <Grid size={{ xs: 12, md: 3 }}>
                  {dataFetcherOutput && (
                     <IndicatorUI 
                        title='Temperatura (2m)' 
                        description={ `${dataFetcherOutput.current.temperature_2m} ${dataFetcherOutput.current_units.temperature_2m}` } 
                     />
                  )}
               </Grid>
               <Grid size={{ xs: 12, md: 3 }}>
                  {dataFetcherOutput && (
                     <IndicatorUI 
                        title='Temperatura aparente' 
                        description={ `${dataFetcherOutput.current.apparent_temperature} ${dataFetcherOutput.current_units.apparent_temperature}` } 
                     />
                  )}
               </Grid>
               <Grid size={{ xs: 12, md: 3 }}>
                  {dataFetcherOutput && (
                     <IndicatorUI 
                        title='Velocidad del viento' 
                        description={ `${dataFetcherOutput.current.wind_speed_10m} ${dataFetcherOutput.current_units.wind_speed_10m}` } 
                     />
                  )}
               </Grid>
               <Grid size={{ xs: 12, md: 3 }}>
                  {dataFetcherOutput && (
                     <IndicatorUI 
                        title='Humedad relativa' 
                        description={ `${dataFetcherOutput.current.relative_humidity_2m} ${dataFetcherOutput.current_units.relative_humidity_2m}` } 
                     />
                  )}
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