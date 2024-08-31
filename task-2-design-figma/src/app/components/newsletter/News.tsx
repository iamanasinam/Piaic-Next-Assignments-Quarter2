import React from 'react'

const News = () => {
  return (
    <div className="h-[10px] relative flex items-center justify-center min-h-[350px]">
            {/* Background Watermark */}
            <div className="absolute inset-0 flex items-center justify-center ]">
                <h1 className="text-9xl font-bold text-gray-200 opacity-40 select-none">
                    Newsletter
                </h1>
            </div>

            {/* Form Container */}
            <div className="relative p-8 w-full max-w-md text-center">
                <h2 className="text-2xl font-semibold mb-4">Subscribe Our Newsletter</h2>
                <p className="text-gray-600 mb-6 text-sm">Get the latest information and promo offers directly</p>
                <form className="flex items-center justify-center">
                    <input
                        type="email"
                        placeholder="Input Email Address"
                        className="pl-6 w-[600px] border border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <button
                        type="submit"
                        className="ml-6 w-[320px] px-4 py-1 bg-black text-white font-semibold  hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Get Started
                    </button>
                </form>
            </div>
        </div>
  )
}

export default News
