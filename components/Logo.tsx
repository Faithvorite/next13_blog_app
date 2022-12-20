import Image from 'next/image';
import React from 'react';
import logo from "../public/logobrown.png";

function Logo(props:any) {
    const { renderDefault,title} = props;

  return (
    <div>
        <Image
        className='rounded-full object-cover'
        height={50}
        width={50}
        src="/../public/logobrown.png"
        alt="logo"
        />
    </div>
  )
}

export default Logo