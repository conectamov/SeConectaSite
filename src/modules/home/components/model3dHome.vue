<template>
  <div ref="container" class="top-0 left-0 w-full h-screen absolute bg-transparent"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

const container = ref(null)

let scene, camera, renderer, animationId
let model

onMounted(() => {
  scene = new THREE.Scene()

  camera = new THREE.PerspectiveCamera(
    75,
    container.value.clientWidth / container.value.clientHeight,
    0.1,
    1000,
  )
  camera.position.set(0, 0, 5)

  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  })

  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(container.value.clientWidth, container.value.clientHeight)
  renderer.setClearColor(0x000000, 0)

  container.value.appendChild(renderer.domElement)

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2)
  directionalLight.position.set(5, 5, 5)
  scene.add(directionalLight)

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
  scene.add(ambientLight)

  const textureLoader = new THREE.TextureLoader()
  const texture = textureLoader.load('/3d/cel/texture.png')

  texture.flipY = false
  texture.colorSpace = THREE.SRGBColorSpace

  const loader = new OBJLoader()
  loader.load(
    '/3d/cel/cel.obj',
    (obj) => {
      model = obj

      model.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({
            map: texture,
            roughness: 0.4,
            metalness: 0.3,
          })
        }
      })

      model.rotation.set(-0.2, 3.2, 0)
      model.position.set(60, -2.2, 0)
      model.scale.set(3, 3, 3)

      scene.add(model)
    },
    undefined,
    (error) => {
      console.error('Erro ao carregar OBJ!:', error)
    },
  )

  const animate = () => {
    renderer.render(scene, camera)
    animationId = requestAnimationFrame(animate)
  }

  animate()
  window.addEventListener('resize', onResize)
})

const onResize = () => {
  if (!container.value) return

  camera.aspect = container.value.clientWidth / container.value.clientHeight
  camera.updateProjectionMatrix()

  renderer.setSize(container.value.clientWidth, container.value.clientHeight)
}

onBeforeUnmount(() => {
  cancelAnimationFrame(animationId)
  window.removeEventListener('resize', onResize)
  renderer.dispose()
})
</script>
