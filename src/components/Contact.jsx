// import React from 'react'
// import { CONTACT } from '../constants';
// import { motion } from "framer-motion";

// const Contact = () => {
//   return (
//     <div className='border-b border-neutral-900 pb-20'><h1 className='my-10 text-center text4xl'>Get In Touch</h1>
//     <div className='text-center tracking-tighter'>
//         <p className='my-4'>{CONTACT.address}</p>
//         <p className='my-4'>{CONTACT.phoneNo}</p>
//         <a href="#" className='border-b'>{CONTACT.email}</a>
//     </div>
//     </div>
//   )
// }

// export default Contact

import React from 'react';
import { CONTACT } from '../constants';
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h1
        className='my-10 text-center text-4xl'
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </motion.h1>

      <motion.div
        className='text-center tracking-tighter'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.p
          className='my-4'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {CONTACT.address}
        </motion.p>

        <motion.p
          className='my-4'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {CONTACT.phoneNo}
        </motion.p>

        <motion.a 
          href="#" 
          className='border-b'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {CONTACT.email}
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Contact;
