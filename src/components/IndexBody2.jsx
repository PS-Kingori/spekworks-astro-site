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
    { img: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1631&auto=format&fit=crop", title: "Design", href: "/design" },
    { img: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1631&auto=format&fit=crop", title: "Development", href: "/dev" },
    { img: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1631&auto=format&fit=crop", title: "Branding", href: "/branding" },
    { img: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1631&auto=format&fit=crop", title: "Strategy", href: "/strategy" },
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
