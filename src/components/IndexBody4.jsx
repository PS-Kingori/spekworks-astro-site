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
       
 <div class="bg-yellow-500 container mx-auto py-16 px-16 my-6">


   <section class="flex flex-col md:flex-row items-center gap-12 py-20">

 <div class="md:w-1/2 px-20 flex flex-col items-center gap-6">

  <div class="md:text-2xl font-semibold flex items-center gap-4">
    📍
    <span>Nairobi, Kenya</span>
  </div>

  <div class="md:text-2xl font-semibold flex items-center gap-4">
    📞
    <span>+254 712 345 678</span>
  </div>

  <div class="md:text-2xl font-semibold flex items-center gap-4">
    ✉️
    <span>info@example.com</span>
  </div>

</div>

    <div class="md:w-1/2 ">
    <h2 class="text-center text-4xl md:text-5xl font-bold leading-relaxed">
      Have a project <br />Reach out to us
    </h2>
  </div>
    </section>
  </div >

  
  


  


  
    </motion.div>
  );
}
