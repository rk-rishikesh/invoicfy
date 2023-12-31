import Image from 'next/image';
import Link from 'next/link';

import { WalletControlBar } from '../../features/wallet/WalletControlBar';
import Logo from '../../images/logos/app-logo.svg';

// export function Header() {
//   return (
//     <header className="pt-3 pb-2 w-full">
//       <div className="flex items-start justify-between">
//         <Link href="/" className="py-2 flex items-center">
//           <Image src={Logo} width={19} alt="" />
//           Payment Chowk
//           {/* <Image src="" width={110} alt="" className="hidden sm:block mt-0.5 ml-2" />
//           <Image src="" width={185} alt="" className="mt-0.5 ml-2 pb-px" /> */}
//         </Link>
//         <div className="flex flex-col items-end md:flex-row-reverse md:items-start gap-2">
//           <WalletControlBar />
//         </div>
//       </div>
//     </header>
//   );
// }

export function Header() {
  return (
    <header className="pt-3 pb-2 w-full fixed top-0 left-0 bg-white shadow-md z-10">
      <div className="px-4 flex items-start justify-between max-w-screen-xl mx-auto">
        <Link href="/" className="py-2 flex items-center">
          <Image src={Logo} width={19} alt="" />
          Payment Chowk
        </Link>
        <div className="flex flex-col items-end md:flex-row-reverse md:items-start gap-2">
          <WalletControlBar />
        </div>
      </div>
    </header>
  );
}
