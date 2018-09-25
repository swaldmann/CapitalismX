import React from "react"

class Clock extends React.Component {
    formattedDate() {
        const options = { year: 'numeric', month: 'short', day: 'numeric' }
        const startDate = new Date(1990,0,1)
        startDate.setDate(startDate.getDate() + this.props.elapsedDays)
        return startDate.toLocaleDateString("en-us", options)
    }

    render() {
        return <label id="timeLabel" className="pull-right">{ this.formattedDate() }</label>
    }
}

export default Clock
