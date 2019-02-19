import React from "react"

class Menu extends React.Component {

    useLowGraphics() {
        sessionStorage.setItem("graphicsQuality", "low")
    }

    useMediumGraphics() {
        sessionStorage.setItem("graphicsQuality", "medium")
    }

    useHighGraphics() {
        sessionStorage.setItem("graphicsQuality", "high")
    }

    getGraphicsQuality() {
        return sessionStorage.getItem("graphicsQuality") || "low"
    }

    render() {
        return (
            <div className="menu flexbox">
                <div className="two-thirds">
                    <h1>Capitalism X</h1>
                    <button className="large" onClick={this.props.newGame}>New Game</button>
                    <button className="large" onClick={this.props.loadGame}>Load Game</button>

                    <h3><img className="icon" src={require("../static/icons/icons8-monitor.png")} alt="" />Graphics</h3>
                    <p>
                        <button className={this.getGraphicsQuality() !== "low" ? "bordered" : null} onClick={(event) => { this.useLowGraphics(); window.location.reload();}}>Low</button>
                        <button className={this.getGraphicsQuality() !== "medium" ? "bordered" : null} onClick={(event) => { this.useMediumGraphics(); window.location.reload();}}>Medium</button>
                        <button className={this.getGraphicsQuality() !== "high" ? "bordered" : null} onClick={(event) => { this.useHighGraphics(); window.location.reload();}}>Best</button>
                    </p>
                    <h3><img className="icon" src={require("../static/icons/icons8-hearts.png")} alt="" />Acknowledgements</h3>
                    <p>
                        <div>Some icons by <a href="https://icons8.com/" className="colorlessLink">Icons8</a>.</div>
                        <div>Some icons by <a href="https://fontawesome.com" className="colorlessLink">Font Awesome</a>.</div>
                    </p>
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
