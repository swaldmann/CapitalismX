import React from "react"

class Menu extends React.Component {

    newGame = () => {
        this.props.actions.clearState()
        this.props.actions.hideMenu()
    }

    loadGame = () => {
        this.props.actions.hideMenu()
    }

    useLowGraphics = () => {
        localStorage.setItem("graphicsQuality", "low")
        window.location.reload()
    }

    useMediumGraphics = () => {
        localStorage.setItem("graphicsQuality", "medium")
        window.location.reload()
    }

    useHighGraphics = () => {
        localStorage.setItem("graphicsQuality", "high")
        window.location.reload()
    }

    getGraphicsQuality() {
        return localStorage.getItem("graphicsQuality") || "low"
    }

    render() {
        return (
            <div className="menu flexbox">
                <div className="two-thirds">
                    <h1>Capitalism X</h1>
                    <button className="large" onClick={this.newGame}>New Game</button>
                    <button className="large" onClick={this.loadGame}>Continue Game</button>

                    <h3><img className="icon" src={require("../static/icons/icons8-monitor.png")} alt="" />Graphics</h3>
                    <div className="paragraph">
                        <button className={this.getGraphicsQuality() !== "low" ? "bordered" : null} onClick={this.useLowGraphics}>Low</button>
                        <button className={this.getGraphicsQuality() !== "medium" ? "bordered" : null} onClick={this.useMediumGraphics}>Medium</button>
                        <button className={this.getGraphicsQuality() !== "high" ? "bordered" : null} onClick={this.useHighGraphics}>Best</button>
                    </div>
                    <h3><img className="icon" src={require("../static/icons/icons8-hearts.png")} alt="" />Acknowledgements</h3>
                    <div className="paragraph">
                        <div>Some icons by <a href="https://icons8.com/" className="colorlessLink">Icons8</a>.</div>
                        <div>Some icons by <a href="https://fontawesome.com" className="colorlessLink">Font Awesome</a>.</div>
                    </div>
                </div>
                <div className="third">
                    <ul>
                        <li>Philipp Epstein</li>
                        <li>Daniel Götz</li>
                        <li>Maike Jansen</li>
                        <li>Nike Klaubert</li>
                        <li>Salih Özdemir</li>
                        <li>Livja Papuciu</li>
                        <li>Janine Salomon</li>
                        <li>Steffen Waldmann</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Menu
