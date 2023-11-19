padding: 0;
import React, { useState, useEffect } from "react";
import Tab from "../Tab/Tab";
import Image from "next/image";
import Catering from "@/public/images/Catering.jpg";
import SocialMedia from "@/public/images/SocialMedia.jpg";
import Lottery from "@/public/images/Lottery.jpg";
import Netflix from "@/public/images/Netflix.jpg";
import TicTac from "@/public/images/TicTac.jpg";
import CssIcon from "@/public/icons/CssIcon.svg";
import ReactIcon from "@/public/icons/ReactIcon.svg";
import NextIcon from "@/public/icons/NextIcon.svg";
import JavascriptIcon from "@/public/icons/JavascriptIcon.svg";
import HtmlIcon from "@/public/icons/HtmlIcon.svg";
import SqlIcon from "@/public/icons/MysqlIcon.svg";
import PostgresIcon from "@/public/icons/PostgresIcon.svg";
import SolidityIcon from "@/public/icons/SolidityIcon.svg";
import PhpIcon from "@/public/icons/PhpIcon.svg";
import TailwindIcon from "@/public/icons/TailwindIcon.svg";
import HardhatIcon from "@/public/icons/HardhatIcon.svg";
import OpenLink from "@/public/icons/OpenLink.svg";
import Whatsapp from "@/public/images/Whatsapp.jpg";
import ProjectCard from "../Cards/ProjectCard";
import Link from "next/link";
import {
  CATERING_PROJECT,
  LOTTERY_PROJECT,
  NETFLIX_PROJECT,
  SOCIAL_MEDIA_PROJECT,
  TIC_TAC_PROJECT,
  WHATSAPP_PROJECT,
} from "@/public/constants/constants";

type Props = {};

const TABS = ["All", "Front-End", "Web3", "Full Stack"];

const Projects = (props: Props) => {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [clicked, setClicked] = useState(false);

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
    if (!clicked) setClicked(true);
  };

  const TicTacContent = () => (
    <div className="relative w-full h-full">
      <Image
        src={TicTac}
        alt="catering-img"
        className="rounded-lg min-w-[100px] w-full h-full max-w-[600px] object-cover shadow-lg"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-white/80 ">
        <div className="p-6 sm:p-12 flex flex-col gap-2 sm:gap-4">
          <div className="flex items-center gap-2 text-[12px] sm:text-xl font-bold border-b-[1px] border-black w-fit ">
            <p>Tic Tac Toe</p>
            <Link
              href={TIC_TAC_PROJECT}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                className="h-[10px] sm:h-[15px] w-[10px] sm:w-[15px] cursor-pointer"
                src={OpenLink}
                alt="nextjs-icon"
              />
            </Link>
          </div>
          <p className="text-[10px] sm:text-lg max-h-[25vh] sm:max-h-none overflow-y-auto">
            The Tic Tac Toe game is a classic two-player game where players take
            turns marking spaces in a 3x3 grid. The objective is to be the first
            to complete a row, column, or diagonal with their chosen marker
            (either "X" or "O"). The game provides a clean and intuitive user
            interface, with alternating turns, clear win/lose conditions, and an
            option to restart the game.
          </p>

          <div className="flex sm:flex-col gap-2 sm:gap-4">
            <p className="text-[11px] sm:text-lg font-bold">
              Technologies Used :
            </p>
            <div className="flex gap-2 sm:gap-4">
              <Image
                className="h-[20px] sm:h-[30px] w-[20px] sm:w-[30px]"
                src={HtmlIcon}
                alt="html-icon"
              />
              <Image
                className="h-[20px] sm:h-[30px] w-[20px] sm:w-[30px]"
                src={JavascriptIcon}
                alt="js-icon"
              />
              <Image
                className="h-[20px] sm:h-[30px] w-[20px] sm:w-[30px]"
                src={CssIcon}
                alt="css-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const CateringContent = () => (
    <div className="relative">
      <Image
        src={Catering}
        alt="catering-img"
        className="rounded-lg min-w-[100px] w-full max-w-[700px] aspect-square object-cover shadow-lg"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-white/80">
        <div className="p-6 sm:p-12 flex flex-col gap-2 sm:gap-4">
          <div className="flex items-center gap-2 text-[12px] sm:text-xl font-bold border-b-[1px] border-black w-fit ">
            <p>Catering Management System</p>
            <Link
              href={CATERING_PROJECT}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                className="h-[10px] sm:h-[15px] w-[10px] sm:w-[15px] cursor-pointer"
                src={OpenLink}
                alt="nextjs-icon"
              />
            </Link>
          </div>
          <p className="text-[10px] sm:text-lg max-h-[25vh] sm:max-h-none overflow-y-auto">
            The Catering Management System is a comprehensive platform developed
            with PHP for both front-end and back-end, with MySQL serving as the
            backend database. This system facilitates seamless catering
            services, enabling users to purchase and order food items in bulk
            from an extensive range of options. The front-end, powered by PHP,
            offers an intuitive user interface where customers can explore the
            diverse food selections, place orders, and make bulk purchases. The
            back-end, also implemented in PHP, manages the dynamic aspects of
            the platform, handling order processing, inventory management, and
            user authentication. MySQL efficiently stores and retrieves data,
            ensuring the reliability and scalability of the system. This
            Catering Management System amalgamates robust front-end design with
            a feature-rich back-end, providing a user-friendly and efficient
            solution for catering services.
          </p>
          <div className="flex sm:flex-col gap-2 sm:gap-4">
            <p className="text-[11px] sm:text-lg font-bold">
              Technologies Used :
            </p>
            <div className="flex gap-2 sm:gap-4">
              <Image
                className="h-[20px] sm:h-[30px] w-[20px] sm:w-[30px]"
                src={PhpIcon}
                alt="php-icon"
              />
              <Image
                className="h-[20px] sm:h-[30px] w-[20px] sm:w-[30px]"
                src={JavascriptIcon}
                alt="js-icon"
              />
              <Image
                className="h-[20px] sm:h-[30px] w-[20px] sm:w-[30px]"
                src={HtmlIcon}
                alt="html-icon"
              />
              <Image
                className="h-[20px] sm:h-[30px] w-[20px] sm:w-[30px]"
                src={CssIcon}
                alt="css-icon"
              />
              <Image
                className="h-[20px] sm:h-[30px] w-[20px] sm:w-[30px]"
                src={SqlIcon}
                alt="sql-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const SocialMediaContent = () => (
    <div className="relative ">
      <Image
        src={SocialMedia}
        alt="catering-img"
        className="rounded-lg min-w-[100px] w-full max-w-[650px] aspect-square object-cover shadow-lg"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-white/80">
        <div className="p-6 sm:p-12 flex flex-col gap-2 sm:gap-4">
          <div className="flex items-center gap-2 text-[12px] sm:text-xl font-bold border-b-[1px] border-black w-fit ">
            <p>Social Media Platform</p>{" "}
            <Link
              href={SOCIAL_MEDIA_PROJECT}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                className="h-[10px] sm:h-[15px] w-[10px] sm:w-[15px] cursor-pointer"
                src={OpenLink}
                alt="nextjs-icon"
              />
            </Link>
          </div>
          <p className="text-[10px] sm:text-lg max-h-[25vh] sm:max-h-none overflow-y-auto">
            The Social Media Website is a dynamic platform built with React,
            HTML, and CSS for the front end, utilizing PHP to create a robust
            API, and PostgreSQL as the backend database. The project
            incorporates user authentication, profile customization, post
            sharing, a friendship system and private messaging. Its responsive
            design ensures a seamless experience across devices. With a RESTful
            API and scalable architecture, the platform supports a growing user
            base. Future enhancements may include media sharing, real-time
            updates, and advanced search features, reflecting a commitment to
            continual improvement and user satisfaction.
          </p>
          <div className="flex sm:flex-col gap-2 sm:gap-4">
            <p className="text-[11px] sm:text-lg font-bold">
              Technologies Used :
            </p>
            <div className="flex gap-2 sm:gap-4">
              <Image
                className="h-[20px] sm:h-[30px] w-[20px] sm:w-[30px]"
                src={ReactIcon}
                alt="react-icon"
              />
              <Image
                className="h-[20px] sm:h-[30px] w-[20px] sm:w-[30px]"
                src={PhpIcon}
                alt="php-icon"
              />
              <Image
                className="h-[20px] sm:h-[30px] w-[20px] sm:w-[30px]"
                src={JavascriptIcon}
                alt="js-icon"
              />
              <Image
                className="h-[20px] sm:h-[30px] w-[20px] sm:w-[30px]"
                src={HtmlIcon}
                alt="html-icon"
              />
              <Image
                className="h-[20px] sm:h-[30px] w-[20px] sm:w-[30px]"
                src={CssIcon}
                alt="css-icon"
              />
              <Image
                className="h-[20px] sm:h-[30px] w-[20px] sm:w-[30px]"
                src={PostgresIcon}
                alt="postgres-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const NetflixContent = () => (
    <div className="relative ">
      <Image
        src={Netflix}
        alt="catering-img"
        className="rounded-lg min-w-[100px] w-full max-w-[700px] aspect-square object-cover shadow-lg"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-white/80">
        <div className="p-6 sm:p-12 flex flex-col gap-2 sm:gap-4">
          <div className="flex items-center gap-2 text-[12px] sm:text-xl font-bold border-b-[1px] border-black w-fit ">
            <p>Netflix Clone</p>
            <Link
              href={NETFLIX_PROJECT}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                className="h-[10px] sm:h-[15px] w-[10px] sm:w-[15px] cursor-pointer"
                src={OpenLink}
                alt="nextjs-icon"
              />
            </Link>
          </div>
          <p className="text-[10px] sm:text-lg max-h-[25vh] sm:max-h-none overflow-y-auto">
            The Netflix Clone is powered by React and CSS, replicating the
            appearance and user interface of the renowned streaming service. The
            project seamlessly integrates with an external API to dynamically
            fetch and display content, ensuring an up-to-date and authentic user
            experience. Utilizing React components and responsive CSS, the clone
            mimics Netflix's visual design, including features like content
            carousels, genre categorization, and interactive movie or series
            details. The modular structure of React enhances code organization
            and maintainability, while the external API connection facilitates
            real-time updates to the displayed data. This Netflix Clone
            front-end successfully captures the essence of the original
            platform, delivering a visually appealing and responsive interface
            with content sourced from an external API.
          </p>
          <div className="flex sm:flex-col gap-2 sm:gap-4">
            <p className="text-[11px] sm:text-lg font-bold">
              Technologies Used :
            </p>
            <div className="flex gap-2 sm:gap-4">
              <Image
                className="h-[20px] sm:h-[30px] w-[20px] sm:w-[30px]"
                src={ReactIcon}
                alt="react-icon"
              />
              <Image
                className="h-[20px] sm:h-[30px] w-[20px] sm:w-[30px]"
                src={HtmlIcon}
                alt="html-icon"
              />
              <Image
                className="h-[20px] sm:h-[30px] w-[20px] sm:w-[30px]"
                src={CssIcon}
                alt="css-icon"
              />
              <Image
                className="h-[20px] sm:h-[30px] w-[20px] sm:w-[30px]"
                src={JavascriptIcon}
                alt="js-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const WhatsappContent = () => (
    <div className="relative ">
      <Image
        src={Whatsapp}
        alt="catering-img"
        className="rounded-lg min-w-[100px] w-full max-w-[630px] aspect-square object-cover shadow-lg"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-white/80">
        <div className="p-6 sm:p-12 flex flex-col gap-2 sm:gap-4">
          <div className="flex items-center gap-2 text-[12px] sm:text-xl font-bold border-b-[1px] border-black w-fit ">
            <p> Whatsapp Clone</p>{" "}
            <Link
              href={WHATSAPP_PROJECT}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                className="h-[10px] sm:h-[15px] w-[10px] sm:w-[15px] cursor-pointer"
                src={OpenLink}
                alt="nextjs-icon"
              />
            </Link>
          </div>
          <p className="text-[10px] sm:text-lg max-h-[25vh] sm:max-h-none overflow-y-auto">
            The WhatsApp Clone front-end, developed using React and CSS,
            meticulously replicates the user interface of the popular messaging
            application. This project focuses on UI design and layout, mirroring
            WhatsApp's familiar aesthetics. From the chat interface to the
            contact list and group chat visuals, the clone captures the essence
            of WhatsApp without integrating an external API for working
            functionalities. While this version is a static representation, it
            provides a foundation for potential future integration with back-end
            technologies, enabling real-time messaging and dynamic data
            interactions to bring the full WhatsApp experience to life.
          </p>
          <div className="flex sm:flex-col gap-2 sm:gap-4">
            <p className="text-[11px] sm:text-lg font-bold">
              Technologies Used :
            </p>
            <div className="flex gap-2 sm:gap-4">
              <Image
                className="h-[20px] sm:h-[30px] w-[20px] sm:w-[30px]"
                src={ReactIcon}
                alt="react-icon"
              />
              <Image
                className="h-[20px] sm:h-[30px] w-[20px] sm:w-[30px]"
                src={HtmlIcon}
                alt="html-icon"
              />
              <Image
                className="h-[20px] sm:h-[30px] w-[20px] sm:w-[30px]"
                src={CssIcon}
                alt="css-icon"
              />
              <Image
                className="h-[20px] sm:h-[30px] w-[20px] sm:w-[30px]"
                src={JavascriptIcon}
                alt="js-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const LotteryContent = () => (
    <div className="relative ">
      <Image
        src={Lottery}
        alt="catering-img"
        className="rounded-lg min-w-[100px] w-full max-w-[700px] aspect-square object-cover shadow-lg"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-white/80">
        <div className="p-6 sm:p-12 flex flex-col gap-2 sm:gap-4">
          <div className="flex items-center gap-2 text-[12px] sm:text-xl font-bold border-b-[1px] border-black w-fit ">
            <p>Decentralised Lottery</p>{" "}
            <Link
              href={LOTTERY_PROJECT}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                className="h-[10px] sm:h-[15px] w-[10px] sm:w-[15px] cursor-pointer"
                src={OpenLink}
                alt="nextjs-icon"
              />
            </Link>
          </div>
          <p className="text-[10px] sm:text-lg max-h-[25vh] sm:max-h-none overflow-y-auto">
            The Web3 Lottery Project seamlessly integrates Hardhat for smart
            contract development and Next.js for the front-end, creating a
            decentralized lottery system on the Ethereum blockchain. Users
            participate by sending 1 ETH to the contract, and the system
            randomly selects a winner. Developed with Hardhat, the smart
            contract manages the lottery logic and ensures transparency. Next.js
            facilitates the creation of a dynamic and responsive front-end,
            allowing users to interact with the decentralized application (dApp)
            intuitively. This Web3 Lottery Project leverages blockchain
            technology for a secure and transparent lottery experience,
            combining the reliability of Ethereum smart contracts with a
            user-friendly front-end for a seamless lottery participation
            process.
          </p>
          <div className="flex sm:flex-col gap-2 sm:gap-4">
            <p className="text-[11px] sm:text-lg font-bold">
              Technologies Used :
            </p>
            <div className="flex gap-2 sm:gap-4">
              <Image
                className="h-[20px] sm:h-[30px] w-[20px] sm:w-[30px]"
                src={NextIcon}
                alt="nextjs-icon"
              />
              <Image
                className="h-[20px] sm:h-[30px] w-[20px] sm:w-[30px]"
                src={SolidityIcon}
                alt="solidity-icon"
              />
              <Image
                className="h-[20px] sm:h-[30px] w-[20px] sm:w-[30px]"
                src={TailwindIcon}
                alt="tailwind-icon"
              />
              <Image
                className="h-[20px] sm:h-[30px] w-[20px] sm:w-[30px]"
                src={HardhatIcon}
                alt="hardhat-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    let tabInterval: NodeJS.Timeout;

    if (clicked) {
      setTimeout(
        () => {
          tabInterval = setInterval(() => {
            const tabIndex = TABS.lastIndexOf(activeTab);
            const nextTabIndex = (tabIndex + 1) % 4; // Assuming you have 3 tabs

            // Start from the 1st index (skipping 0th index)
            setActiveTab(TABS[nextTabIndex === 0 ? 1 : nextTabIndex]);
          }, 30000);
        } /* Specify your timeout duration here */
      );
    } else {
      tabInterval = setInterval(() => {
        const tabIndex = TABS.lastIndexOf(activeTab);
        const nextTabIndex = (tabIndex + 1) % 4; // Assuming you have 3 tabs

        // Start from the 1st index (skipping 0th index)
        setActiveTab(TABS[nextTabIndex === 0 ? 1 : nextTabIndex]);
      }, 3000);
    }

    return () => {
      clearInterval(tabInterval);
    };
  }, [activeTab, clicked]);

  return (
    <section
      id="projects"
      className="min-h-[70vh] lg:min-h-[30vh] py-20 px-4 relative bg-[#e2e2e2] mt-[-2px]"
    >
      <div className="custom-shape-divider-top-1700232691">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="min-h-[70vh] lg:min-h-[60vh] py-20 w-full flex flex-col justify-center gap-10 animate-div">
        <p className="text-4xl max-w-[1000px] mx-auto w-full">Projects.</p>
        <div className="max-w-[1000px] w-full mx-auto flex gap-2">
          <Tab tabs={TABS} activeTab={activeTab} handleClick={handleTabClick} />
        </div>
        <div className="max-w-[1000px] w-full mx-auto gap-4 sm:gap-10 h-full flex flex-wrap">
          {activeTab == TABS[0] && (
            <>
              <ProjectCard
                setClicked={() => setClicked(true)}
                image={Catering}
                modalBody={CateringContent()}
                classname="animate-div"
              />
              <ProjectCard
                setClicked={() => setClicked(true)}
                image={SocialMedia}
                classname="animate-div"
                modalBody={SocialMediaContent()}
              />
              <ProjectCard
                image={Netflix}
                setClicked={() => setClicked(true)}
                modalBody={NetflixContent()}
                classname="animate-div"
              />
              <ProjectCard
                image={Whatsapp}
                setClicked={() => setClicked(true)}
                modalBody={WhatsappContent()}
                classname="animate-div"
              />
              <ProjectCard
                image={TicTac}
                setClicked={() => setClicked(true)}
                modalBody={TicTacContent()}
                classname="animate-div"
              />
              <ProjectCard
                image={Lottery}
                setClicked={() => setClicked(true)}
                modalBody={LotteryContent()}
                classname="animate-div"
              />
            </>
          )}
          {activeTab == TABS[1] && (
            <>
              <ProjectCard
                image={Netflix}
                setClicked={() => setClicked(true)}
                modalBody={NetflixContent()}
                classname="animate-div"
              />
              <ProjectCard
                image={Whatsapp}
                setClicked={() => setClicked(true)}
                modalBody={WhatsappContent()}
                classname="animate-div"
              />
              <ProjectCard
                image={TicTac}
                setClicked={() => setClicked(true)}
                modalBody={TicTacContent()}
                classname="animate-div"
              />
            </>
          )}
          {activeTab == TABS[2] && (
            <>
              <ProjectCard
                image={Lottery}
                setClicked={() => setClicked(true)}
                modalBody={LotteryContent()}
                classname="animate-div"
              />
            </>
          )}
          {activeTab == TABS[3] && (
            <>
              <ProjectCard
                image={Catering}
                setClicked={() => setClicked(true)}
                modalBody={CateringContent()}
                classname="animate-div"
              />
              <ProjectCard
                image={SocialMedia}
                setClicked={() => setClicked(true)}
                modalBody={SocialMediaContent()}
                classname="animate-div"
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
