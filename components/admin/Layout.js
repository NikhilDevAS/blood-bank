import Link from 'next/link';
import { IoHomeOutline } from 'react-icons/io5';
import { FaUsers } from 'react-icons/fa6';
import { RiGroup2Fill } from 'react-icons/ri';
import { BiLogOut } from 'react-icons/bi';
import { useContext, useEffect } from 'react';
import { Context } from '../Context';
import { useRouter } from 'next/router';

export default function Layout({ children, ...props }) {
  const { user, logout } = useContext(Context);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/admin/login');
    }
  }, [user, router]);
  return (
    <>
      <div className="top-bar">
        <h1 className="text-2xl font-bold text-red-700">Admin_panel</h1>
        <p className="hover:text-red-500">{user && user.name}</p>
      </div>

      <div className="flex ">
        <div className="side-bar">
          <Link className="short-links" href="/admin">
            <IoHomeOutline size={25} />
            Dashboard
          </Link>
          <Link className="short-links" href="/admin/blood-doners">
            <FaUsers size={25} /> Doners
          </Link>
          <Link className="short-links" href="/admin/partners">
            <RiGroup2Fill size={25} />
            Partners
          </Link>
          <div className="short-links" onClick={() => logout()}>
            <BiLogOut size={25} />
            Logout
          </div>
        </div>
        <div className="ml-[300px] pt-24 px-10 w-full">{children}</div>
      </div>
    </>
  );
}
