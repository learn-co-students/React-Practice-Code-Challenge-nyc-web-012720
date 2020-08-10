import React from 'react'
import Sushi from './Sushi'

class SushiList extends React.Component {

    state = {
        sushi: []
    }

    componentDidMount() {
        this.handleFetch()
    }   

    handleFetch = () => {
        fetch(this.props.api)
        .then(res => res.json())
        .then(sushiData => this.handleSushiData(sushiData))
    }

    handleSushiData = sushiData => {
        const sushi = sushiData
        this.setState({sushi: sushi})
    }

    renderSushi = () => {
        const sushis = this.state.sushi
        return sushis.slice(0, 4).map((sushi, i) => {
            // console.log(sushi)
            return <Sushi key={i} props={sushi}/>
        })
    }

    render() {
        // console.log("SushiList - render: ", this.state);
        return (
            <div>
                {this.renderSushi()}
            </div>
        )
    }
}

export default SushiList