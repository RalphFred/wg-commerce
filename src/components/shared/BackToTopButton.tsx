import { ChevronUpIcon } from 'lucide-react'
import React from 'react'

export default function BackToTopButton() {
    return (
        <div className='p-4 bg-neutral-100'>
            <button type="button" className="flex w-full font-normal text-base space-x-2 justify-center rounded-md bg-white text-purple-600 px-6 py-2 hover:bg-purple-50 transition">
                <ChevronUpIcon />
                <span>Back to top</span>
            </button>
        </div>
    )
}
