import React from 'react';

import { 
  ErrorImageOverlay, 
  ErrorImageContainer, 
  ErrorImageText 
} from './error-boundary.styles';


class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false
    }
  }

  static getDerivedStateFromError(error) {
    // process the error
    return { hasErrored: true }
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer />
          <ErrorImageText>Sorry. This Page is Broken!</ErrorImageText>
        </ErrorImageOverlay>
      )
    }

    return this.props.children;
  }
}


export default ErrorBoundary;