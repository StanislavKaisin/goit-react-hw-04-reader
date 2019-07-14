import React from 'react';
import PropTypes from 'prop-types';
import styles from './Publication.module.css';

const Publication = ({ header, text }) => {
  return (
    <article className={styles.publication}>
      <h2 className={styles.publicationHeader}>
        {header === '' ? 'Without header' : header}
      </h2>
      <p className={styles.publicationText}>
        {text === '' ? 'Nothing to read' : text}
      </p>
    </article>
  );
};

Publication.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
};
Publication.defaultProps = {
  header: '',
  text: '',
};
export default Publication;
