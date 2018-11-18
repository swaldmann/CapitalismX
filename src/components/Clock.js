import React from "react"

class Clock extends React.Component {
    formattedDate() {
        const options = { year: 'numeric', month: 'short', day: 'numeric' }
        const startDate = new Date(1990,0,1)
        startDate.setDate(startDate.getDate() + this.props.elapsedDays)
        return startDate.toLocaleDateString("en-us", options)
    }

    render() {
        return (
            <div className="time">
                { this.props.isPlaying && <button id="pauseButton" onClick={this.props.pause}><i className="fa fa-fw fa-pause"></i></button> }
                { !this.props.isPlaying && <button id="playButton" onClick={this.props.play}><i className="fa fa-fw fa-play"></i></button> }
                <label id="timeLabel" className="pull-right-inline">{this.formattedDate()}</label>
            </div>
        )
    }
}

export default Clock
