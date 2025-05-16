import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useOutlet } from 'react-router'
import { motion, AnimatePresence } from 'framer-motion'

export default function Default() {
  const outlet = useOutlet()
  return (
    <>
      <Header />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}>
          {outlet}
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  )
}
