import { motion } from 'framer-motion'

export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.55,
  direction = 'up',
  className = '',
  viewport = { once: true, margin: '-40px' },
  ...props
}) => {
  const directionOffset = {
    up: { y: 28, x: 0 },
    down: { y: -28, x: 0 },
    left: { x: 28, y: 0 },
    right: { x: -28, y: 0 },
    none: { x: 0, y: 0 },
  }

  const offset = directionOffset[direction] || directionOffset.up

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={viewport}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const StaggerContainer = ({
  children,
  staggerChildren = 0.1,
  delayChildren = 0.05,
  className = '',
  viewport = { once: true, margin: '-40px' },
  ...props
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const StaggerItem = ({
  children,
  direction = 'up',
  duration = 0.5,
  className = '',
  ...props
}) => {
  const directionOffset = {
    up: { y: 24, x: 0 },
    down: { y: -24, x: 0 },
    left: { x: 24, y: 0 },
    right: { x: -24, y: 0 },
    none: { x: 0, y: 0 },
  }

  const offset = directionOffset[direction] || directionOffset.up

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, ...offset },
        show: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
