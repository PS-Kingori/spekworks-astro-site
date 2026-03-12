import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider
} from "@/components/ui/tooltip"
import { motion } from "framer-motion";

export default function TooltipButton() {

   const buttonVariants = {
    initial: { x: 0 },
    shake: {
      x: [0, 5, -5, 2.5, -2.5, 0], // Create a shake effect by moving in x direction
      transition: { duration: 1.2, ease: "easeInOut", repeat: 4, repeatType:"loop" }
    },
    hover: { scale: 1.1, transition: { duration: 0.2 } },
    tap: { scale: 0.9 }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            variants={buttonVariants}
            initial="initial"
            animate="shake"   
            whileHover="hover"
            whileTap="tap"
          >
           <Button>Whatsapp</Button>

          </motion.div>
        </TooltipTrigger>

        <TooltipContent>
          <p>Send us a text on whatsapp</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}