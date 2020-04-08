import React, { Fragment } from 'react';
import MoreButton from '../components/MoreButton';
import Sushi from '../components/Sushi';
class SushiContainer extends React.Component {
  state = {
    startIndex: 0,
  };
  renderSushi = () => {
    const { startIndex } = this.state;
    let newSushi = this.props.sushis.slice(startIndex, startIndex + 4);
    return newSushi.map((sushi) => (
      <Sushi
        key={sushi.id}
        sushi={sushi}
        handleImage={this.props.handleImage}
        eatenSushi={this.props.eatenSushi}
      />
    ));
  };
  handleClick = () => {
    let startIndex = this.state.startIndex + 4;
    if (startIndex >= this.props.sushis.length) {
      startIndex = 0;
    }
    this.setState({ startIndex });
  };

  render() {
    return (
      <Fragment>
        <div className='belt'>
          {this.renderSushi()}
          <MoreButton handleClick={this.handleClick} />
        </div>
      </Fragment>
    );
  }
}

export default SushiContainer;
