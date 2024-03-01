import { LiaQuoteLeftSolid } from 'react-icons/lia';
import { FaCheck } from 'react-icons/fa';
import { IoHeart } from 'react-icons/io5';
import { IoLocationOutline } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { CiInstagram } from 'react-icons/ci';
import { CiYoutube } from 'react-icons/ci';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import DonorModal from '@/components/donormodal';
import { useState } from 'react';

export default function Home() {
  const [showModal, setModal] = useState(false);
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
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <header>
        <nav>
          <div className="flex items-center">
            <IoHeart size={50} className="text-red-700" />
            <h2 className="text-3xl font-bold uppercase">
              <span className="text-red-700">B</span>lood
              <span className="text-red-700">B</span>ank
            </h2>
          </div>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            {/* <li>
              <Link href="/about">About Us</Link>
            </li> */}
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <button onClick={() => setModal(true)}>Donate</button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="first-section">
          <div className="main-img-container bg-[url(https://templatekit.jegtheme.com/redirect/wp-content/uploads/sites/141/2021/08/UVG5CCF.jpeg)] bg-cover"></div>
          <div className="main-content-container">
            <h1>Donate Your Blood to Us, Save More Life Together</h1>
            <p className="mt-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
              quod officiis, ipsa iusto delectus ea, voluptates fuga asperiores
              autem vero praesentium! Aspernatur maiores voluptatem adipisci
              dolorum labore doloremque? Molestiae, blanditiis!
            </p>

            <button
              className="bg-red-700 text-white py-5 mt-10 rounded-md"
              onClick={() => setModal(true)}
            >
              Donate Your Blood And Save Life
            </button>
          </div>
        </section>
        <section className="second-section">
          <div className="flex flex-col items-center justify-center">
            <LiaQuoteLeftSolid size={80} color="red" />
            <h2 className="font-semibold text-4xl mt-5 text-center">
              &ldquo;Donate Your Blood to Us, Save More <br /> Life
              Together&ldquo;
            </h2>

            <p className="text-sm text-red-500 mt-10 ">John Doe</p>
          </div>
        </section>
        <section className="third-section">
          <div className="w-full min-h-[50vh] pr-10">
            <p className="text-lg text-red-500">About Us</p>
            <h2 className="text-5xl font-bold mt-5">
              Together We Can Make World More Health & Better
            </h2>

            <p className="mt-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
              inventore recusandae laborum enim dignissimos molestiae neque
              laudantium qui quos eos animi accusamus, id veniam veritatis
              ducimus aut ipsa dolorum magnam?
            </p>

            <div className="flex gap-5 items-center justify-between mt-10">
              <ul className="w-full">
                <li className="flex gap-4 items-center mb-3">
                  {' '}
                  <FaCheck size={15} className="text-red-500" />
                  {'  '} Good Service
                </li>
                <li className="flex gap-4 items-center mb-3">
                  {' '}
                  <FaCheck size={15} className="text-red-500" />
                  {'  '} Help People
                </li>
                <li className="flex gap-4 items-center mb-3">
                  {' '}
                  <FaCheck size={15} className="text-red-500" />
                  {'  '} Hygine Tools
                </li>
              </ul>
              <ul className="w-full">
                <li className="flex gap-4 items-center mb-3">
                  {' '}
                  <FaCheck size={15} className="text-red-500" />
                  {'  '} 24h Service
                </li>
                <li className="flex gap-4 items-center mb-3">
                  {' '}
                  <FaCheck size={15} className="text-red-500" />
                  {'  '} Health Check
                </li>
                <li className="flex gap-4 items-center mb-3">
                  {' '}
                  <FaCheck size={15} className="text-red-500" />
                  {'  '} Blood Bank
                </li>
              </ul>
            </div>

            <button
              className="bg-red-700 px-10 py-2 rounded-md text-white mt-10"
              onClick={() => setModal(true)}
            >
              Donate Now
            </button>
          </div>
          <div className="w-full min-h-[50vh] bg-[url(https://images.pexels.com/photos/12193105/pexels-photo-12193105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover"></div>
        </section>
        <section className="fourth-section">
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
                <label className="text-sm text-gray-400 mb-1">
                  Blood Group
                </label>
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
          <div className="w-full p-10">
            <p className="text-lgl text-red-700">Registration</p>
            <p className="text-4xl font-semibold mt-5">
              Your Donation Can Make Someone’s Life Better
            </p>
            <p className="mt-10">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus, quis repellat. Blanditiis, magnam harum
              reprehenderit tempore repellat iure soluta! Aperiam blanditiis
              autem enim molestias laboriosam eos ipsum. Sed, explicabo illum?
            </p>

            <p className="mt-10">
              <span className="font-bold text-xl">Opening Hours:</span>{' '}
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="font-bold text-xl text-gray-400">
                24X7 Working
              </span>
            </p>

            <div className="mt-5 flex gap-x-2 items-center justify-between">
              <ul className="w-full">
                <p className="text-2xl font-semibold">Kottarakkara Office</p>
                <li className="flex gap-x-2 items-center mt-5">
                  <IoLocationOutline size={20} className="text-red-700" />
                  <span>Pulamon, Kottarakkara</span>
                </li>
                <li className="flex gap-x-2 items-center">
                  <FaPhoneAlt size={20} className="text-red-700" />
                  <span>+91 8855773366</span>
                </li>
                <li className="flex gap-x-2 items-center">
                  <AiOutlineMail size={20} className="text-red-700" />
                  <span>example@gmail.com</span>
                </li>
              </ul>
              <ul className="w-full">
                <p className="text-2xl font-semibold">Punalur Office</p>
                <li className="flex gap-x-2 items-center mt-5">
                  <IoLocationOutline size={20} className="text-red-700" />
                  <span>Pulamon, Kottarakkara</span>
                </li>
                <li className="flex gap-x-2 items-center">
                  <FaPhoneAlt size={20} className="text-red-700" />
                  <span>+91 8855773366</span>
                </li>
                <li className="flex gap-x-2 items-center">
                  <AiOutlineMail size={20} className="text-red-700" />
                  <span>example@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <footer>
          <div>
            <div className="flex items-center">
              <IoHeart size={50} className="text-red-700" />
              <h2 className="text-3xl font-bold uppercase">
                <span className="text-red-700">B</span>lood
                <span className="text-red-700">B</span>ank
              </h2>
            </div>
            <p className="mt-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
              veritatis consectetur vitae incidunt
            </p>

            <div className="grid grid-cols-4 gap-5 mt-5">
              <div className="bg-red-700 flex items-center justify-center p-2">
                <FaFacebookF size={20} className="text-white" />
              </div>
              <div className="bg-red-700 flex items-center justify-center p-2">
                <FaXTwitter size={20} className="text-white" />
              </div>
              <div className="bg-red-700 flex items-center justify-center p-2">
                <CiInstagram size={20} className="text-white" />
              </div>
              <div className="bg-red-700 flex items-center justify-center p-2">
                <CiYoutube size={20} className="text-white" />
              </div>
            </div>
          </div>
          <ul>
            <p className="pb-2 border-b-2 border-b-red-700 font-bold">
              Quick Links
            </p>
            <li className="mt-10">Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
          <ul>
            <p className="pb-2 border-b-2 border-b-red-700 font-bold">
              Useful Links
            </p>
            <li className="flex gap-x-2 items-center mt-10">
              <IoLocationOutline size={20} className="text-red-700" />
              <span>Pulamon, Kottarakkara</span>
            </li>
            <li className="flex gap-x-2 items-center">
              <FaPhoneAlt size={20} className="text-red-700" />
              <span>+91 8855773366</span>
            </li>
            <li className="flex gap-x-2 items-center">
              <AiOutlineMail size={20} className="text-red-700" />
              <span>example@gmail.com</span>
            </li>
          </ul>
          <ul>
            <p className="pb-2 border-b-2 border-b-red-700 font-bold">
              Working Hours
            </p>
            <li className="mt-10">24 X 7</li>
            <p>Need For Help? Call Us</p>
            <button className="bg-red-700 py-2 px-5 flex items-center justify-center gap-x-5 text-white mt-10">
              <FaPhoneAlt size={20} className="text-white" />
              Contact Us
            </button>
          </ul>
        </footer>
        <hr className="my-2 h-2" />
        <p className="text-center mb-10">
          Copyright @ 2024 Nikhil Dev A S | Web Design by Nikhil Dev A S
        </p>
      </main>
      {showModal && <DonorModal setModal={setModal} />}
    </>
  );
}
