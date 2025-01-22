import React from 'react';
import { assets } from '../assets';

const CompletedTask = ({task,toggleTaskView}) => {
  return (
     <div className="w-11/12 h-20 border-t-2 border-[#496E4B33] flex items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#496E4B33] bg-[#496E4B33] border-gray-300 rounded"
              defaultChecked
            />
            <label
            onClick={toggleTaskView}
              htmlFor="default-checkbox"
              className="ms-2 text-base font-medium line-through text-gray-900 dark:text-gray-300"
            >
              {task}
            </label>
          </div>
          <div className="fill-white text-white">
            <img
              src={assets.star}
              alt="image"
              className="w-6 h-6 fill-violet-700"
            />
          </div>
        </div>
  )
}

export default CompletedTask
