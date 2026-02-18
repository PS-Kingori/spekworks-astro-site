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
  <div class="text-center py-12 px-20">
      <p class="text-4xl md:text-xl mb-4"> At Spekworks, we are passionate about transforming visions into reality through innovative architectural design. We specialize in creating spaces that are not only functional but also aesthetically pleasing. Our team of experienced architects and designers is dedicated to delivering tailored solutions that meet the unique needs of each client.</p>


  </div>

  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
  <div class="md:col-span-2 h-[500px]">
    <img 
    src="/src/assets/gallery/residential/Gikambura Residence/2.jpg" />
  </div>

  <div class="flex flex-col gap-4 h-[500px]">
    <img src="/src/assets/gallery/commercial/Proposed Mixed use Development in Rwanda/thumb.jpg" class="h-1/2.5 object-cover " />
    <img src="/src/assets/gallery/hospitality/Wedding-Parlour/thumb.jpg" class="h-1/2.5 object-cover " />
  </div>
  
</div>

  </div>

  
    </motion.div>
  );
}
