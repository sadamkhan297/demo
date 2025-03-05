export default function WhyBuildWithUs() {
  return (
    <section className='bg-white py-1 px-6 lg:px-16'>
      {/* Section Heading */}
      <h2 className='text-center text-3xl font-bold text-gray-900 mb-8'>
        Why Build With Us?
      </h2>

      {/* Main Grid Layout */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {/* Left Large Image with Text */}
        <div className='relative lg:col-span-2'>
          <img
            src='/w1.png'
            alt='Strong Foundations'
            className='w-full h-full object-cover rounded-lg shadow-lg'
          />
          <div className='absolute bottom-4 left-4 text-white p-6 rounded-lg w-[50%]'>
            <h3 className='text-xl font-bold'>Strong Foundations</h3>
            <p className='mt-2 text-sm'>
              We construct buildings that are durable, safe, and built to last.
            </p>
            <button className='mt-4 bg-[#02937A] text-white px-4 py-2 rounded'>
              See Our Projects
            </button>
          </div>
        </div>

        {/* Right Small Card */}
        <div className='bg-[#02937A] rounded-lg shadow-lg p-6 flex flex-col gap-1'>
          <img
            src='/w2.png'
            alt='Modern Technology'
            className='w-full h-45 object-cover rounded-lg'
          />
          <p className='text-white font-light text-4xl mt-10'>
            Modern <br /> Technology
          </p>
          <p className='text-green-100 text-sm'>
            We integrate the latest construction techniques and smart solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
