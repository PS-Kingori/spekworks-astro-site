import React from 'react'

const Footer = () => {
  return (
    <div>




<footer class="pt-16 bg-gray-900 text-white py-12">
  <div class="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between gap-8">

    <div class="md:w-1/4">
      <h2 class="text-2xl font-bold mb-4">MyCompany</h2>
      <p class="text-gray-400 text-sm">
        Delivering quality services and solutions since 2023.
      </p>
    </div>

    <div class="md:w-1/4">
      <h3 class="font-semibold mb-4">Quick Links</h3>
      <ul class="space-y-2 text-gray-300">
        <li><a href="#" class="hover:text-white transition">Home</a></li>
        <li><a href="#" class="hover:text-white transition">About Us</a></li>
        <li><a href="#" class="hover:text-white transition">Services</a></li>
        <li><a href="#" class="hover:text-white transition">Contact</a></li>
      </ul>
    </div>

    <div class="md:w-1/4">
      <h3 class="font-semibold mb-4">Contact Us</h3>
      <ul class="space-y-2 text-gray-300">
        <li class="flex items-center gap-2">📍 Nairobi, Kenya</li>
        <li class="flex items-center gap-2">📞 +254 712 345 678</li>
        <li class="flex items-center gap-2">✉️ info@example.com</li>
      </ul>
    </div>

    <div class="md:w-1/4">
      <h3 class="font-semibold mb-4">Follow Us</h3>
      <div class="flex gap-4 text-gray-300">
        <a href="#" class="hover:text-white transition">👍</a>
        <a href="#" class="hover:text-white transition">🐦</a>
        <a href="#" class="hover:text-white transition">📸</a>
      </div>
    </div>

  </div>

  <div class="mt-12 text-center text-gray-500 text-sm">
    &copy; 2026 MyCompany. All rights reserved.
  </div>
</footer>

    </div>
  )
}

export default Footer