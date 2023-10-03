import { useRouter } from 'next/navigation';

function Section1() {
  const router = useRouter();
  return (
    <div className="bg-[#5BC0BE] flex flex-col items-center justify-center h-screen px-4 sm:px-8 md:px-16 lg:px-32 xl:px-32">
      <div className="font-oldStdTT text-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl">
        INVOICYFY
      </div>

      <div className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl mt-4 md:mt-8 mb-8 text-center">
        Welcome to Invoicify, where token payments become next-gen NFT invoices! Ditch the boring
        paper trails and ride the wave of interchain transactions.
      </div>

      <div className="mt-4">
        <button
          onClick={() => router.push('/invoice')}
          className="bg-white text-[#0B132B] py-2 px-4 rounded-md hover:bg-[#ceced6] transition duration-300 text-sm sm:text-base"
        >
          Create Invoice
        </button>
      </div>
    </div>
  );
}

export default Section1;
