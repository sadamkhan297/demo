export default function CommitmentSection() {
  const features = [
    {
      title: 'Quality & Innovation',
      description:
        'The best materials, latest technology, and modern techniques.',
      icon: '/c1.png',
    },
    {
      title: 'On-Time & Within Budget',
      description: 'We prioritize efficiency without compromising quality.',
      icon: '/c2.png',
    },
    {
      title: 'Client-Centric Approach',
      description:
        'Your vision guides our approach from concept to completion.',
      icon: '/c3.png',
    },
  ];

  return (
    <section className='bg-white'>
      {/* Main Section */}
      <div className='container mx-auto flex flex-col lg:flex-row items-start gap-10 py-10 px-6 lg:px-16 relative'>
        {/* Left Side Text */}
        <div className='lg:w-1/2 text-center lg:text-left'>
          <h2 className='text-3xl font-bold text-gray-900'>Our Commitment</h2>
          <p className='mt-4 text-gray-600 leading-relaxed'>
            We believe in building trust as much as we believe in building
            structures. Every project we undertake reflects our dedication to
            quality, precision, and sustainability. Whether it's a dream home, a
            corporate building, or a large-scale infrastructure project, we
            ensure every detail meets the highest standards.
          </p>
        </div>

        {/* Right Side Image */}
        <div className='lg:w-1/2 relative'>
          <img
            src='/ourimg.png'
            alt='Commitment Image'
            className='w-full rounded-lg shadow-lg'
          />
        </div>

        {/* Responsive Box: Absolute on Large Screens, Static on Small Screens */}
        <div
          className='w-full lg:w-[75%] pt-1 px-4 rounded-lg shadow-lg transform lg:absolute lg:max-w-screen-xl lg:top-[67%] xl:top-[63%] 2xl:top-[70%] left-6 lg:left-16'
          style={{ backgroundColor: '#02937A' }}
        >
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col items-left gap-4 p-4 ${
                  index !== features.length - 1
                    ? 'lg:shadow-[6px_0_6px_-2px_rgba(0,0,0,0.1)]'
                    : ''
                }`}
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className='w-8 h-8 object-contain'
                />
                <div>
                  <p className='text-white font-light leading-snug'>
                    {feature.title}
                  </p>
                  <p className='text-green-100 text-xs leading-4.5'>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
