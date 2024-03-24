import React from 'react';

//icon
import { BsArrowUpRight } from 'react-icons/bs';

//motion
import { motion } from 'framer-motion';

//variants
import { fadeIn } from '../variants';
import { BiLogoChrome } from 'react-icons/bi';

//services data
const services = [
  {
    name: 'Youtuber',
    description: 'Skilled YouTuber with a proven track record of creating engaging content, proficient in video production, and dedicated to fostering strong connections with viewers through consistent audience interaction. ',
    link: 'Learn More',
  },
  {
    name: 'Influencer',
    description: 'Influential content creator with expertise in product promotion, brand partnerships, and cultivating a loyal following. Consistently drives engagement and delivers impactful messaging to a diverse audience. ',
    link: 'Learn More',
  },
  {
    name: 'Audience Engagement',
    description: 'Proficient in cultivating strong relationships with audiences through consistent interaction, personalized communication, and strategic engagement strategies.',
    link: 'Learn More',
  },
  {
    name: 'Product Branding',
    description: 'Experienced in developing and executing comprehensive product branding strategies to enhance brand visibility, convey brand messaging, and establish brand identity. ',
    link: 'Learn More',
  },
]

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* {text and image} */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amounnt: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat
          mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb19'>I am an influencer specializing in product promotion and branding
            </h3>
            {/* <button className='btn btn-sm'>See my Work</button> */}
          </motion.div>
          {/* {services} */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            {/* {services list} */}
            <div>
              {services.map((service, index) => {

                //destructure service
                const { name, description, link } = service;
                return (
                  <div className='border-b border-white/20 h-[146px]
                mb-[38px] flex'
                    key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-
                    primary font-semibold mb-6'>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight'>
                        {description}
                      </p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a href="#" className='btn w-9 h-9 mb-[42px] flex
                      justify-center items-center'>
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className='text-gradient text-sm'>{link}</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
