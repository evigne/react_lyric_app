import React, { Component } from 'react'
import axios from 'axios'
import Spinner for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
class Lyrics extends Component {

    state = {
        track: {},
        lyric: {}
    };

    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
        .then(res => {
            this.setState({lyrics: res.data.message.body.lyrics})

            return axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
            .then(res => {
                this.setState({track: res.data.message.body.track})
            })

        })
        .catch(err => console.log(err))
    }

    render() {
        const {track, lyrics} =  this.state;
        return (
            <div>
                <h1>Lyrics</h1>
            </div>
        )
    }
}

export default Lyrics;