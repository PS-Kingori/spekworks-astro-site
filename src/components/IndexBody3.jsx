import { motion } from "framer-motion";

export default function Body() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}   // starting state
       whileInView={{
        opacity: 1,
        y: 0
    }}
    viewport={{ once: false, margin: "0px 0px -100px 0px" }}  // Added viewport configuration
      transition={{
        duration: 0.6  // Added basic transition
      }}
      
    >
       
 <div class="container mx-auto pt-32 px-16">
  <div class="text-center">
  <h2 class="text-4xl md:text-5xl font-bold mb-4 ">Why Work with us</h2>
  
  </div>

  
  


  
</div>

  
    </motion.div>
  );
}
