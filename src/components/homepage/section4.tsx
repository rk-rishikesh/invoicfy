import { useRouter } from 'next/navigation';

function Section4() {
  const router = useRouter();
  return (
    <div className="bg-[#3A506B] flex flex-col items-center text-white py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-32">
      <div className="text-[#6fffe9] mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-center">
        Convinced you need a taste of Invoicify's crypto magic? Take the leap and create your first
        NFT invoice now!
      </div>
      <button
        onClick={() => router.push('/invoice')}
        className="bg-white text-[#354F52] py-2 px-4 sm:px-6 rounded-md hover:bg-[#ceced6] transition duration-300 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl"
      >
        Create Invoice
      </button>
    </div>
  );
}

export default Section4;
