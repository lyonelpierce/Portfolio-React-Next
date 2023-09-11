"use client";

import Image from "next/image";
import Link from "next/link";

import { Canvas } from "@react-three/fiber";

import { Experience } from "../app/components/Experience";
import { PortfolioExperience } from "../app/components/PortfolioExperience";
import { HeadExperience } from "../app/components/HeadExperience";
import { FiChevronRight } from "react-icons/fi";
import { LiaAwardSolid } from "react-icons/lia";
import { PiProjectorScreenChart, PiUsersThreeLight } from "react-icons/pi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import useGlobalStore from "../hooks/useGlobalStore";

import Vue from "@/public/icons/Vue";
import React from "@/public/icons/React";
import Next from "@/public/icons/Next";
import Javascript from "@/public/icons/Javascript";
import Php from "@/public/icons/Php";
import Python from "@/public/icons/Python";
import Java from "@/public/icons/Java";
import Typescript from "@/public/icons/Typescript";
import Laravel from "@/public/icons/Laravel";
import Three from "@/public/icons/Three.js";
import Django from "@/public/icons/Django";
import SpringBoot from "@/public/icons/SpringBoot";
import { FaGithubAlt, FaExternalLinkAlt } from "react-icons/fa";

import { Badge } from "@/components/ui/badge";

export default function Home() {
  const setPreviewLink = useGlobalStore((state) => state.setPreviewLink);

  const handlePreviewClick = (link: string) => {
    setPreviewLink(link);
  };

  return (
    <main className="flex flex-col min-h-screen max-w-7xl items-center mx-auto justify-center md:justify-between">
      {/* /HERO------------------------------------------------------------/ */}
      <div className="flex flex-col flex-col-reverse md:flex-row items-center h-screen justify-center">
        <div className="flex flex-col gap-5 md:w-1/3">
          <h1 className="md:text-left text-center font-bold text-3xl md:text-5xl whitespace-nowrap">
            Lyonel Pierce
          </h1>
          <span className="text-center font-medium md:whitespace-nowrap">
            Full Stack Developer | Web Designer | Graphic Designer
          </span>
          <Button
            variant="outline"
            className="mx-auto md:mx-0 w-1/2 uppercase font-bold text-base py-6 text-[#f66e4c] hover:text-[#303030]"
          >
            Get in touch
          </Button>
        </div>
        <div className="flex justify-center md:w-2/3 w-full relative">
          <img
            src="/splash.svg"
            className="w-full h-[32rem] md:h-screen -z-10"
            alt="Hero"
          />
          <div className="absolute w-full h-full">
            <Canvas
              shadows
              gl={{ antialias: true }}
              camera={{ position: [5, 2, 11], fov: 35 }}
              className="cursor-pointer"
            >
              <Experience />
            </Canvas>
          </div>
        </div>
      </div>

      {/* /CARDS ------------------------------------------------------------/ */}
      <div className="w-full h-screen md:h-[32rem] flex">
        <ul className="flex flex-col md:flex-row gap-5 w-full items-center justify-center">
          <li className="bg-[#303030] rounded-xl shadow-2xl w-full md:w-1/3 stats-item">
            <Link
              href="#experience"
              className="flex justify-between items-center p-10"
            >
              <LiaAwardSolid
                size={60}
                className="bg-white text-black rounded-full p-2"
              />
              <div className="text-center">
                <p className="text-3xl font-semibold text-[#f66e4c]">5+</p>
                <span className="font-semibold">Years of Experience</span>
              </div>
              <FiChevronRight size={20} />
            </Link>
          </li>
          <li className="bg-[#303030] rounded-xl shadow-2xl w-full md:w-1/3 stats-item">
            <Link
              href="#experience"
              className="flex justify-between items-center p-10"
            >
              <PiProjectorScreenChart
                size={60}
                className="bg-[#f66e4c] text-white rounded-full p-2"
              />
              <div className="text-center">
                <p className="text-3xl font-semibold text-[#f66e4c]">30+</p>
                <span className="font-semibold">Completed Projects</span>
              </div>
              <FiChevronRight size={20} />
            </Link>
          </li>
          <li className="bg-[#303030] rounded-xl shadow-2xl w-full md:w-1/3 stats-item">
            <Link
              href="#experience"
              className="flex justify-between items-center p-10"
            >
              <PiUsersThreeLight
                size={60}
                className="bg-[#1f1f1f] text-white rounded-full p-2"
              />
              <div className="text-center">
                <p className="text-3xl font-semibold text-[#f66e4c]">15+</p>
                <span className="font-semibold">Happy Clients</span>
              </div>
              <FiChevronRight size={20} />
            </Link>
          </li>
        </ul>
      </div>

      {/* /ABOUT ------------------------------------------------------------/ */}
      <div
        id="about"
        className="flex md:flex-row flex-col justify-between items-center gap-32"
      >
        <div className="md:w-1/2 w-full relative">
          <img src="/blob.svg" className="w-full h-full -z-10" alt="Hero" />
          <div className="absolute top-0 w-full h-full">
            <Canvas
              shadows
              gl={{ antialias: true }}
              camera={{ position: [5, 2, 11], fov: 35 }}
              className="cursor-pointer"
            >
              <HeadExperience />
            </Canvas>
          </div>
        </div>
        <div className="md:w-1/2 w-full flex flex-col md:flex-row md:gap-8">
          <div className="">
            <div className="uppercase text-lg whitespace-nowrap font-semibold md:-rotate-90 md:flex flex-col md:flex-row-reverse items-center w-2.5">
              About me
              <div className="md:absolute md:left-1/2 mx-8 md:mx-0 md:-ml-36 w-0.5 h-16 bg-white -rotate-90 mt-[-1.8rem] md:mt-0"></div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="about-item">
              <h2 className="text-3xl font-bold">Need a Web Application?</h2>
              <h2 className="text-3xl font-bold mb-6">I can Help You!</h2>
            </div>
            <p className="text-base text-white leading-relaxed leading-loose text-md">
              Hi! I’m Lyonel Pierce, I’m a Full Stack Developer, Web Designer,
              and Graphic Designer who has passion for building creative and
              functional web applications with intuitive functionality. I enjoy
              the process of coding, and turning ideas into reality using
              creative solutions. I’m always curious about learning new skills,
              tools, and concepts. In addition to working on various solo
              projects, I have worked with creative teams, which involves daily
              stand-ups, communications, version control, and project
              management.
            </p>
            <div className="flex gap-5 md:flex-row flex-col mt-8">
              <Button className="bg-[#f66e4c] text-base py-6 px-5 rounded-lg font-bold uppercase text-white hover:bg-white hover:text-orange-600">
                Hire Me
              </Button>
              <Link
                href="https://lyonelpierce.com/assets/RESUME.pdf"
                target="_blank"
              >
                <Button
                  className="w-full py-6 text-base uppercase font-bold border-0 ring-1 ring-white ring-inset hover:bg-white hover:text-[#303030]"
                  variant="outline"
                >
                  Download Resume
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* /SKILLS ------------------------------------------------------------/ */}
      <div
        id="skills"
        className="flex md:flex-row flex-col justify-between items-center my-48"
      >
        <Tabs defaultValue="skills" className="md:flex gap-32">
          <div className="md:w-1/2 w-full flex flex-col md:flex-row md:gap-8">
            <div className="">
              <div className="uppercase text-lg whitespace-nowrap font-semibold md:-rotate-90 md:flex flex-col md:flex-row-reverse items-center w-2.5">
                My skills
                <div className="md:absolute md:left-1/2 mx-8 md:mx-0 md:-ml-36 w-0.5 h-16 bg-white -rotate-90 mt-[-1.8rem] md:mt-0"></div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="about-item">
                <h2 className="text-3xl font-bold capitalize">What do my?</h2>
                <h2 className="text-3xl font-bold mb-6 capitalize">
                  Skills include
                </h2>
              </div>
              <p className="text-base text-white leading-relaxed leading-loose text-md">
                Experienced web application developer specializing in creating
                visually appealing and functional web solutions using a diverse
                range of design and web technologies.
              </p>
              <div className="flex gap-5 md:flex-row flex-col mt-8 items-center">
                <TabsList className="w-fit">
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                  <TabsTrigger value="tools">Tools</TabsTrigger>
                </TabsList>
              </div>
            </div>
          </div>
          <div className="flex items-center md:w-1/2 w-full">
            <TabsContent value="skills">
              <ul className="grid grid-rows-2 grid-cols-6 gap-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <li className="bg-[#303030] rounded-md w-fit p-5 shadow-2xl cursor-help">
                        <Javascript width={50} height={50} />
                      </li>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Javascript</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <li className="bg-[#303030] rounded-md w-fit p-5 shadow-2xl cursor-help">
                  <Php width={50} height={50} />
                </li>
                <li className="bg-[#303030] rounded-md w-fit p-5 shadow-2xl cursor-help">
                  <Python width={50} height={50} />
                </li>
                <li className="bg-[#303030] rounded-md w-fit p-5 shadow-2xl cursor-help">
                  <Java width={50} height={50} />
                </li>
                <li className="bg-[#303030] rounded-md w-fit p-5 shadow-2xl cursor-help">
                  <Typescript width={50} height={50} />
                </li>
                <li className="bg-[#303030] rounded-md w-fit p-5 shadow-2xl cursor-help">
                  <React width={50} height={50} />
                </li>
                <li className="bg-[#303030] rounded-md w-fit p-5 shadow-2xl cursor-help">
                  <Next width={50} height={50} fill={"#fff"} />
                </li>
                <li className="bg-[#303030] rounded-md w-fit p-5 shadow-2xl cursor-help">
                  <Vue width={50} height={50} />
                </li>
                <li className="bg-[#303030] rounded-md w-fit p-5 shadow-2xl cursor-help">
                  <Laravel width={50} height={50} />
                </li>
                <li className="bg-[#303030] rounded-md w-fit p-5 shadow-2xl cursor-help">
                  <Three width={50} height={50} stroke={"#fff"} />
                </li>
                <li className="bg-[#303030] rounded-md w-fit p-5 shadow-2xl cursor-help">
                  <Django width={50} height={50} />
                </li>
                <li className="bg-[#303030] rounded-md w-fit p-5 shadow-2xl cursor-help">
                  <SpringBoot width={50} height={50} />
                </li>
              </ul>
            </TabsContent>
            <TabsContent value="tools">Change your password here.</TabsContent>
          </div>
        </Tabs>
      </div>

      {/* /PORTFOLIO ------------------------------------------------------------/ */}
      <div
        id="portfolio"
        className="flex md:flex-col justify-between items-center w-full relative"
      >
        <div className="about-item text-center ">
          <p className="uppercase font-semibold text-lg">My Works</p>
          <h2 className="text-3xl font-bold capitalize">See my work which</h2>
          <h2 className="text-3xl font-bold mb-6 capitalize">
            will amaze you!
          </h2>
        </div>
        {/* Canvas */}
        <div className="md:w-full relative">
          <img src="/blob.svg" className="w-full h-full -z-10" alt="Hero" />
          <div className="absolute top-0 w-full h-full">
            <Canvas camera={{ position: [-5, 0, -15], fov: 55 }}>
              <PortfolioExperience />
            </Canvas>
          </div>
        </div>

        {/* Image container */}
        <div className="flex gap-4 absolute bottom-10 mx-auto">
          <div
            className="bg-[#303030] rounded-md shadow-2xl p-2 cursor-pointer hover:ring-2 hover:ring-[#f66e4c]"
            onClick={() => handlePreviewClick("https://lyonelpierce.com/")}
          >
            <Image
              src="/gallery/portfolio.gif"
              alt="Inkspire"
              width={160}
              height={70}
              className="rounded-md"
            />
            <div className="my-2 text-sm text-center">
              <h3 className="font-semibold">Wepception</h3>
              <p>Personal Portfolio</p>
            </div>
            <div className="flex justify-around my-1">
              <Link
                href="https://github.com/lyonelpierce/Portfolio-React-Next"
                target="_blank"
              >
                <FaGithubAlt className="hover:text-[#f66e4c]" />
              </Link>
            </div>
          </div>
          <div
            className="bg-[#303030] rounded-md shadow-2xl p-2 cursor-pointer hover:ring-2 hover:ring-[#f66e4c]"
            onClick={() => handlePreviewClick("https://inkspireai.com/")}
          >
            <Image
              src="/gallery/Inkspire.webp"
              alt="Inkspire"
              width={160}
              height={70}
              className="rounded-md"
            />
            <div className="my-2 text-sm text-center">
              <h3 className="font-semibold">Inkspire</h3>
              <p>AI Tattoo Generator</p>
            </div>
            <div className="flex justify-around my-1">
              <Link
                href="https://github.com/lyonelpierce/Inkspire"
                target="_blank"
              >
                <FaGithubAlt className="hover:text-[#f66e4c]" />
              </Link>
              <Link href="https://inkspireai.com" target="_blank">
                <FaExternalLinkAlt className="hover:text-[#f66e4c]" />
              </Link>
            </div>
          </div>
          <div
            className="bg-[#303030] rounded-md shadow-2xl p-2 cursor-pointer relative hover:ring-2 hover:ring-[#f66e4c]"
            onClick={() => handlePreviewClick("https://loremachine.world/")}
          >
            <Badge className="-mt-4 absolute left-1/2 transform -translate-x-1/2">
              Contract
            </Badge>
            <Image
              src="/gallery/Inkspire.webp"
              alt="Inkspire"
              width={160}
              height={70}
              className="rounded-md"
            />
            <div className="my-2 text-sm text-center">
              <h3 className="font-semibold">Lore Machine</h3>
              <p>AI Storytelling</p>
            </div>
            <div className="flex justify-around my-1">
              <Link href="https://loremachine.world/" target="_blank">
                <FaExternalLinkAlt className="hover:text-[#f66e4c]" />
              </Link>
            </div>
          </div>
          <div
            className="bg-[#303030] rounded-md shadow-2xl p-2 cursor-pointer hover:ring-2 hover:ring-[#f66e4c]"
            onClick={() =>
              handlePreviewClick("https://pawsome.up.railway.app/")
            }
          >
            <Image
              src="/gallery/pawsome.webp"
              alt="Inkspire"
              width={160}
              height={70}
              className="rounded-md"
            />
            <div className="my-2 text-sm text-center">
              <h3 className="font-semibold">Pawsome</h3>
              <p>Pet Adoption Center</p>
            </div>
            <div className="flex justify-around my-1">
              <Link
                href="https://github.com/lyonelpierce/PetAdoptionCenter"
                target="_blank"
              >
                <FaGithubAlt className="hover:text-[#f66e4c]" />
              </Link>
              <Link href="https://pawsome.up.railway.app/" target="_blank">
                <FaExternalLinkAlt className="hover:text-[#f66e4c]" />
              </Link>
            </div>
          </div>
          <div
            className="bg-[#303030] rounded-md shadow-2xl p-2 cursor-pointer hover:ring-2 hover:ring-[#f66e4c]"
            onClick={() =>
              handlePreviewClick("https://ring-customizer.up.railway.app/")
            }
          >
            <Image
              src="/gallery/ring.gif"
              alt="Inkspire"
              width={160}
              height={70}
              className="rounded-md"
            />
            <div className="my-2 text-sm text-center">
              <h3 className="font-semibold">Jewelry</h3>
              <p>3D Ring Configurator</p>
            </div>
            <div className="flex justify-around my-1">
              <Link
                href="https://github.com/lyonelpierce/Ring-Customizer"
                target="_blank"
              >
                <FaGithubAlt className="hover:text-[#f66e4c]" />
              </Link>
              <Link
                href="https://ring-customizer.up.railway.app/"
                target="_blank"
              >
                <FaExternalLinkAlt className="hover:text-[#f66e4c]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
