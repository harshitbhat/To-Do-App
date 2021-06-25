import { useState } from 'react';

function useToggleState(initVal = false) {
  // call use state, reserve piece of state
  const [state, setState] = useState(initVal);
  const toggle = () => {
    setState(!state);
  };
  return [state, toggle];
}
export default useToggleState;
