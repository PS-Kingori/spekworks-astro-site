import { motion } from "framer-motion";

export default function Example() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}   // starting state
      animate={{ opacity: 1, y: 0 }}    // target state
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-40 h-40 bg-blue-500 text-white flex items-center justify-center"
    >
      Hello Motion 🚀
    </motion.div>
  );
}