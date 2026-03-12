import { motion } from "framer-motion";
import WhatsappButton from "./WhatsappButton";

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


   <section class="flex flex-col items-center gap-12 py-20">

 <div class="md:w-1/2 px-20 flex flex-col items-center gap-6">

  

 

</div>

    <div class="md:w-1/2 ">
    <h2 class="text-center text-4xl md:text-5xl text-gray-900 font-bold leading-relaxed">
      Have a project <br />Reach out to us
    </h2>
  </div>
     <WhatsappButton className="py-3 px-6 text-xl" />

    </section>
  </div >

  
  


  


  
    </motion.div>
  );
}
