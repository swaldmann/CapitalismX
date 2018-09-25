import SceneManager from './SceneManager';
export default containerElement => {
    const canvas = document.createElement("canvas")
    const sceneManager = new SceneManager(canvas)

    render()

    function render(time) {
        requestAnimationFrame(render)
        sceneManager.render()
    }
}
