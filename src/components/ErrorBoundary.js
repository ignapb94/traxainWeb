import React, { Component } from 'react'



class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    //logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Por favor, revisa que estás conectado a Metamask y que lo datos introducidos son correctos</h1>;
      console.log("eh aquí tienens un error")
    }
    return this.props.children;
  }
}

export default ErrorBoundary;