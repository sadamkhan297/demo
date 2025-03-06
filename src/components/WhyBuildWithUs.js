export default function WhyBuildWithUs() {
  return (
    <section className='bg-white py-6 px-4 md:px-8 lg:px-16'>
      {/* Section Heading */}
      <h2 className='text-center text-2xl md:text-3xl font-bold text-gray-900 mb-6'>
        Why Build With Us?
      </h2>

      {/* Main Grid Layout */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {/* Left Large Image with Text */}
        <div className='relative md:col-span-2 sm:text-center'>
          <img
            src='/w1.png'
            alt='Strong Foundations'
            className='w-full h-auto object-cover rounded-lg shadow-lg'
          />
          <div className='absolute bottom-4 left-4 text-white p-4 md:p-6 rounded-lg w-full md:w-1/2'>
            <h3 className='text-lg md:text-xl font-bold'>Strong Foundations</h3>
            <p className='mt-2 text-xs md:text-sm pr-3'>
              We construct buildings that are durable, safe, and built to last.
            </p>
            <button className='mt-4 bg-[#02937A] text-white px-4 py-2 rounded'>
              See Our Projects
            </button>
          </div>
        </div>

        {/* Right Small Card */}
        <div className='bg-[#02937A] rounded-lg shadow-lg p-4 md:p-6 flex flex-col gap-4'>
          <img
            src='/w2.png'
            alt='Modern Technology'
            className='w-full h-auto object-cover rounded-lg'
          />
          <p className='text-white font-light text-2xl md:text-4xl mt-4'>
            Modern <br /> Technology
          </p>
          <p className='text-green-100 text-xs md:text-sm'>
            We integrate the latest construction techniques and smart solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
