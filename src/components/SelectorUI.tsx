import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

interface SelectorUIProps {
   selectedCity: string;
   onCityChange: (city: string) => void;
}

export default function SelectorUI({ selectedCity, onCityChange }: SelectorUIProps) {

   const handleChange = (event: SelectChangeEvent<string>) => {
      onCityChange(event.target.value);
   };

   return (
      <>
         <FormControl fullWidth>
            <InputLabel id="city-select-label">Ciudad</InputLabel>
            <Select
               labelId="city-select-label"
               id="city-simple-select"
               value={selectedCity}
               label="Ciudad"
               onChange={handleChange}
            >
               <MenuItem disabled value=""><em>Seleccione una ciudad</em></MenuItem>
               <MenuItem value={"guayaquil"}>Guayaquil</MenuItem>
               <MenuItem value={"quito"}>Quito</MenuItem>
               <MenuItem value={"manta"}>Manta</MenuItem>
               <MenuItem value={"cuenca"}>Cuenca</MenuItem>
            </Select>
         </FormControl>
         {selectedCity && (
            <p style={{ marginTop: '10px' }}>
               Información del clima en <span style={{ fontWeight: 'bold', textTransform: 'capitalize' }}>{selectedCity}</span>
            </p>
         )}
      </>
   );
}
