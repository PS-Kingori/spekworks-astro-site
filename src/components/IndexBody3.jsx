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


 <section class="flex flex-col md:flex-row items-center gap-12 py-20">
  
  
  <div class="md:w-1/2">
    <h2 class="text-center text-4xl md:text-5xl font-bold leading-relaxed">
      Why Work <br />With Us
    </h2>
  </div>

  
  <div class="md:w-1/2">
      <div class="">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

      <div class="text-center">
        <div class="">
          <svg xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 24 24"
       stroke-width="1.5"
       stroke="currentColor"
       class="w-10 h-10 text-blue-600 mx-auto mb-4">
       
    <path stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
        </div>
        <p class="font-semibold"> Timely Delivery </p>
                <p class="">  Our commitment to timely delivery ensures that projects are completed on schedule without compromising quality.
                </p>

      </div>

      <div class="text-center">
        <div class="text-4xl mb-3">
<svg xmlns="http://www.w3.org/2000/svg"
 fill="none" 
 viewBox="0 0 24 24" 
 stroke-width="1.5" 
 stroke="currentColor" 
 class="w-10 h-10 text-blue-600 mx-auto mb-4">
  <path stroke-linecap="round" 
  stroke-linejoin="round" 
  d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
</svg>


        </div>
        <p class="font-semibold">Integrated Expertise </p>
         <p class="">  We bring together a diverse range of skills and knowledge, providing integrated expertise and solutions.
                </p>
      </div>

      <div class="text-center">
        <div class="text-4xl mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke-width="1.5" 
          stroke="currentColor" 
          class="w-10 h-10 text-blue-600 mx-auto mb-4">
  <path stroke-linecap="round" 
  stroke-linejoin="round" 
  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
</svg>

        </div>
        <p class="font-semibold">Quality Assurance </p>
         <p class="">  Our rigorous quality control processes guarantee that all materials and workmanship meet the highest standards.
                </p>
      </div>

      <div class="text-center">
        <div class="text-4xl mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" 
          fill="none" viewBox="0 0 24 24" 
          stroke-width="1.5" 
          stroke="currentColor" 
          class="w-10 h-10 text-blue-600 mx-auto mb-4">
  <path stroke-linecap="round" 
  stroke-linejoin="round" 
  d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
</svg>

        </div>
        <p class="font-semibold">Innovation</p>
         <p class="">  We continuously explore new technologies, materials, and design methodologies to create cutting-edge solutions .
                </p>
      </div>

    </div>
  </div>

    
  </div>

</section>
  </div >

  
  


  


  
    </motion.div>
  );
}
