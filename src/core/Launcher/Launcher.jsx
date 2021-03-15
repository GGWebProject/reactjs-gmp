import React, { useState } from "react";
import PropTypes from "prop-types";
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import { ModalContext, MovieDetailsContext } from '../Contexts';

const Launcher = ({ children }) => {
  const [modalState, setModalState] = useState({ isModalOpen: false, type: null });
  const modalValue = {
    isOpen: modalState.isModalOpen,
    type: modalState.type,
    setModalState,
  };

  const [movieDetails, setMovieDetails] = useState({ movie: null });
  const movieDetailsValue = {
    movie: movieDetails.movie,
    setMovieDetails,
  };

  return (
    <ErrorBoundary>
      <ModalContext.Provider value={modalValue}>
        <MovieDetailsContext.Provider value={movieDetailsValue}>
          {children}
        </MovieDetailsContext.Provider>
      </ModalContext.Provider>
    </ErrorBoundary>
  );
};

Launcher.propTypes = { children: PropTypes.element };
Launcher.defaultProps = { children: null };

export default Launcher;
