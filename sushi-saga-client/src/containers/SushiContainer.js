import React from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class  SushiContainer extends React.Component {

  state= {
    startIndex: 0
  }

   renderSushi = () => {

     let displayIndex = this.props.sushi.slice(this.state.startIndex,this.state.startIndex + 4)
    //  console.log(displayIndex)
     return displayIndex.map(sushi=> <Sushi key={sushi.id} {...sushi} handleClick={this.props.handleClick} eatenSushi={this.props.eatenSushi} /> )
   }

  onClickRender = () => {
    // let nextIndex= this.state.startIndex + 4
    // if(this.state.startIndex === this.props.sushi.length){
    //   nextIndex = 0
    // }
    this.setState({
      startIndex: this.state.startIndex + 4
   });
  }

  render(){
    console.log(this.state.startIndex === this.props.sushi.length)
    return( <div className="belt">
        {this.renderSushi()}
        <MoreButton onClickRender={this.onClickRender}/>
      </div>)
  }
}

   
  


export default SushiContainer