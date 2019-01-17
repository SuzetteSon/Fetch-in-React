import React, { Component } from 'react';
import Card from './Card.jsx';
import LoadingSpinner from './LoadingSpinner.jsx';


class Board extends Component {
    constructor(props){
        super(props);
        this.state = {
            hits: [],
            loading: true,
            query: ''
        }
    }
 
    
    componentDidMount() {
        const url = `https://hn.algolia.com/api/v1/search?query=${query}`;
        let query = this.state.query;
        fetch(url)
        .then(res => res.json())
        //.then(x => console.log(x.hits[0]))
        .then(data => this.setState({ hits: data.hits, loading: false }))
    }

    updateQuery = (query) => {
        this.setState({
            query: query
        })
    }

    render() {
        return (
            <div className="board">
            <input 
                value={this.state.query}
                placeholder='What would you like to search for?'
                // onClick={(event) => this.updateQuery(event.target.value)}
                type='text'
                >
            </input>
            
                {this.state.loading ? <LoadingSpinner /> : <Card hits={this.state.hits}/>}
                
            </div>
        )
    }
}

export default Board;