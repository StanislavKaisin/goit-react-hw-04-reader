import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({
  onNextClick,
  onPreviousClick,
  currentPublicationNumber,
  publicationsLength,
}) => {
  return (
    <section className={styles.controls}>
      <button
        className={
          currentPublicationNumber <= 0 ? styles.buttonDisabled : styles.button
        }
        type="button"
        onClick={onPreviousClick}
      >
        Назад
      </button>
      <button
        className={
          currentPublicationNumber >= publicationsLength - 1
            ? styles.buttonDisabled
            : styles.button
        }
        type="button"
        onClick={onNextClick}
      >
        Вперед
      </button>
    </section>
  );
};

Controls.propTypes = {
  onPreviousClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
  currentPublicationNumber: PropTypes.number.isRequired,
  publicationsLength: PropTypes.number.isRequired,
};
export default Controls;
