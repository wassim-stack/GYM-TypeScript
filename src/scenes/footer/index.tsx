import { SelectedPage } from '@/shared/types';
import Logo from "@/assets/Logo.png"
type Props = {
    setSelectedPage :(value : SelectedPage) => void;
}

const Footer = ({setSelectedPage}: Props) => {
  return (
    <footer className='bg-primary-100 py-16'>
        <div className='justify-content mx-auto w-5/6 md:flex'>
            <div className='mt-16 basis-1/2 md:mt-0'>
                <img src={Logo} alt="Logo" />
                <p className='my-5'>
                    Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
                    purus et arcu massa dictum condimentum. Augue scelerisque iaculis
                    orci ut habitant laoreet. Iaculis tristique.
                </p>
                <p>© Evogym All Rights Reserved.</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className="font-bold">Links</h4>
                <p className="my-5">Massa orci senectus</p>
                <p className="my-5">Et gravida id et etiam</p>
                <p className="my-5">Mllamcorper vivamus</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className="font-bold">Contact Us</h4>
                <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
                <p className="my-5">(+216)22-777-333</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer