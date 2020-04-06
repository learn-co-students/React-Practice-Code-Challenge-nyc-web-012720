import React from 'react';

class SushiWallet extends React.Component {
    state = {
        moneyToAdd: 0
    }

    getMonies = (event) => {
        event.preventDefault();
        this.props.getMonies(this.state.moneyToAdd)
    }

    handleChumpChange = (event) => {
        this.setState({
            moneyToAdd: event.target.value
        })
    }

    render () {
        return (
            <form onSubmit={this.getMonies}>
                <input type="number" name="moneyToAdd" onChange={this.handleChumpChange} value={this.state.moneyToAdd}/>
            </form>
        )
    }
}

export default SushiWallet;