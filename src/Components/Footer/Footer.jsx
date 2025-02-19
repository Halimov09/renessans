import React from 'react'
import { Logo, Logo2 } from '..'

const Footer = () => {
  return (
    <div className='dark:bg-gray-900 darks' id='footer'>
        

<footer class="rounded-lg darks shadow-sm dark:bg-gray-900 ">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={Logo2} class="h-8" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">3 - RENESSANS</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Instagram</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Telegram</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Litsenziya</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Raqam</a>
                </li>
            </ul>
        </div>
        </div>
</footer>


    </div>
  )
}

export default Footer