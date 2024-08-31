// components/UniqueJewellerySection.js
import Image from 'next/image';
import jewimg from '../../../../public/design-jew.png'
import "./design.css"

const UniqueJewellerySection = () => {
  return (
    <>
    <div className='grid grid-cols-2 mx-12 bg-blue-40'>
        <div className='oki mt-56 grid grid-cols-2'>
            <div className='mb-16'>
                <h3 className="text-xl font-semibold mb-4">Using Good Quality Materials</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="ml-10">
                <h3 className="text-xl font-semibold mb-4">100% Handmade Products</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="mb-16">
                <h3 className="text-xl font-semibold mb-4">Modern Fashion Design</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="ml-10">
                <h3 className="text-xl font-semibold mb-4">Discount for Bulk Orders</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>


        <div className='mt-20'>
            <h1 className='ml-14 mb-8 font-bold text-4xl'>Unique and Authentic Vintage Designer Jewellery</h1>
            <div className='oki grid grid-cols-2'>
                <div className=''><Image className='designiii ml-6 mt-8' src={jewimg} alt='' /></div>
                <div className='ml-14 mt-16 text-sm'>
                    <p className=''>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care.The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                    <button className='mt-8 py-4 px-12 bg-black text-white'>See All Products</button>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default UniqueJewellerySection;





// <section className="py-12">
//       <div className="container mx-auto flex flex-col lg:flex-row items-center">
//         <div className="lg:w-1/2 w-full lg:pr-12 flex flex-wrap cheeks ">
          
//         </div>
//         <div className="lg:w-1/2 w-full flex flex-col items-center text-center lg:text-left">
//           <Image
//             src="/path-to-your-image.png" // Replace with your image path
//             alt="Unique Jewellery"
//             width={300} // Adjust the width
//             height={400} // Adjust the height
//             className="mb-6"
//           />
//           <div>
//             <h2 className="text-2xl font-bold mb-4">Unique and Authentic Vintage Designer Jewellery</h2>
//             <p className="text-gray-600 mb-4">
//               This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.
//             </p>
//             <button className="bg-black text-white py-2 px-4">
//               See All Products
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>