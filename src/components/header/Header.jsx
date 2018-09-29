import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';

import HeaderProvider from './HeaderProvider.jsx'
import HeaderWrapper from './HeaderWrapper.jsx'
import HeaderMenu from './HeaderMenu.jsx'

const RadiantLink = Radium(Link);

export default Radium(function Header() {
  return (
    <HeaderProvider>
      { ({columns, location, isOpen, onToggle}) => location.pathname !== '/' &&
        <HeaderWrapper isOpen={isOpen} columns={columns}>
          <RadiantLink
            className={`Header-Emblem ${columns === 1 ? 'Header-Emblem--Small' : ''}`}
            to="/home"
          >
            { columns === 1 ? 'HS' : 'HARRY SCHNAPER'}
          </RadiantLink>
          <HeaderMenu
            columns={columns}
            onToggle={onToggle}
            isOpen={isOpen}
          />
        </HeaderWrapper>
      }
    </HeaderProvider>
  )
})