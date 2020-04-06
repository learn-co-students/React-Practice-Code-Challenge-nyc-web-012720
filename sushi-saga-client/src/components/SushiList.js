import React from 'react'

class SushiList extends React.Component {

    // state = {
    //     sushi: []
    // }

    componentDidMount() {
        this.handleFetch(this.props.api)
    }   


    handleFetch = api => {
        const apiUrl = `${this.props.api.API}`
        console.log('inside handleFetch: api =>', apiUrl)
        fetch(apiUrl)
        .then(res => res.json())
        .then(sushiData => console.log(sushiData))
    }

    render() {
        // console.log("SushiList - render: ", this.props.api);
        
        return (
            <div>
  
            </div>
        )
    }
}

export default SushiList