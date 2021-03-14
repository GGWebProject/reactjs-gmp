import React from 'react';
import './Main.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Filter from '../../components/Filter/Filter';
import MoviesList from '../../components/MoviesList/MoviesList';
import { MOCK_AVAILABLE_GENRES_FILTERS, MOCK_AVAILABLE_SORT_FILTERS } from '../../__MOCK__/filters';
import { MOCK_MOVIES } from '../../__MOCK__/movies';

const baseClassName = 'main';

const Main = ({ className }) => {
  const classNames = clsx(baseClassName, { [className]: className });

  return (
    <main className={classNames}>
      <div className={`wrapper ${baseClassName}__wrapper`}>
        <Filter
          className={`${baseClassName}__filter`}
          genres={MOCK_AVAILABLE_GENRES_FILTERS}
          sortOptions={MOCK_AVAILABLE_SORT_FILTERS}
        />
        <MoviesList
          className={`${baseClassName}__movies`}
          movies={MOCK_MOVIES}
        />
      </div>
    </main>
  );
};

Main.propTypes = { className: PropTypes.string };

Main.defaultProps = { className: '' };

export default Main;
