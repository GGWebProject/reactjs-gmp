import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Изменение интерфейса
    // Обновите состояние так, чтобы следующий рендер показал запасной интерфейс.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Только для логирования
    console.log({
      error,
      info,
    });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <h1>Что-то пошло не так.</h1>;
    }

    return children;
  }
}

ErrorBoundary.propTypes = { children: PropTypes.element };
ErrorBoundary.defaultProps = { children: null };

export default ErrorBoundary;
