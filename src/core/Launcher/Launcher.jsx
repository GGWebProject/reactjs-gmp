import React, { useState } from "react";
import PropTypes from "prop-types";
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import { ModalContext } from '../Contexts';

const Launcher = ({ children }) => {
  const [modalState, setModalState] = useState({ isModalOpen: false, type: null });
  const modalValue = {
    isOpen: modalState.isModalOpen,
    type: modalState.type,
    setModalState,
  };

  return (
    <ErrorBoundary>
      <ModalContext.Provider value={modalValue}>
        {children}
      </ModalContext.Provider>
    </ErrorBoundary>
  );
};

Launcher.propTypes = { children: PropTypes.element };
Launcher.defaultProps = { children: null };

export default Launcher;
