<template>
  <div
    ref="modelViewerRef"
    class="modelViewer">
    <div
      v-if="isLoading"
      class="loader" />
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'

import { ref, useTemplateRef, computed, watch, onMounted } from 'vue'
import { useDark } from '@vueuse/core'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { useScreenWidth } from '@/shared/lib/screenWidth'
import { useEventListener } from '@/shared/lib/dom'

const modelViewerRef = useTemplateRef<HTMLElement>('modelViewerRef')

let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let controls: OrbitControls
let model: THREE.Group

const isDark = useDark()
const DARK_BG = '#202023'
const LIGHT_BG = '#ede1db'
const sceneBackground: Ref<string> = computed(() => (isDark.value ? DARK_BG : LIGHT_BG))

const setSceneBackground = (): void => {
  scene.background = new THREE.Color(sceneBackground.value)
}

watch(isDark, setSceneBackground)

const initScene = (): void => {
  scene = new THREE.Scene()
  setSceneBackground()
}

// Инициализация камеры
const INITIAL_CAMERA_POSITION_Z = 3
function initCamera() {
  camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
  camera.position.z = INITIAL_CAMERA_POSITION_Z
}

// Инициализация рендерера
const SCENE_SIZE = {
  small: 280,
  medium: 480,
  large: 640
}

const { isMedium, isSmall } = useScreenWidth()

const renderSize: Ref<number> = computed(() => {
  if (isSmall.value) return SCENE_SIZE.small
  if (isMedium.value) return SCENE_SIZE.medium
  return SCENE_SIZE.large
})

function initRenderer() {
  if (!modelViewerRef.value) return

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(renderSize.value, renderSize.value, true)
  modelViewerRef.value.appendChild(renderer.domElement)
}

// Добавление освещения
function addLighting() {
  const light = new THREE.DirectionalLight(0xffffff, 1)
  light.position.set(1, 1, 1).normalize()
  scene.add(light)
}

// Инициализация OrbitControls
function initOrbitControls() {
  if (!modelViewerRef.value) return

  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.25
  controls.screenSpacePanning = false
  controls.maxPolarAngle = Math.PI / 2
}

// Обработка изменения размера окна
function onWindowResize() {
  if (!modelViewerRef.value) return

  camera.aspect = modelViewerRef.value.clientWidth / modelViewerRef.value.clientHeight
  camera.updateProjectionMatrix()
  renderer.setSize(modelViewerRef.value.clientWidth, modelViewerRef.value.clientHeight)
}

useEventListener(window, 'resize', onWindowResize)

// Анимация
const ROTATION_SPEED = 0.1
const MIN_ROTATION_SPEED = 0.001
const DECELERATION = 0.99

const rotationSpeed: Ref<number> = ref(ROTATION_SPEED)

function animate() {
  requestAnimationFrame(animate)

  if (model) {
    model.rotation.y += rotationSpeed.value
    rotationSpeed.value = Math.max(rotationSpeed.value * DECELERATION, MIN_ROTATION_SPEED)
  }

  controls.update()
  renderer.render(scene, camera)
}

// Загрузка модели
const MODEL_PATH = './threeJs/model/scene.gltf'
const isLoading: Ref<boolean> = ref(true)

function loadModel() {
  const loader = new GLTFLoader()
  loader.load(
    MODEL_PATH,
    (gltf) => {
      model = gltf.scene
      scene.add(model)
      isLoading.value = false
      animate()
    },
    undefined,
    (error) => {
      console.error('Error loading model:', error)
      isLoading.value = false
    }
  )
}

onMounted(() => {
  if (!modelViewerRef.value) return

  initScene()
  initCamera()
  initRenderer()
  addLighting()
  loadModel()
  initOrbitControls()
})
</script>

<style scoped lang="scss">
.modelViewer {
  overflow: hidden;
  position: relative;
  width: 64rem;
  height: 64rem;

  @include medium {
    width: 48rem;
    height: 48rem;
  }

  @include small {
    width: 28rem;
    height: 28rem;
  }
}

.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
