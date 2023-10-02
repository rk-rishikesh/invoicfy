import Image from 'next/image';

function Section3() {
  return (
    <div className="py-24">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mx-4 p-4 sm:p-0 md:p-0 lg:p-0 xl:px-32 space-y-8 relative">
        <div className="flex flex-col justify-center items-start overflow-hidden">
          <div className="text-[#1c2541] text-xl font-bold">
            Fast & Easy Cross-Chain Token Payments
          </div>
          <div className="text-[#1c2541]">
            Simply pay using your preferred ERC20 tokens, no matter which chain they're from. We'll
            take care of the cross-chain transactions.
          </div>
        </div>

        <div className="flex justify-center items-center">
          <Image
            src="https://framerusercontent.com/images/wLTyYdyoRJ2N7pUXMO5LPBHodT0.jpg"
            alt="Picture of the author"
            width={300} // Set the width of the image
            height={300} // Set the height of the image
            className="display-block grayscale luminosity overflow-hidden aspect-[0.98/1] rounded-2xl bg-cover bg-no-repeat bg-center"
          />
        </div>

        <div className="flex justify-center items-center">
          <Image
            src="https://framerusercontent.com/images/wLTyYdyoRJ2N7pUXMO5LPBHodT0.jpg"
            alt="Picture of the author"
            width={300} // Set the width of the image
            height={300} // Set the height of the image
            className="display-block grayscale luminosity overflow-hidden aspect-[0.98/1] rounded-2xl bg-cover bg-no-repeat bg-center"
          />
        </div>
        <div className="flex flex-col justify-center items-start overflow-hidden">
          <div className="text-[#1c2541] text-xl font-bold">NFT Invoices on the Main Chain</div>
          <div className="text-[#1c2541]">
            Your NFT invoice will be generated on the Main chain for maximum security and
            authenticity. Keep track of all your payments in one place.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
