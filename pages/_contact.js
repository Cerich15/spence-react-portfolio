
import { useState } from 'react'
import Container from '../components/Container'
import { useRouter } from 'next/router'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { emailValidation } from '../helper';
import Link from 'next/link';

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
        <Container className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40 min-h-screen flex flex-col justify-center">
            <Container className="flex flex-col justify-center items-center gap-5">
                <h1 className='text-teal-500 text-3xl font-bold'>Contact</h1>
                <Container
                    className="flex flex-col gap-5 w-[22em]">
                    <input 
                        value={info.user_name} 
                        className='rounded-md placeholder:font-semibold outline-0 p-1 dark:border-0 border-[2px] border-slate-500' 
                        placeholder='Your Name' 
                        type='text'
                        required
                        // name="user_name"
                        onChange={onChange("name")}
                    />
                    <input 
                        value={info.user_email} 
                        className='rounded-md placeholder:font-semibold outline-0 p-1 border-[2px] dark:border-0 border-slate-500' 
                        placeholder='Your Email' 
                        type='email'
                        required
                        onChange={onChange("email")}
                    />
                    <textarea 
                        value={info.message} 
                        className='rounded-md placeholder:font-semibold h-[7em] outline-0 p-1 dark:border-0 border-[2px] border-slate-500' 
                        placeholder='Message to me' 
                        type='text'
                        required
                        onChange={onChange("message")}
                    />
                    <Container className='flex flex-row flex-wrap gap-2 justify-end'>
                        <button className='text-white text-base font-bold bg-teal-500 p-1 rounded-md w-[7em] outline-0' 
                            onClick={onSubmit}
                            >
                                Send
                            </button>
                        <button className='text-white text-base font-bold bg-teal-500 p-1 rounded-md w-[7em] outline-0' onClick={onReset}>Reset</button>
                    </Container>
                </Container>
            </Container>
        </Container>
    </Container>
  )
}

export default Contact