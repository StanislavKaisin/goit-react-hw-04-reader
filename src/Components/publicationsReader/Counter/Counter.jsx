import React from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.css';

const Counter = ({ currentPublicationNumber, publicationsLength }) => {
  return (
    <p className={styles.counter}>
      {currentPublicationNumber + 1}/{publicationsLength}
    </p>
  );
};

Counter.propTypes = {
  currentPublicationNumber: PropTypes.number,
  publicationsLength: PropTypes.number,
};

Counter.defaultProps = {
  currentPublicationNumber: 0,
  publicationsLength: 1,
};

export default Counter;
