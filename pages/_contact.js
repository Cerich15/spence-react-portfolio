
import { useEffect, useState } from 'react'
import Container from '../components/Container'
import { useRouter } from 'next/router'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { emailValidation } from '../helper';
import Link from 'next/link';
import Modal from '../components/Modal';
import { motion } from "framer-motion";

const Contact = () => {

 const notifySuccess = (message) => toast.success(message, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
 });

 const notifyError = (message) => toast.error(message, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark"
    });

 const pageTransition = {
    // type: "tween",
    ease: "linear",
    duration: 0.8,
    // delay: 0.2
    };

  const Router = useRouter();
  const { title } = Router.query
  const darkMode = title === 'true' && true

  const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID
  const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY

  const initState = {user_name: "", user_email: "", message: ""}
  const [info, setInfo] = useState(initState)

  const onChange = (name) => (e) => {
    if (name === "name") setInfo({...info,  user_name: e.target.value})
    if (name === "email") setInfo({...info,  user_email: e.target.value})
    if (name === "message") setInfo({...info,  message: e.target.value})
  }

  const onReset = () => {
    setInfo({...initState})
    notifySuccess("Cleared")
  }

  const onSubmit = () => {
    if(info.user_name.length !== 0 && info.user_email.length !== 0 && info.message.length !== 0) {

        if (emailValidation(info.user_email)) {
            emailjs.send('service_kjy1ai6', 'template_5nurdfk', info, 'kVKxJUW5KjYI2VJ1s')
                .then((result) => {
                    console.log(result.text, "<Res");
                    setInfo({...initState})
                    notifySuccess('Message successfully sent Thank you!')
                }, (error) => {
                    console.log(error.text, "<err");
                    notifyError(error.text)
                });
        } else {
            notifyError("Please input a valid Email,")
        }
    } else {
        notifyError("Please kindly fill out all fields")
    }
}

  return (
        <Container className={darkMode ? "dark" : ""}>
           <Container className="bg-white py-3 dark:bg-gray-900 min-h-screen">
             <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={pageTransition}
             >
                    <Container className='md-10 flex flex-row-reverse mx-5 sm:mx-10'>
                        <Container className='cursor-pointer transition ease-in-out delay-150 bg-cyan-500 hover:-translate-y-1 
                                        hover:scale-110 hover:bg-indigo-500 duration-300 text-white text-sm sm:text-base text-white text-center font-bold bg-teal-500 p-1 rounded-md w-[5em] outline-0'>
                            <Link
                            href={{pathname: "/"}}
                            >
                                Back
                            </Link>
                        </Container>
                    </Container>
                        <Container className="flex flex-col justify-center items-center gap-5">
                            <h1 className='text-teal-500 text-3xl font-bold'>Contact</h1>
                            <Modal title="More content here" label="Hi" />
                            <Container
                                className="flex flex-col gap-3 sm:gap-5 w-[15em] sm:w-[22em]">
                                <input 
                                    value={info.user_name} 
                                    className='placeholder:text-sm sm:placeholder:text-base rounded-md placeholder:font-medium sm:placeholder:font-semibold outline-0 p-1 dark:border-0 border-[2px] border-slate-500' 
                                    placeholder='Your Name' 
                                    type='text'
                                    required
                                    onChange={onChange("name")}
                                />
                                <input 
                                    value={info.user_email} 
                                    className='placeholder:text-sm sm:placeholder:text-base rounded-md placeholder:font-medium sm:placeholder:font-semibold outline-0 p-1 border-[2px] dark:border-0 border-slate-500' 
                                    placeholder='Your Email' 
                                    type='email'
                                    required
                                    onChange={onChange("email")}
                                />
                                <textarea 
                                    value={info.message} 
                                    className='placeholder:text-sm sm:placeholder:text-base rounded-md placeholder:font-medium sm:placeholder:font-semibold h-[5em] sm:h-[7em] outline-0 p-1 dark:border-0 border-[2px] border-slate-500' 
                                    placeholder='Message to me' 
                                    type='text'
                                    required
                                    onChange={onChange("message")}
                                />
                                <Container className='flex flex-row flex-wrap gap-2 justify-center sm:justify-end'>
                                    <button className='cursor-pointer transition ease-in-out delay-150 bg-cyan-500 text-to-teal-500 text-white border-none rounded-md hover:-translate-y-1 
                                            hover:scale-110 hover:bg-indigo-500 duration-300 text-white text-sm sm:text-base font-bold bg-teal-500 p-1 rounded-md w-[5em] sm:w-[7em] outline-0' 
                                        onClick={onSubmit}
                                        >
                                            Send
                                        </button>
                                    <button className='cursor-pointer transition ease-in-out delay-150 
                                            bg-cyan-500 text-to-teal-500 text-white border-none rounded-md hover:-translate-y-1 
                                            hover:scale-110 hover:bg-indigo-500 duration-300 text-white text-sm sm:text-base font-bold bg-teal-500 p-1 rounded-md w-[5em] sm:w-[7em] outline-0' 
                                        onClick={onReset}>
                                            Reset
                                    </button>
                                </Container>
                            </Container>
                        </Container>
                   </motion.div>
                </Container>
        </Container>
  )
}

export default Contact