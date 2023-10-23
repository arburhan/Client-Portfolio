import React from 'react';
import Menus from '@/data/Menu';
import Image from 'next/image';
import user from '@/assets/images/profile/user.png'

const Navbar = () => {

    return (
        <nav>
            <section >
                <div className="navbar">
                    <div className="flex-1">
                        <a className="btn btn-ghost normal-case text-xl">LOGO</a>
                        <div className='ml-5'>
                            <h2>Abu Raihan Mohammad Sohag</h2>
                            <h4 className=' text-center' >Slogan</h4>
                        </div>
                    </div>
                    <div className="flex-none gap-2">
                        <div>
                            <button className='btn btn-primary' >Subscribe</button>
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                        </div>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <Image src={user} alt='sohag profile' />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* menu */}
            <section className='flex text-[22px] py-8' >
                <div className='flex items-center' >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <span className='pl-4' >
                        Menu
                    </span>
                </div>
                <div>
                    {
                        Menus.map(single => <button key={single._id} className=' text-emerald-300 ml-4 btn btn-outline btn-success' >{single.name}</button>)
                    }
                </div>
            </section>
        </nav>
    );
};

export default Navbar;