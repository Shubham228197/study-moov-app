import React from 'react'
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const SwitchToggle = () => {
  return (
    <div>
      <Switch {...label} defaultChecked />
    </div>
  )
}

export default SwitchToggle
