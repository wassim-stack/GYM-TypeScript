import React from 'react'
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { BenefitType, SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import Htext from '@/shared/Htext';
import Benefit from './Benefit';
import ActionButton from '@/shared/ActionButton';
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';

const benefits :Array<BenefitType>=[
    {
        icon: <HomeModernIcon className='h-6 w-6'/>,
        title:"State of the Art Facilities",
        description:"Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
    },
    {
        icon: <UserGroupIcon className='h-6 w-6'/>,
        title:"100's of Diverse Classes",
        description:"Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
 
    },
    {
        icon: <AcademicCapIcon className='h-6 w-6'/>,
        title:"Expert and Pro Trainers",
        description:"Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
    },
  
]
const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
};
type Props = {
    setSelectedPage :(value : SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id="benefits" className='mx-auto min-h-full w-5/6 py-20'>
        <motion.div  onViewportEnter={()=>setSelectedPage(SelectedPage.Benefits)}>
            {/* HEADER */}
            <motion.div 
                className='md:my-5 md:w-3/5'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
                >
                <Htext>MORE THAN JUST GYM</Htext>
                <p className='my-5 text-sm'>
                    Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
                    Studios to get the Body Shapes That you Dream of.. Get Your Dream
                    Body Now.
                </p>
            </motion.div>
            {/* BENIFITS */}
            <motion.div className='md:flex items-center justify-between gap-8 mt-5'
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.5 }}
                 variants={container}
            >
                {benefits.map((benefit:BenefitType)=>(
                    <Benefit key={benefit.title} icon={benefit.icon} title={benefit.title} description={benefit.description} setSelectedPage={setSelectedPage}/>
                ))}
            </motion.div>
            {/* GRAPHICS AND  DESCRIPTION*/}
            <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
                {/* GRAPHICS */}
                    <img className="mx-auto" src={BenefitsPageGraphic} alt="Benefits-Page-Graphic" />
                {/* DESCRIPTION */}        
                <div>
                    {/* TITLE */}
                    <div className='relative'>
                        <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves'>
                            <div>
                                <Htext>Millons {" "}
                                    <span className='text-primary-500'>Fit</span>
                                </Htext>
                            </div>
                        </div>
                    </div>
                    {/* DESCRIPT */}
                    <div>
                        <p className='my-5'>
                            Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                            egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                            fames vitae vitae quis. Quis amet vulputate tincidunt at in
                            nulla nec. Consequat sed facilisis dui sit egestas ultrices
                            tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                            Felis orci diam odio.
                        </p>
                        <p className='my-5'>
                            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                            tellus quam porttitor. Mauris velit euismod elementum arcu neque
                            facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                            enim mattis odio in risus nunc.
                        </p>
                    </div>
                    {/* BUTTON */}
                    <div className='relative mt-16'>
                        <div className='before:absoulte before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'>
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
            
        </motion.div>
    </section>
  )
}

export default Benefits