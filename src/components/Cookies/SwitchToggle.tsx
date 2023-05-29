import Switch from '@mui/material/Switch';
import { Box } from '@mui/material';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const SwitchToggle = () => {
  return (
    <Box>
      <Switch {...label} defaultChecked />
    </Box>
  )
}

export default SwitchToggle
