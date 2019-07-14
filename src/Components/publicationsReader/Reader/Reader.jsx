import React, { Component } from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import Publication from '../Publication/Publication';
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';

import styles from './Reader.module.css';

import publications from '../../../Sources/publications.json';

export default class Reader extends Component {
  state = {
    currentPublicationNumber: 0,
    publicationsLength: publications.length,
  };

  componentDidMount() {
    const { location, history } = this.props;
    const hrefPage = queryString.parse(location.search);
    const { publicationsLength } = this.state;

    let transformedPage = 0;
    if (hrefPage.page) {
      switch (true) {
        case !Number(hrefPage.page):
          transformedPage = 0;
          break;
        case Number(hrefPage.page) - 1 > publicationsLength:
          transformedPage = publicationsLength - 1;
          break;
        case Number(hrefPage.page) - 1 <= 1:
          transformedPage = 0;
          break;
        default:
          transformedPage = Number(hrefPage.page) - 1;
      }
    }

    this.setState(
      {
        currentPublicationNumber: transformedPage,
      },

      () => {
        const { currentPublicationNumber } = this.state;
        history.replace({
          search: `page=${currentPublicationNumber + 1}`,
        });
      },
    );
  }

  handleIncrement = () => {
    this.setState(
      prevState => {
        const isOldestNumber =
          prevState.currentPublicationNumber + 1 >=
          prevState.publicationsLength;
        return {
          currentPublicationNumber: isOldestNumber
            ? prevState.currentPublicationNumber
            : prevState.currentPublicationNumber + 1,
        };
      },
      () => {
        this.props.history.push({
          search: `page=${this.state.currentPublicationNumber + 1}`,
        });
      },
    );
  };

  handleDecrement = () => {
    this.setState(
      prevState => {
        const lessThenSmallestNumber =
          prevState.currentPublicationNumber - 1 <= 0;

        return {
          currentPublicationNumber: lessThenSmallestNumber
            ? 0
            : prevState.currentPublicationNumber - 1,
        };
      },
      () => {
        this.props.history.push({
          search: `page=${this.state.currentPublicationNumber + 1}`,
        });
      },
    );
  };

  render() {
    const { currentPublicationNumber, publicationsLength } = this.state;

    const publicationHeader = publications[currentPublicationNumber].title;
    const publicationText = publications[currentPublicationNumber].text;

    return (
      publications.length > 0 && (
        <div className={styles.reader}>
          <Publication header={publicationHeader} text={publicationText} />
          <Controls
            onNextClick={this.handleIncrement}
            onPreviousClick={this.handleDecrement}
            currentPublicationNumber={currentPublicationNumber}
            publicationsLength={publicationsLength}
          />
          <Counter
            currentPublicationNumber={currentPublicationNumber}
            publicationsLength={publicationsLength}
          />
        </div>
      )
    );
  }
}

Reader.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    replace: PropTypes.func.isRequired,
  }).isRequired,
};
