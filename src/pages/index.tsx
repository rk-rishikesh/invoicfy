import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="space-y-2">
      <Image
        src="https://cdn3d.iconscout.com/3d/premium/thumb/electricity-bill-payment-2869818-2384388.png"
        width={700}
        height={250}
        alt=""
        className="mt-0.5 ml-2 pb-px"
      />
    </div>
  );
};

export default Home;
