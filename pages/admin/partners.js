import Layout from '@/components/admin/Layout';
import Modal from '@/components/modal';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Partners() {
  const [showModal, setModal] = useState(false);
  const [doners, setDoners] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    getDoners();
  }, []);

  const getDoners = async () => {
    const response = await axios.get('/api/partners');
    setDoners(response.data.doc);
  };

  const onsubmit = async (data) => {
    const response = await axios.post('/api/partners', data);
    setDoners(response.data.doc);
  };
  return (
    <Layout>
      <div className="flex items-center justify-between w-ful mb-10">
        <h2 className="text-3xl font-bold">Partners</h2>
        <button
          className="bg-red-700 text-white px-10 py-2 rounded-md shadow-md"
          onClick={() => setModal(true)}
        >
          Add Partner
        </button>
      </div>

      <div>
        <form
          onSubmit={handleSubmit(onsubmit)}
          className="w-full flex gap-x-10 items-center "
        >
          <select
            name=""
            id=""
            className="w-1/3 py-2 bg-transparent rounded-md shadow-md border outline-none px-10"
            {...register('group')}
          >
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
          <button
            type="submit"
            className="bg-red-700 text-white px-10 py-2 rounded-md shadow-md"
          >
            Search
          </button>
        </form>
      </div>
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
          <table>
            <thead>
              <tr>
                <th>Blood_group</th>
                <th>Name</th>
                <th>Dob</th>
                <th>gender</th>
                <th>Phone_number</th>
                <th>Emergency_number</th>
                <th>Place</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {doners.map((doner, index) => {
                return (
                  <tr key={index}>
                    <td>{doner.group}</td>
                    <td>{doner.name}</td>
                    <td>{doner.dob}</td>
                    <td>{doner.gender}</td>
                    <td>{doner.phone}</td>
                    <td>{doner.emergencyPhone}</td>
                    <td>{doner.place}</td>
                    <td>{doner.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {showModal && <Modal setModal={setModal} getDoners={getDoners} />}
    </Layout>
  );
}
