'use client';

import { useState } from 'react';
import {submitForm} from '../';

const Ariza = () => {
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
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8" id='Ariza'>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold text-gray-900 sm:text-5xl">Ariza Yuborish</h2>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <input 
            type="text" 
            name="Name" 
            placeholder="Ismingiz" 
            value={formData.Name} 
            onChange={(e) => setFormData({...formData, Name: e.target.value})} 
            className="block w-full rounded-md px-3.5 py-2 text-gray-900 outline-gray-300 focus:outline-indigo-600" 
          />
          <input 
            type="number" 
            name="Numbers" 
            placeholder="Raqamingiz" 
            value={formData.Numbers} 
            onChange={(e) => setFormData({...formData, Numbers: e.target.value})} 
            className="block w-full rounded-md px-3.5 py-2 text-gray-900 outline-gray-300 focus:outline-indigo-600" 
          />
          <input 
            type="text" 
            name="Course" 
            placeholder="Qaysi kursga qiziqasiz" 
            value={formData.Course} 
            onChange={(e) => setFormData({...formData, Course: e.target.value})} 
            className="block w-full rounded-md px-3.5 py-2 text-gray-900 outline-gray-300 focus:outline-indigo-600" 
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
  );
};

export default Ariza;
