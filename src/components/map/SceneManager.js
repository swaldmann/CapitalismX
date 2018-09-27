import * as THREE from 'three-full'
import * as vox from 'vox.js'
window.$ = window.THREE = require("three-full")

export default canvas => {
    var sunLight, hemiLight
    var cabMesh, cabLightLeft, cabLightRight
    var water

    const graphicsQuality = sessionStorage.getItem("graphicsQuality")
    const enableAntialiasing = graphicsQuality === "high"
    const renderer = new THREE.WebGLRenderer({ antialias: enableAntialiasing })
    renderer.setSize(window.innerWidth, window.innerHeight)
    const pixelRatio = graphicsQuality === "high" ? window.devicePixelRatio : graphicsQuality === "medium" ? 1 : 0.5
    renderer.setPixelRatio(pixelRatio)
    renderer.gammaInput = renderer.gammaOutput = true
    renderer.shadowMap.enabled = graphicsQuality === "high"
    renderer.shadowMap.type = THREE.PCFSoftShadowMap

    const aspect = window.innerWidth/window.innerHeight
    const camera = new THREE.PerspectiveCamera(45, aspect, 1, 2000)
    const scene = new THREE.Scene()

    const sky = new THREE.Sky()
    sky.scale.setScalar(450000)
    scene.add(sky)

    const starsGeo = new THREE.SphereGeometry(1000, 25, 25)
    const loader  = new THREE.TextureLoader()
    const starTexture = loader.load(require("../../static/map/lib/starfield.png"))
    const starMaterial = new THREE.MeshLambertMaterial({
        map: starTexture,
    });
    const skyDome = new THREE.Mesh(starsGeo, starMaterial)
    skyDome.material.side = THREE.BackSide
    skyDome.material.transparent = true
    scene.add(skyDome)

    const sun = new THREE.Mesh(
        new THREE.SphereBufferGeometry(20000, 16, 8),
        new THREE.MeshBasicMaterial({ color: 0xffffff })
    )
    sun.position.y = -700000
    sun.visible = false
    scene.add(sun)

    const controls = new THREE.MapControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.25
    controls.minDistance = 100
    controls.maxDistance = 500
    controls.maxPolarAngle = Math.PI / 2 - 0.01
    camera.position.set(290, 220, 142)

    init()
    animate()

    function init() {
        const parser = new vox.Parser()
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                parser.parse(require("../../static/map/city-blocks/exports/city-block-" + (2 * i + j + 1) + "-0.vox")).then(function(voxelData) {
                    const builder = new vox.MeshBuilder(voxelData)
                    const mesh = builder.createMesh()
                    mesh.castShadow = mesh.receiveShadow = true
                    mesh.position.x = i * 100 * 2 - 100
                    mesh.position.z = j * 100
                    mesh.rotation.y = - Math.PI/2
                    scene.add(mesh)
                })
                parser.parse(require("../../static/map/city-blocks/exports/city-block-" + (2 * i + j + 1) + "-1.vox")).then(function(voxelData) {
                    const builder = new vox.MeshBuilder(voxelData)
                    const mesh = builder.createMesh()
                    mesh.castShadow = mesh.receiveShadow = true
                    mesh.position.x = i * 100 * 2
                    mesh.position.z = j * 100
                    mesh.rotation.y = Math.PI
                    scene.add(mesh)
                })
            }
        }

        /*parser.parse(require("../../static/map/cab.vox")).then(function(voxelData) {
            var builder = new vox.MeshBuilder(voxelData)
            const mesh = builder.createMesh()
            mesh.castShadow = true
            mesh.receiveShadow = true
            mesh.position.x = 126
            mesh.position.z = -10
            mesh.position.y = 1
            mesh.rotation.y = Math.PI/2
            mesh.scale.multiplyScalar(0.3)
            cabMesh = mesh
            scene.add(mesh)

            cabLightLeft = new THREE.SpotLight(0xffffff)
            cabLightRight = new THREE.SpotLight(0xffffff)
            cabLightLeft.distance = cabLightRight.distance = 40
            cabLightLeft.angle = cabLightRight.angle = 0.5
            cabLightLeft.position.y = cabLightRight.position.y = 5
            cabLightLeft.intensity = cabLightRight.intensity = 2
            cabLightLeft.penumbra = cabLightRight.penumbra = 1
            scene.add(cabLightLeft)
            scene.add(cabLightRight)
        })*/

        // LIGHTS
        hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.2)
        hemiLight.color.setHSL(0.6, 1, 0.6)
        hemiLight.groundColor.setHSL(0.095, 1, 0.75)
        hemiLight.position.set(0, 50, 0)
        scene.add(hemiLight)

        sunLight = new THREE.DirectionalLight( 0xffffff, 1 )
        sunLight.color.setHSL( 0.1, 1, 0.95 )
        sunLight.position.set( -1, 1.75, 1 )
        sunLight.position.multiplyScalar(30) // 50
        scene.add(sunLight)
        sunLight.castShadow = true
        sunLight.shadow.mapSize.width = 2048
        sunLight.shadow.mapSize.height = 2048
        var d = 50
        sunLight.shadow.camera.left = -d
        sunLight.shadow.camera.right = d
        sunLight.shadow.camera.top = d
        sunLight.shadow.camera.bottom = -d
        sunLight.shadow.camera.far = 3500
        sunLight.shadow.bias = -0.000001//-0.0001
        document.getElementById("App").appendChild(renderer.domElement)

        // Fog
        //scene.fog = new THREE.Fog(0x222233, 1, 5000)
        //renderer.setClearColor(scene.fog.color, 1)

        // Water
        water = new THREE.Water(
            new THREE.PlaneBufferGeometry(1000, 1000),
            {
                textureWidth: 512,
                textureHeight: 512,
                waterNormals: new THREE.TextureLoader().load(require('../../static/map/lib/waternormals.jpg'), function(texture) {
                    texture.wrapS = texture.wrapT = THREE.RepeatWrapping
                }),
                alpha: 1.0,
                sunDirection: sunLight.position.clone().normalize(),
                sunColor: 0xffffff,
                waterColor: 0x001e0f,
                distortionScale:  3.7,
                fog: scene.fog !== undefined
            }
        )
        water.rotation.x = - Math.PI / 2
        scene.add(water)
    }

    function animate() {
        requestAnimationFrame(animate)
        render()
        water.material.uniforms.time.value += 1.0 / 60.0;
    }

    function render() {
        var time = new Date().getTime() * 0.0002
        var nsin = Math.sin(time)
        var ncos = Math.cos(time)
        sunLight.position.set( 1500*nsin, 2000*nsin, 2000*ncos)
        sunLight.intensity = (nsin > 0.2) ? 1 : (nsin <= 0.2 && nsin > 0.0) ? nsin/0.2 : 0
        sun.position.set( 1500*nsin, 2000*nsin, 2000*ncos)
        const uniforms = sky.material.uniforms
        uniforms.sunPosition.value.copy(sun.position)
        const isDay = nsin > 0

        skyDome.material.opacity = (isDay) ? 0 : (nsin > -0.1) ? -nsin * 10 : 1
        renderer.render(scene, camera)

        animateTraffic()
        controls.update()
    }

    function animateTraffic() {
        if (cabMesh !== undefined && cabLightLeft !== undefined && cabLightRight !== undefined) {
            if (cabMesh.position.x < 63) {
                cabMesh.position.x += 0.7
            }
            else {
                scene.remove(cabLightLeft)
                scene.remove(cabLightRight)
                scene.remove(cabMesh)
                cabMesh.position.x = -63
                setTimeout(function() {
                    cabMesh.position.x = -63
                    scene.add(cabMesh)
                    scene.add(cabLightLeft)
                    scene.add(cabLightLeft.target)
                    scene.add(cabLightRight)
                    scene.add(cabLightRight.target)
                }, 1000)
            }
            cabLightLeft.position.x = cabLightRight.position.x = cabMesh.position.x + 3
            cabLightLeft.position.z = cabMesh.position.z - 2
            cabLightLeft.target.position.z = cabMesh.position.z - 2
            cabLightRight.position.z = cabMesh.position.z + 2
            cabLightRight.target.position.z = cabMesh.position.z + 2
            cabLightLeft.target.position.x = cabLightRight.target.position.x = cabMesh.position.x + 30
        }
    }

    window.addEventListener('resize', onWindowResize, false)

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize( window.innerWidth, window.innerHeight )
    }

    return {
        render, animate
    }
}
