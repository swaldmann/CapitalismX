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
                    <div className="graphicsSettings">
                        <p><b>Graphics</b></p>
                        <button className={this.getGraphicsQuality() !== "low" ? "bordered" : null} onClick={(event) => { this.useLowGraphics(); window.location.reload();}}>Low</button>
                        <button className={this.getGraphicsQuality() !== "medium" ? "bordered" : null} onClick={(event) => { this.useMediumGraphics(); window.location.reload();}}>Medium</button>
                        <button className={this.getGraphicsQuality() !== "high" ? "bordered" : null} onClick={(event) => { this.useHighGraphics(); window.location.reload();}}>Best</button>
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
