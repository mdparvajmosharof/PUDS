import logo from '../../src/assets/logo.png';
import userdefaultPic from '../../src/assets/user.png';
import DebateIcon from '../../src/assets/debateIcon.png';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/events'>Events</NavLink>
      </li>
      <li>
        <NavLink to='/members'>Members</NavLink>
      </li>
      {/* <li>
        <NavLink to='/join'>Join</NavLink>
      </li>
      <li>
			<NavLink to="/manageMyFoods">Borrowed Books</NavLink>
		  </li> */}
    </>
  );
  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-36 p-4 shadow-xl'
          >
            {navLinks}
          </ul>
        </div>
        <a className='flex items-center btn btn-ghost text-2xl font-bold'>
          <img src={logo} alt='ReeFood Logo' className='w-8 h-8' />
          <span className='text-green-500'>PUDS</span>
        </a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>{navLinks}</ul>
      </div>
      <div className='navbar-end'>
        {/* {user ? (
            <div className="flex mr-2">
              <div className="w-10 rounded-full md:tooltip md:tooltip-left" data-tip={user.displayName}>
                <img alt="Tailwind CSS Navbar component" src={user?.photoURL? user.photoURL : {userdefaultPic}} className="rounded-full mr-1" />
              </div>
              <button onClick={handleSignOut} className="btn btn-primary">
                Sign Out
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-primary">Login</button>
            </Link>
          )}   */}
        <div className='w-10 rounded-full md:tooltip md:tooltip-left'></div>
        <img
          alt='Tailwind CSS Navbar component'
          src={DebateIcon}
          className='rounded-full mr-1 w-8 h-8 mr-'
        />
      </div>
    </div>
  );
};
export default Navbar;
