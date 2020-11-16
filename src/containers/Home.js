import React, { Component } from 'react'

export class Home extends Component {
    state = {
        userName: 'Prakash'
    }
    render() {
        let username = this.state.userName;

        return (
            <div>
                <h3>Hello {username} !</h3>
                Read excel data:
                <a href="https://www.youtube.com/watch?v=h33eakwu7oo&t=332s">YT Link</a>
                Map into an array.
                Pass is to cards.
            </div>
        )
    }
}

export default Home
