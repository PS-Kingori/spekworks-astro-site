// import { Image } from 'astro:assets';
// import logo from '../assets/sp-logo.png';
// import { useState } from 'react';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false); // For managing mobile menu state

//   return (
//     <nav class="p-10 fixed top-0 left-0 right-0 z-20 bg-gray-50">
//       <div class="container mx-auto px-4 flex items-center justify-between h-20">
//         {/* Logo */}
//         <a href="/" class="flex items-center">
//           <Image src={logo} alt="Saka-WM" height={180} width={180} />
//         </a>

//         {/* Mobile Menu Button */}
//         <div class="sm:hidden">
//           <button onClick={() => setIsOpen(!isOpen)} class="focus:outline-none">
//             &#9776; {/* Use Unicode for hamburger icon */}
//           </button>
//         </div>

//         {/* Nav links */}
//         <div class={`hidden sm:flex space-x-6 items-center ${isOpen ? 'flex' : 'hidden'}`}>
//           <a href="/" class="hover:underline">Home</a>
//           <a href="/about" class="hover:underline">About</a>
//           <a href="/services" class="hover:underline">Services</a>
//           <a href="/gallery" class="hover:underline">Gallery</a>
//           <a href="/contact" class="hover:underline">Contact</a>
//         </div>

//         {/* Mobile Menu */}
//         <div class={`absolute top-16 left-0 right-0 bg-gray-50 shadow-lg p-4 ${isOpen ? 'block' : 'hidden'} sm:hidden`}>
//           <a href="/" class="block hover:underline">Home</a>
//           <a href="/about" class="block hover:underline">About</a>
//           <a href="/services" class="block hover:underline">Services</a>
//           <a href="/gallery" class="block hover:underline">Gallery</a>
//           <a href="/contact" class="block hover:underline">Contact</a>
//         </div>
//       </div>
//     </nav>
//   );
// }
