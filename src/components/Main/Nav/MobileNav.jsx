'use client'

import React, { useState } from 'react'
import { Slant as Hamburger } from "hamburger-react";
import MobileNavContent from './MobileNavContent';

const MobileNav = () => {
const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <Hamburger toggled={isOpen} toggle={setOpen} hideOutline={false} />
      {isOpen && <MobileNavContent setOpen={setOpen} isOpen={isOpen} />}
    </div>
  );
}

export default MobileNav