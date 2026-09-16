'use client'

// Crystal geometry/material adapted from Bevel UI's MIT-licensed Prism Hero.
// https://21st.dev/@bevelui/components/prism-hero
import { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, Lightformer, MeshTransmissionMaterial } from '@react-three/drei'

function Crystal({ active, reducedMotion, tint }: { active: boolean; reducedMotion: boolean; tint: string }) {
  const ref = useRef<THREE.Mesh>(null)
  const glassBackground = useMemo(() => new THREE.Color('#20251a'), [])
  const target = useRef({ progress: 0 })
  const orientation = useRef(new THREE.Quaternion())
  const dragging = useRef(false)
  const desired = useMemo(() => new THREE.Quaternion(), [])
  const scrollRotation = useMemo(() => new THREE.Euler(), [])
  const { viewport, invalidate, gl } = useThree()
  const scale = THREE.MathUtils.clamp(Math.min(viewport.width, viewport.height) / 5.1, 0.3, 1)

  useEffect(() => {
    if (!active) return
    const canvas = gl.domElement
    const hero = canvas.closest('#home')
    let pointerId: number | null = null
    let lastX = 0
    let lastY = 0
    const deltaRotation = new THREE.Quaternion()
    const dragAxis = new THREE.Vector3()
    const previousCursor = canvas.style.cursor
    const previousTouchAction = canvas.style.touchAction
    canvas.style.cursor = 'grab'
    canvas.style.touchAction = 'pan-y'
    const onScroll = () => {
      const rect = hero?.getBoundingClientRect()
      // The existing hero is one screen tall; rotate as it leaves the viewport.
      if (!dragging.current) {
        target.current.progress = reducedMotion || !rect ? 0 : THREE.MathUtils.clamp(-rect.top / rect.height, 0, 1)
      }
      invalidate()
    }
    const onPointerDown = (event: PointerEvent) => {
      if (!event.isPrimary || event.button !== 0 || event.pointerType === 'touch') return
      pointerId = event.pointerId
      lastX = event.clientX
      lastY = event.clientY
      dragging.current = true
      canvas.setPointerCapture(event.pointerId)
      canvas.style.cursor = 'grabbing'
      event.preventDefault()
    }
    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerId !== pointerId) return
      const dx = event.clientX - lastX
      const dy = event.clientY - lastY
      lastX = event.clientX
      lastY = event.clientY
      const distance = Math.hypot(dx, dy)
      if (!distance) return
      // Rotate around screen-space axes, with no angle limits or Euler locks.
      dragAxis.set(dy, dx, 0).normalize()
      const sensitivity = Math.PI * 2 / Math.max(1, Math.min(canvas.clientWidth, canvas.clientHeight))
      deltaRotation.setFromAxisAngle(dragAxis, distance * sensitivity)
      orientation.current.premultiply(deltaRotation).normalize()
      invalidate()
    }
    const endDrag = () => {
      const captured = pointerId
      pointerId = null
      dragging.current = false
      canvas.style.cursor = 'grab'
      if (captured !== null && canvas.hasPointerCapture(captured)) canvas.releasePointerCapture(captured)
      invalidate()
    }
    const onPointerEnd = (event: PointerEvent) => {
      if (event.pointerId === pointerId) endDrag()
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    canvas.addEventListener('pointerdown', onPointerDown)
    canvas.addEventListener('pointermove', onPointerMove)
    canvas.addEventListener('pointerup', onPointerEnd)
    canvas.addEventListener('pointercancel', onPointerEnd)
    canvas.addEventListener('lostpointercapture', onPointerEnd)
    window.addEventListener('blur', endDrag)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      canvas.removeEventListener('pointerdown', onPointerDown)
      canvas.removeEventListener('pointermove', onPointerMove)
      canvas.removeEventListener('pointerup', onPointerEnd)
      canvas.removeEventListener('pointercancel', onPointerEnd)
      canvas.removeEventListener('lostpointercapture', onPointerEnd)
      window.removeEventListener('blur', endDrag)
      endDrag()
      canvas.style.cursor = previousCursor
      canvas.style.touchAction = previousTouchAction
    }
  }, [active, reducedMotion, gl, invalidate])

  useFrame((_, delta) => {
    const mesh = ref.current
    if (!mesh || !active) return
    const { progress: p } = target.current
    scrollRotation.set(0.2 + p * 0.4, 0.35 + p * Math.PI * 1.1, 0.08)
    desired.setFromEuler(scrollRotation).premultiply(orientation.current)
    const ease = reducedMotion || dragging.current ? 1 : 1 - Math.exp(-8 * Math.min(delta, 0.05))
    mesh.quaternion.slerp(desired, ease)
    const moving = mesh.quaternion.angleTo(desired) > 0.001
    mesh.scale.setScalar(scale * (1 + p * 0.18))
    // Stop rendering once the interaction settles. No continuous idle loop.
    if (moving && !reducedMotion) invalidate()
  })

  return (
    <mesh ref={ref} rotation={[0.2, 0.35, 0.08]} scale={scale}>
      <icosahedronGeometry args={[1.32, 0]} />
      <MeshTransmissionMaterial
        transmission={1} thickness={1.35} roughness={0.03} ior={1.92}
        chromaticAberration={0.2} anisotropy={0.25} distortion={0.18}
        distortionScale={0.35} temporalDistortion={0}
        backside samples={3} resolution={192} background={glassBackground}
        color={tint} attenuationColor={tint} attenuationDistance={8}
      />
    </mesh>
  )
}

export default function PrismScene({ active }: { active: boolean }) {
  const [reducedMotion, setReducedMotion] = useState(true)
  const [colors, setColors] = useState({ accent: '#CAFF00', tint: '#efffc7' })

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(query.matches)
    update()
    query.addEventListener('change', update)
    const accent = getComputedStyle(document.documentElement).getPropertyValue('--color-accent').trim() || '#CAFF00'
    const tint = new THREE.Color(accent).lerp(new THREE.Color('#ffffff'), 0.78).getStyle()
    setColors({ accent, tint })
    return () => query.removeEventListener('change', update)
  }, [])

  return (
    <Canvas frameloop={active ? 'demand' : 'never'} dpr={[1, 1.25]}
      gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
      camera={{ fov: 40, near: 0.1, far: 30, position: [0, 0, 7] }}>
      <Environment resolution={128} frames={1}>
        <Lightformer intensity={5} position={[0, 5, 4]} scale={[12, 4, 1]} color="#f5f5f5" />
        <Lightformer intensity={3.2} position={[-6, 1, 3]} scale={[4, 9, 1]} color={colors.accent} />
        <Lightformer intensity={2.6} position={[6, -2, 2]} scale={[5, 6, 1]} color="#efffc7" />
        <Lightformer intensity={1.8} position={[0, -4, -3]} scale={[9, 3, 1]} color="#ffffff" />
        <Lightformer intensity={1.2} position={[0, 0, 5]} scale={[8, 8, 1]} color="#e9f1df" />
      </Environment>
      <Crystal active={active} reducedMotion={reducedMotion} tint={colors.tint} />
    </Canvas>
  )
}
