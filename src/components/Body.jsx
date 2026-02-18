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
  <h2 class="text-4xl md:text-5xl font-bold mb-4 ">What we do</h2>
  <div class="text-center py-12 sm:px-20">
      <p class="text-base sm:text-lg md:text-xl mb-4"> At Spekworks, we are passionate about transforming visions into reality through innovative architectural design. We specialize in creating spaces that are not only functional but also aesthetically pleasing. Our team of experienced architects and designers is dedicated to delivering tailored solutions that meet the unique needs of each client.</p>


  </div>

  </div>
  <div class="hidden md:grid grid-cols-1 md:grid-cols-3 gap-4">
  <div class="md:col-span-2 h-[500px] aspect-w-16 aspect-h-9">
    <img 
      src="/2.jpg" 
      class="w-full h-full inset-0 object-cover" 
      alt="Gikambura Residence"
    />
  </div>

  <div class="grid grid-cols-1 gap-2"> 
    <img src="/thumb.jpg" class="h-[250px] object-cover" alt="Proposed Mixed Use Development in Rwanda" />
    <img src="/thumb copy.jpg" class="h-[250px] object-cover" alt="Wedding Parlour" />
  </div>
</div>

  </div>

  
    </motion.div>
  );
}
