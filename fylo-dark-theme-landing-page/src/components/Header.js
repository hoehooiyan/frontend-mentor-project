import React from 'react';
import Logo from '../images/logo.svg';

const Header = (props) => {
  const menuNames = ['Features', 'Team', 'Sign In'];

  return (
    <div className="flex justify-between mx-6 pt-6 mb-10 2xl:pt-10 2xl:mx-16 2xl:mb-20">
      <img src={Logo} alt="fylo-logo" className="w-20 2xl:w-24"/>
      <ul className="font-display flex justify-around items-center w-3/5 2xl:w-64">
        {menuNames.map(menuNames => {
          return <li key={menuNames} className="text-sm 2xl:text-base">{menuNames}</li>;
        })}
      </ul>
    </div>
  )
}

export default Header;