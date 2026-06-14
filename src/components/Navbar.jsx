import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <div className='flex w-full items-center justify-between gap-4'>
        <NavLink to='/'>
          <div className='rounded-2xl border border-white/10 bg-[#0f172a] p-2 shadow-[0_12px_40px_rgba(2,6,23,0.45)]'>
            <img src={logo} alt='logo' className='w-14 h-14 object-contain' />
          </div>
        </NavLink>

        <div className='hidden flex-1 text-center md:block'>
          <p className='text-[1.65rem] font-semibold uppercase tracking-[0.35em] text-cyan-200'>
            Welcome to my Portfolio
          </p>
        </div>

        <nav className='flex shrink-0 text-lg gap-7 font-medium'>
          <NavLink to='/about' className={({ isActive }) => isActive ? "text-cyan-300" : "text-slate-200 hover:text-white" }>
            About
          </NavLink>
          <NavLink to='/projects' className={({ isActive }) => isActive ? "text-cyan-300" : "text-slate-200 hover:text-white"}>
            Projects
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
