import Alert from '@mui/material/Alert';

interface AlertConfig {
  type: 'success' | 'error' | 'warning' | 'info';
  description: string;
}
export default function AlertUI({ config }: { config: AlertConfig }) {
  return (
    <Alert variant="outlined" severity={config.type}>
      {config.description}
    </Alert>
  );
}