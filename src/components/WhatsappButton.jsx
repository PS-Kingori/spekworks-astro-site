import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa"; // Import the WhatsApp icon

export default function WhatsappButton() {
    const buttonVariants = {
        hover: { scale: 1.1, transition: { duration: 0.2 } },

        pulse: {
            scale: [1, 1, 1], // Scale up and down
            transition: {
                duration: 3,
                ease: "easeInOut",
                repeat: 2,
                repeatType: "loop",

            }
            
        }
    };


    const dotVariants = {
  pulse: {
    opacity: [1, 0.5, 1], // Fade in and out
    scale: [1, 1.5, 1],   // Scale up and down
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
      times: [0, 0.5, 1],
    }
  }
};

  

  return (
    <>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          
          <div className="flex flex-row gap-2 items-center  h-full">
          <a href="https://wa.me/+254728322582" target="_blank" rel="noopener">
            <motion.div
                                    variants={buttonVariants}
                                    animate="pulse"
                                    whileHover="hover"

                                >
             <Button className="bg-[#009637] text-white font-bold hover:bg-[#1EBEA5]">
              <FaWhatsapp style={{ marginRight: '8px' }} /> {/* Add icon here */}
              Whatsapp
            </Button>
            </motion.div>
            </a>
            <motion.div
      variants={dotVariants}
      animate="pulse"
      style={{
        background: 'green',
        borderRadius: '50%',
        width: '20px',
        height: '20px',
      }}
    />


          </div>
           
            
            
         
        </TooltipTrigger>
        

        <TooltipContent side="right">
          <p>Send us a text on whatsapp</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    
    </>
    
    
  );
}
