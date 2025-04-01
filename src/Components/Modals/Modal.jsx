'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import submitForm from '../Service/Service'

const Example = () => {
  const [open, setOpen] = useState(true)
  const [formData, setFormData] = useState({
      Name: '',
      Numbers: '',
      Course: '',
    });
  
    const [status, setStatus] = useState(null); // Pass yoki fail uchun state
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const result = await submitForm(formData);
      
      if (result.status === "pass") {
        setFormData({ Name: '', Numbers: '', Course: '' }); // Formani tozalash
      }
      
      setStatus(result); // Javobni state-ga o'rnatamiz
    };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-1000">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div className="isolate rounded w-full position: relative  bg-white px-6 py-24 sm:py-32 lg:px-8" id='Ariza'>
        <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex position: absolute top-5 right-5 justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                Chiqish
              </button>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold text-gray-900 sm:text-5xl">Ariza Yuborish</h2>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 ">
          <input 
            type="text" 
            name="Name" 
            placeholder="Ismingiz" 
            value={formData.Name} 
            required
            onChange={(e) => setFormData({...formData, Name: e.target.value})} 
            className="block w-full border border-gray-300 rounded-md px-3.5 py-2 text-gray-900 outline-gray-300 focus:outline-indigo-600" 
          />
          <input 
            type="number" 
            name="Numbers" 
            placeholder="Raqamingiz" 
            value={formData.Numbers} 
            minLength={9}
            maxLength={13}
            required
            onChange={(e) => setFormData({...formData, Numbers: e.target.value})} 
            className="block w-full border border-gray-300 rounded-md px-3.5 py-2 text-gray-900 outline-gray-300 focus:outline-indigo-600" 
          />

          <input 
            type="text" 
            name="Course" 
            placeholder="Qaysi kursga qiziqasiz" 
            value={formData.Course} 
            minLength={3}
            required
            onChange={(e) => setFormData({...formData, Course: e.target.value})} 
            className="block w-full border border-gray-300 rounded-md px-3.5 py-2 text-gray-900 outline-gray-300 focus:outline-indigo-600" 
          />
        </div>
        <div className="mt-10">
          <button type="submit" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-white shadow-xs hover:bg-indigo-500">
            Yuborish
          </button>
        </div>
      </form>

      {/* Muvaffaqiyat yoki xatolik haqida xabar */}
      {status && (
        <div className={`mt-4 p-3 rounded-md text-white ${status.status === "pass" ? "bg-green-600" : "bg-red-600"}`}>
          {status.message}
        </div>
      )}
    </div>
        </div>
      </div>
    </Dialog>
  )
}

export default Example