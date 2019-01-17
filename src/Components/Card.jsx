import React, { Component } from 'react';

class Card
 extends Component {
    render() {
        return (
            <div className="wrapper">
                {this.props.hits.map(article => (
                        <p className="box effect7" key={Math.random()}>
                        {article.title}
                        <br />
                        {article.author}
                        <br />
                        {article.created_at}
                        <br />
                        </p>
                    ))}
            </div>
        )
    }
}

export default Card
;