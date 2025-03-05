export default function ConstructionSection() {
  return (
    <section className='flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 bg-gray-100'>
      {/* Left Side Content */}
      <div className='max-w-lg text-center lg:text-left'>
        <h2 className='text-3xl lg:text-4xl font-bold text-gray-900'>
          Enjoy Quality Life in <br />
          <span className='text-gray-900'>Lavish Construction</span>
        </h2>
        <button className='mt-6 bg-emerald-600 text-white py-3 px-6 rounded-md hover:bg-emerald-700'>
          Book a Consultation
        </button>
      </div>

      {/* Right Side Content */}
      <div className='max-w-2xl mt-8 lg:mt-0 text-center lg:text-left'>
        <p className='text-gray-600'>
          At Lavish, we don’t just construct buildings—we create spaces that
          inspire, endure, and serve communities for generations. With a legacy
          of excellence, innovation, and reliability, we are committed to
          delivering high-quality residential, commercial, and infrastructure
          projects that exceed expectations.
        </p>
        <div className='flex flex-wrap justify-center lg:justify-between mt-8 gap-8'>
          {/* Stats Section */}
          <div className='text-center'>
            <h3 className='text-2xl font-bold text-gray-900'>300+</h3>
            <p className='text-gray-600'>
              Happy <br /> Clients
            </p>
          </div>
          <div className='text-center'>
            <h3 className='text-2xl font-bold text-gray-900'>900+</h3>
            <p className='text-gray-600'>
              Amazing <br /> Projects
            </p>
          </div>
          <div className='text-center'>
            <h3 className='text-2xl font-bold text-gray-900'>20+</h3>
            <p className='text-gray-600'>
              Awards <br /> Winning
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
