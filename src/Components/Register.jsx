import Link from 'next/link';
import React from 'react';
import { BsFillPersonFill } from "react-icons/bs";

const Register = () => {
  return (
    <div>
              <Link href='/register'>
              <BsFillPersonFill className="text-brown drop-shadow-3xl" />
              </Link>  
    </div>
  )
}

export default Register