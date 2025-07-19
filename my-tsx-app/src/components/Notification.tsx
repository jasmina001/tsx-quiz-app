import { motion } from 'framer-motion'

export default function Notification() {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      className="fixed top-5 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded shadow-lg z-50"
    >
      Javob yuborildi!
    </motion.div>
  )
}
