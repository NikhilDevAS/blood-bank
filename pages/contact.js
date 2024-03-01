import DonorModal from '@/components/donormodal';
import { mongooseConnect } from '@/lib/database';
import { Doners } from '@/model/doner';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { CiInstagram, CiYoutube } from 'react-icons/ci';
import { FaFacebookF, FaPhoneAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoHeart, IoLocationOutline } from 'react-icons/io5';

export default function Contact({ partners }) {
  const [showModal, setModal] = useState(false);
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
      <section className="px-[300px] py-20">
        <h1 className="text-3xl font-bold mb-10">Contact Our Partners</h1>
        <div className="grid grid-cols-4 gap-10">
          {partners &&
            partners.map((partner, index) => {
              return (
                <div className="border shadow-md p-10 rounded-md" key={index}>
                  <p>{partner.name}</p>
                  <div className="flex items-center gap-5 mt-4">
                    <FaPhoneAlt size={20} className="text-red-700" />{' '}
                    {partner.phone}
                  </div>
                  <div className="flex items-center gap-5 mt-4">
                    <FaPhoneAlt size={20} className="text-red-700" />{' '}
                    {partner.emergencyPhone}
                  </div>
                </div>
              );
            })}
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
      {showModal && <DonorModal setModal={setModal} />}
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const partners = await Doners.find({ usertype: 'partner' });
  return {
    props: {
      partners: JSON.parse(JSON.stringify(partners)),
    },
  };
}
