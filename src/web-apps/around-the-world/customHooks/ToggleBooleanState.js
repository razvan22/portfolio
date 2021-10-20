import  { useState } from 'react'

const ToggleBooleanState  = (defaultValue = false) => {
  const [state, setState] = useState(defaultValue);

  const toggle = () => {
    setState(!state);
  }
  return [state, toggle];
}

export default ToggleBooleanState;