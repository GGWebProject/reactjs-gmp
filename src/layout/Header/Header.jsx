import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Logotype from '../../components/Logotype/Logotype';
import Search from '../../components/Search/Search';
import './Header.scss';
import Button from '../../components/Button/Button';
import { ModalContext, MovieDetailsContext } from '../../core/Contexts';
import { MODAL_TYPES } from '../../common/entities/modal-entities';
import { addMovieButton } from '../../common/entities/button-options';
import MovieDetails from '../../components/MovieDetails/MovieDetails';

const baseClassName = 'header';

const Header = ({ className }) => {
  const { setModalState } = useContext(ModalContext);
  const { movie, setMovieDetails } = useContext(MovieDetailsContext);
  const classNames = clsx(baseClassName, {
    [className]: className,
    [`${baseClassName}--movie-details`]: movie,
  });

  const handleAddMovieButtonClick = () => {
    setModalState({
      isModalOpen: true,
      type: MODAL_TYPES.add,
    });
  };

  return (
    <header className={classNames}>
      <div className={`wrapper ${baseClassName}__wrapper`}>
        <Logotype className={`${baseClassName}__logotype`} />
        {
          movie
            ? (
              <>
                <Button
                  buttonOptions={addMovieButton}
                  className={`${baseClassName}__add-movie-button`}
                  onClick={() => setMovieDetails({ movie: null })}
                >
                  Search
                </Button>
                <MovieDetails movieData={movie} />
              </>
            )
            : (
              <>
                <Button
                  buttonOptions={addMovieButton}
                  className={`${baseClassName}__add-movie-button`}
                  onClick={handleAddMovieButtonClick}
                >
                  + add movie
                </Button>
                <h1 className={`${baseClassName}__title`}>Find your movie</h1>
                <Search className={`${baseClassName}__search`} />
              </>
            )
        }
      </div>
    </header>
  );
};

Header.propTypes = { className: PropTypes.string };

Header.defaultProps = { className: '' };

export default Header;
