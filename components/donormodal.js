import axios from 'axios';
import { useForm } from 'react-hook-form';
import { IoMdClose } from 'react-icons/io';
export default function DonorModal({ setModal }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/api/doner-register', data);
      if (response.data.status) {
        alert(response.data.message);
        setModal(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop:blur-sm flex items-center justify-center duration-300 overflow-y-auto">
      <div className="bg-white p-5 rounded-md shadow-md">
        <div className="flex w-full items-center justify-between mb-4">
          <h3 className="text-2xl font-bold">Donor Registration</h3>
          <div className="cursor-pointer">
            <IoMdClose onClick={() => setModal(false)} size={35} />
          </div>
        </div>
        <div className="w-full shadow-md px-5 py-5 bg-gray-100">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-1">Your Name</label>
              <input
                type="text"
                className="text-sm mb-2 bg-white outline-none border-0 px-10 py-5 w-full"
                placeholder="Your Name"
                {...register('name', { required: 'Name is required!' })}
              />
              {errors.name && (
                <p className="text-sm text-red-500 mb-2">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2">
              <div className="flex flex-col">
                <label className="text-sm text-gray-400 mb-1">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="text-sm mb-2 bg-white outline-none border-0 px-10 py-5 w-full"
                  {...register('dob', {
                    required: 'Date of birth is required!',
                  })}
                />
                {errors.dob && (
                  <p className="text-sm text-red-500 mb-2">
                    {errors.dob.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-400 mb-1">Gender</label>
                <select
                  className="text-sm mb-2 bg-white outline-none border-0 px-10 py-5 w-full"
                  {...register('gender', { required: 'Gender is required!' })}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Custom">Custom</option>
                </select>
                {errors.gender && (
                  <p className="text-sm text-red-500 mb-2">
                    {errors.gender.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-1">Email</label>
              <input
                type="email"
                className="text-sm mb-2 bg-white outline-none border-0 px-10 py-5 w-full"
                placeholder="example@gmail.com"
                {...register('email', { required: 'Email is required!' })}
              />
              {errors.email && (
                <p className="text-sm text-red-500 mb-2">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-1">Place</label>
              <input
                type="text"
                className="text-sm mb-2 bg-white outline-none border-0 px-10 py-5 w-full"
                placeholder="Your Place"
                {...register('place', { required: 'Place is required!' })}
              />
              {errors.place && (
                <p className="text-sm text-red-500 mb-2">
                  {errors.place.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2">
              <div className="flex flex-col">
                <label className="text-sm text-gray-400 mb-1">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="text-sm mb-2 bg-white outline-none border-0 px-10 py-5 w-full"
                  {...register('phone', {
                    required: 'Phone Number is required!',
                  })}
                />
                {errors.phone && (
                  <p className="text-sm text-red-500 mb-2">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-400 mb-1">
                  Emergency Phone Number
                </label>
                <input
                  type="number"
                  className="text-sm mb-2 bg-white outline-none border-0 px-10 py-5 w-full"
                  {...register('emergencyPhone', {
                    required: 'Emergency Phone Number is required!',
                  })}
                />
                {errors.emergencyPhone && (
                  <p className="text-sm text-red-500 mb-2">
                    {errors.emergencyPhone.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-1">Blood Group</label>
              <select
                className="text-sm mb-2 bg-white outline-none border-0 px-10 py-5 w-full"
                {...register('group', {
                  required: 'Blood Group is required!',
                })}
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
              {errors.group && (
                <p className="text-sm text-red-500 mb-2">
                  {errors.group.message}
                </p>
              )}
            </div>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-red-700 text-white mt-5 px-5 py-2 rounded-sm shadow-sm"
              >
                Donate Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
