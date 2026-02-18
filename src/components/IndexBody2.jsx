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
  <h2 class="text-4xl md:text-5xl font-bold mb-4 ">Our Services</h2>
  
  </div>

  <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {[
    { img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Architecture Services", href: "/services#architecture" },
    { img: "https://images.unsplash.com/photo-1633109870201-318921e3f992?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Interior Design Services ", href: "/services#interior" },
    { img: "https://images.unsplash.com/photo-1617720356637-6264c1c0b4bb?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: " Project Management Services ", href: "/services#pm-services" },
    { img: "https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Landscape-design", href: "/services#landscape-design" },
  ].map((item) => (
    
<a
  href={item.href}
  className="group block text-center"
>
  <img
    src={item.img}
    alt={item.title}
    className="w-full h-64 object-cover rounded-xl group-hover:scale-[1.03] transition"
  />
  <h3 className="mt-4 text-lg font-semibold group-hover:text-yellow-500 transition">
    {item.title}
  </h3>
</a>

    
    
  ))}
</div>
  


  
</div>
  
    </motion.div>
  );
}
