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
  <h2 class="text-4xl md:text-5xl font-bold mb-4 ">Contact Us</h2>

  <div class="pt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
  <div class=" h-[500px]">
    <img src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1631&auto=format&fit=crop" class="w-full h-full object-cover " />
  </div>
  <div class=" h-[500px]">
    <img src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1631&auto=format&fit=crop" class="w-full h-full object-cover " />
  </div>
  
  
  
  </div>
  </div >

  
  


  
</div>

  
    </motion.div>
  );
}
