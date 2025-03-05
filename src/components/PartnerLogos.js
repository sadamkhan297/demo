export default function PartnerLogos() {
  const logos = [
    { src: '/logo1.png', alt: 'Cadent', width: 'w-36', height: 'h-20' },
    { src: '/logo2.png', alt: 'NICEIC', width: 'w-36', height: 'h-30' },
    { src: '/logo3.png', alt: 'Severn Trent', width: 'w-32', height: 'h-20' },
    { src: '/logo4.png', alt: 'MKM', width: 'w-28', height: 'h-10' },
  ];

  return (
    <section className='bg-gray-900 py-8'>
      <div className='container mx-auto grid grid-cols-2 md:grid-cols-4 gap-1 place-items-center'>
        {logos.map((logo, index) => (
          <div key={index} className='flex items-center justify-center'>
            <img
              src={logo.src}
              alt={logo.alt}
              className={`${logo.width} ${logo.height} object-contain`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
