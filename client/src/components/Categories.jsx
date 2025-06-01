import React from 'react'
import { useAppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { categories } from '../assets/assets'

const Categories = () => {
  const navigate = useNavigate()
  
  
  return (
    <div className='mt-16'>
      <p className='text-2xl md:text-3xl font-medium'>
        Categories
      </p>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-6'>
        {categories && categories.length > 0 ? (
          categories.map((category) => (
            <div 
              key={category.text || category.path} 
              className="group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center"
              style={{ backgroundColor: category.bgColor }}
              onClick={() => {
                navigate(`/products/${category.path.toLowerCase()}`);
                window.scrollTo(0, 0);
              }}
              aria-label={`Go to ${category.text} category`}
            >
              <img 
                src={category.image}
                alt={category.text || "Category"}
                className='group-hover:scale-105 transition max-w-28'
              />
              <p className='text-sm font-medium'>{category.text}</p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No categories found.</p>
        )}
      </div>
    </div>
  )
}

export default Categories