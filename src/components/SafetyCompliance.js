export default function SafetyCompliance() {
  return (
    <section className='bg-white py-12 px-6 lg:px-16'>
      {/* Main Grid Layout */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {/* Left Card (Smaller Width) */}
        <div className='bg-[#02937A] rounded-lg shadow-lg p-6 flex flex-col gap-4 lg:col-span-1'>
          <h3 className='text-white font-bold text-2xl'>Safety & Compliance</h3>
          <p className='text-green-100 text-sm'>
            We follow strict industry standards to ensure safety at every stage.
          </p>
          <img
            src='/s1.png'
            alt='Safety & Compliance'
            className='w-full h-40 object-cover rounded-lg'
          />
        </div>

        {/* Right Dark Card (Larger Width) */}
        <div className='bg-gradient-to-r from-[#222222] to-[#474747] rounded-lg shadow-lg p-8 flex flex-col justify-center lg:col-span-2 items-start'>
          <p className='text-white text-lg leading-relaxed'>
            To be a leading name in the construction industry, known for our
            commitment<span className='text-yellow-400'>•</span> to excellence,
            integrity, and customer satisfaction.
          </p>
          <p className='text-white mt-4'>
            Let’s Build Something Great Together!
          </p>
          <button className='mt-6 bg-[#02937A] text-white px-4 py-2 rounded w-auto inline-block'>
            Book a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
