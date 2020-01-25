import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';

import AuthLayout from '~/pages/_layouts/auth';
import DeafultLayout from '~/pages/_layouts/default';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = false;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layouts = signed ? DeafultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layouts>
          <Component {...props} />
        </Layouts>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
