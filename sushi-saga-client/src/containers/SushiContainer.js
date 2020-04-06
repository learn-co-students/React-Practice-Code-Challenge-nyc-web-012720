import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  // componentDidMount = () => {
  //   fetch(` http://localhost:3000/sushis?_limit=4`)
  //   .then(resp => resp.json())
  //   .then(sushi => this.renderSushi(sushi))
  // }

  renderSushi(sushi) {
    return sushi.map( s => {
      return <Sushi 
                key={s.id}
                sushi={s}
              />
    })
  }
    

  render() {
    return (
      <Fragment>
        <div className="belt">
          {
            this.renderSushi(this.props.sushi)
          }
          <MoreButton />
        </div>
      </Fragment>
    )
  }
}


export default SushiContainer