import { useContext } from 'react';
import MoovData from '../Context/MoovData';

function useMoovContext() {
  return useContext(MoovData);
}

export default useMoovContext;
    