import { useState } from 'react';

const useModal = () => {
  const [isOpen, setisOpen] = useState(false);
  

  function toggle() {
    setisOpen(!isOpen);
  }

  return {
    isOpen,
    toggle,
  }
};

export default useModal;