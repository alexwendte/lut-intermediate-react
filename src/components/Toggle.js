import { Component } from 'react';

export default class Toggle extends Component {
  state = {
    show: false
  };

  flip = () => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    const { children } = this.props;
    // the return value of children is what is in the props.
    return children({
      // this.state.show and this.flip are being passed in as properties in an object
      on: this.state.show,
      toggle: this.flip
    });

    /* // the prop render is an arrow function that is passing the argument 'hi'
    return <div>{render('hi')}</div>; */
  }
}
