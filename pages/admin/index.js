import Layout from '@/components/admin/Layout';
import { mongooseConnect } from '@/lib/database';
import { Doners } from '@/model/doner';

export default function Dashboard({ data }) {
  return (
    <Layout>
      <h2 className="text-3xl font-bold mb-10">Dashboard</h2>

      <div className="w-full grid grid-cols-4 gap-5">
        <div className="bg-green-200 p-10 rounded-md shadow-md">
          <p className="text-xl text-center font-bold uppercase mb-4">
            total Doners
          </p>
          <p className="text-center text-xl text-gray-500 font-bold">
            {data.doner} <sup>+</sup>
          </p>
        </div>
        <div className="bg-blue-200 p-10 rounded-md shadow-md">
          <p className="text-xl text-center font-bold uppercase mb-4">
            total partners
          </p>
          <p className="text-center text-xl text-gray-500 font-bold">
            {data.partner} <sup>+</sup>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const doners = await Doners.find();
  const partners = await Doners.find({ usertype: 'partner' });

  return {
    props: {
      data: {
        doner: doners.length,
        partner: partners.length,
      },
    },
  };
}
