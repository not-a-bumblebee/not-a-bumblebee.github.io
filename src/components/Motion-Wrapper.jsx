import { motion } from "framer-motion";


const Section = ({ children, delay = 0 }) => (
    <motion.div initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay }}
        className="max-w-2xl px-7 bg-yellow-100 py-7 w-full rounded-xl shadow-md bg-opacity-"
    >
        {children}
    </motion.div>)

export default Section