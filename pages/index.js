import Head from "next/head";
import {
  AiFillLinkedin,
} from "react-icons/ai";
import {FaFacebook, FaGithub, FaReact, FaAngular, FaHtml5, FaPython} from "react-icons/fa"
import { SiJavascript, SiTailwindcss, SiTypescript, SiMysql } from "react-icons/si"
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go"
import { useEffect, useState } from "react";
import deved from "../public/formal-me_v2.png";
import Image from "next/image";
import lexi from "../public/lexi.png";
import pokedex from "../public/pokemon.png"
import cv from './cv.pdf'  
import flippy from '../public/flippy.png'
import po_tracker from "../public/po_tracker.png"
import python_automation from "../public/python_automate.jpg"
import thumbsUp from "../public/thumbsup.gif"
import Container from "../components/Container/_app";
import Project from "./components/Project/_app";
import { flippyStack, lexiStack, myUrls, poTrackerStack, pokedexStack, projects, pythonAutomateStack, techStack } from "../constants/const";
import Projects from "./components/Projects/_app";
export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const sizes = "w-[1.5em] h-[1.5em]";

  const techStackLogos = [<FaReact key="FaReact" className={sizes}/>, <FaAngular key="FaAngular" className={sizes}/>, <FaHtml5 key="FaHtml5" className={sizes}/>, 
                      <FaPython key="FaPython" className={sizes}/>, <SiJavascript key="SiJavascript" className={sizes}/>, <SiTailwindcss key="SiTailwindcss" className={sizes}/>, 
                      <SiTypescript key="SiTypescript" className={sizes}/>, <SiMysql key="SiMysql" className={sizes}/>]

  const [sync, setSync] = useState(false)
  const [onSpin, setOnSpin] = useState(false)
  const socialsLogo = [<FaFacebook key="FaFacebook" />, <AiFillLinkedin key="AiFillLinkedin"/>, <FaGithub key="FaGithub"/>]

  const setDelay = () => {
    if (darkMode === false) {
      setSync(false)
    } else {
      setSync(true)
    }
    setTimeout(() => {
      setDarkMode(!darkMode)
    }, "1000");
  }

  const spin = () => {
    if (onSpin === false) {
      setOnSpin(!onSpin)
    }
  }

  const isSpinning = () => {
    if (onSpin) {
      setTimeout(() => {
        setOnSpin(!onSpin)
      }, "1000");
    }
  }
  
  useEffect(() => {
    isSpinning()
  },[onSpin])

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>SPENCE. Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="pt-10 sm:py-10 mb-0 sm:mb-12 flex justify-between items-center dark:text-white">
            <h1 id="typing-text" className="font-burtons text-xs sm:text-xl">SPENCE.</h1>
            <div className="flex items-center gap-3">
              <div className="flex justify-end">
                {
                  darkMode ?  
                    <BsFillSunFill
                      onClick={setDelay}
                      className={sync ? "animate-spin text-base sm:text-2xl" : "text-base sm:text-2xl cursor-pointer"}
                      title="View in light mode"
                    />
                  :
                    <BsFillMoonStarsFill
                      onClick={setDelay}
                      className={sync ? "text-base sm:text-2xl cursor-pointer" : "animate-bounce text-base sm:text-2xl"}
                      title="View in dark mode"
                    />
                }

              </div>
              <div className="flex gap-3 flex-wrap flex-row">
                <div className="flex items-center justify-center transition ease-in-out delay-150 
                                bg-cyan-500 text-to-teal-500 text-white border-none rounded-md hover:-translate-y-1 
                                hover:scale-110 hover:bg-indigo-500 duration-300 whitespace-nowrap text-xs sm:text-base 
                                h-7 w-[8em] sm:w-[8.6em] sm:h-9">
                    <a
                    href={cv}
                    download
                  >
                    Download CV
                  </a>
            
                </div>

                <div className="flex items-center justify-center transition ease-in-out delay-150 
                                bg-cyan-500 text-to-teal-500 text-white border-none rounded-md hover:-translate-y-1 
                                hover:scale-110 hover:bg-indigo-500 duration-300 whitespace-nowrap text-xs sm:text-base 
                                h-7 w-[8em] sm:w-[8.6em] sm:h-9">
                    <a
                    href={cv}
                    download
                  >
                    Contact Me
                  </a>
            
                </div>
              
              </div>
            </div>
          </nav>
          <div className="flex flex-col text-center items-center justify-center p-10 py-10">
            {/* <h2 className="text-2xl sm:text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Spencer Castro
            </h2> */}

            <div className="glitch-wrapper">
                <div style={{color: "pink"}} className="glitch" data-glitch="Spencer Castro"><h2 className="text-teal-300">Spencer Castro</h2></div>
            </div>

            <div className="glitch-wrapper-noise">
              <div className="glitch-noise" data-glitch="Frontend Developer &#60;/&gt;">
                <h1 className="text-gray-800 dark:text-gray-200">Frontend Developer &#60;/&gt;</h1>
                </div>
          </div>

            {/* <div className={onSpin ? "animate-spin" : ""}>
              <h3 onClick={spin} className="text-sm sm:text-2xl py-0 sm:py-2 dark:text-white md:text-3xl animate-bounce5s cursor-pointer">
                Front End Developer &#60;/&gt;
              </h3>
            </div> */}
          
            <p className="text-center text-xs sm:text-md py-2 sm:py-5 leading-5 sm:leading-8 text-gray-800 dark:text-gray-200 max-w-xl md:text-xl">
              I design and code web applications, with in-depth experience in ReactJs and more.
            </p>
            <div className="text-2xl sm:text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              {socialsLogo.map((social, socialIndex) => 
                <a className="hover:-translate-y-1 hover:scale-110" 
                key={socialIndex} 
                href={social?.type.name.toLowerCase().includes('linkedin') ? 
                              myUrls.linkedIn : social?.type.name.toLowerCase().includes('github') ? 
                              myUrls.github : myUrls.facebook }
                >
                  {social}
                </a>
                )}
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full h-32 w-32 md:w-80 md:h-80 relative overflow-hidden mt-20">
              <Image src={deved} layout="fill" objectFit="cover" alt=""/>
            </div>
            <ul className="text-xs sm:text-2xl flex flex-row gap-3 sm:gap-9 justify-center mt-7 sm:mt-10 flex-wrap">
              {techStackLogos.map((tech, techIndex) => <li className="text-teal-500 animate-wiggle hover:animate-spin" key={techIndex}>{tech}</li>)}
            </ul>
          </div>
        </section>
        <section>
          <div className="flex flex-col mt-2 sm:mt-10">
            <h3 className="text-2xl sm:text-4xl py-1 dark:text-white ">Services I offer</h3>
            <div className="flex flex-col shadow-lg p-2 sm:p-4">
              <p className="text-xs sm:text-base py-2 leading-5 sm:leading-8 text-gray-800 dark:text-gray-200">
                I have been working in web development for more than a year, I &apos;ve done remote work for
                <span className="text-teal-500"> corporate </span>
                and collaborated with talented people to create digital products / web applications
                for both business and consumer use.
              </p>
              <p className="text-xs sm:text-base py-2 leading-5 sm:leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, I like to code from scratch. Do you have an idea for your next 
              great website? Let&apos;s make it a reality..
            </p>
            </div>
          </div>
          <h3 className="text-2xl sm:text-4xl py-1 dark:text-white mt-2 sm:mt-10">What skills I have</h3>
          <div className="lg:flex gap-9">
            <div className="flex items-center flex-col gap-9 dark:bg-gray-800 rounded-xl my-3 sm:my-5 flex-1 shadow-lg p-5 sm:p-7">
                <h1 className="text-base sm:text-lg font-semibold dark:text-teal-600">My Experience</h1>
                <div className="text-sm sm:text-base dark:text-white flex flex-col gap-5">
                  <h1>Technologies I Use</h1>
                  <ul className="flex flex-row flex-wrap gap-10">
                    {techStack.map((tech,techIndex) => <li className="flex items-center flex-row" key={techIndex}><GoVerified className="dark:text-teal-600 animate-float mt-3"></GoVerified> <p>{tech}</p></li>)}
                  </ul>
                </div>
                
            </div>
            <div className="flex items-center flex-col dark:bg-gray-800 rounded-xl my-3 sm:my-5 flex-1 shadow-lg p-5 sm:p-7">
              <h3 className="text-base sm:text-lg font-semibold dark:text-teal-600">Consulting</h3>
              <div className="dark:text-white flex flex-col items-center">
                <Image src={thumbsUp} />
                <p className="basis-2/5 text-sm sm:text-base">
                  Are you interested in feedback for your current project? I can
                  give you tips and tricks to level it up.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex flex-col mt-2 sm:mt-10">
            <h3 className="text-2xl sm:text-4xl py-1 dark:text-white ">Portfofolio</h3>
              <p className="text-xs sm:text-base py-2 leading-5 sm:leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as developer, I&apos;ve done remote work for
                <span className="text-teal-500"> corporate </span>
                I&apos;ve handled <span className="text-teal-500">several projects </span>
                developing responsive web applications working with REST API
              </p>
          </div>
            <h3 className="text-2xl sm:text-4xl dark:text-white mt-2 sm:mt-10 mb-5">Projects that I worked on</h3>
            <Container className="flex flex-col lg:flex-row gap-4 lg:flex-wrap" style={{paddingBottom: "1em"}}>
              <Project
                title={["flippy", "lexi", "pokedex", "po_tracker", "python_automation"]}
              />
            </Container>
        </section>
      </main>
    </div>
  );
}
