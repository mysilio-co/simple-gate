import Head from 'next/head'
import Image from 'next/image';
import { Logo } from '../components/logo';
import { SubscribeIcon, FacebookIcon, InstagramIcon, TwitterIcon,
         EditIcon, LinkIcon, GithubIcon, DribbleIcon } from '../components/icons' 

let headerImage = "http://picsum.photos/1360/544";
let profileImage = "http://picsum.photos/176/176";
let articleImage = "http://picsum.photos/456/384";
let profileLinkImage = "http://picsum.photos/280/288";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Mysilio Gate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col overflow-hidden items-center w-full flex-1 text-center">
        <div className="flex flex-row relative items-stretch w-screen h-96"> 
          <Image className="z-0 object-cover h-96" src={headerImage} alt="forest" layout="fill" /> 
        </div>
        <div className="flex flex-col w-7/12 text-left -mt-20 bg-white rounded-2xl shadow z-20 py-12 px-14 pl-20">
          <div className="flex absolute -ml-52 -mt-6 rounded-full border-white border-8 shadow-lg">
            <Image className="z-0 rounded-full" src={profileImage} width="176" height="176"/> 
          </div>
          <h1 className="ml-2 text-6xl font-bold text-my-green">
            Greetings, Traveler 
          </h1>
          <span className="ml-2 mt-6 text-lg text-left text-gray-400">
          Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames. Dui, amet, nec sit pulvinar.
          </span>
        </div>

        <div className="flex flex-col ml-12 items-center mt-36">
          <div className="flex ml-12 pr-36 pb-44">
            <div className="flex-none">
              <Image className="rounded-2xl" src={articleImage} width="456" height="384"/> 
            </div>
            <div className="flex flex-col m-12 w-3/5 text-left">
              <h3 className="text-3xl font-bold text-gray-500">A list of people I’ll probably never meet whose names I would intentionally mispronounce as a flex </h3>
              <p className="mt-4 text-xl text-gray-400">
              Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.
              </p>
              <div className="py-3 text-gray-400">
                <bold className="text-my-green font-bold">Created</bold> 4/24/21 <bold className="text-my-green font-bold ml-2">Last Edited</bold> 4:22 PM 5/19/21
              </div>
              <button className="flex flex-row mt-4 w-36 pl-4 pt-4 py-2 rounded border border-my-green text-center text-my-green">
                Read More <LinkIcon className="ml-2 -mt-1 h-8"/>
              </button>
            </div>
          </div>
          <div className="flex ml-12 pr-36 pb-44">
            <div className="flex flex-col m-12 w-3/5 text-left">
              <h3 className="text-3xl font-bold text-gray-500">A list of people I’ll probably never meet whose names I would intentionally mispronounce as a flex </h3>
              <p className="mt-4 text-xl text-gray-400">
              Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.
              </p>
              <div className="py-3 text-gray-400">
                <bold className="text-my-green font-bold">Created</bold> 4/24/21 <bold className="text-my-green font-bold ml-2">Last Edited</bold> 4:22 PM 5/19/21
              </div>
              <button className="flex flex-row mt-4 w-36 pl-4 pt-4 py-2 rounded border border-my-green text-center text-my-green">
                Read More <LinkIcon className="ml-2 -mt-1 h-8"/>
              </button>
            </div>
            <div className="flex-none">
              <Image className="rounded-2xl" src={articleImage} width="456" height="384"/> 
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-my-green text-white w-screen items-left text-left mt-16 items-center">
          <div className="flex flex-col p-14 w-3/5">
            <h1 className="text-5xl font-bold">
              Check out my other shit 
            </h1>
            <span className="text-sm mt-4 opacity-80">
            Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames. Dui, amet, nec sit pulvinar.
            </span>
            <button className="flex flex-row mt-10 px-6 pt-4 py-1.5 text-center w-40 rounded-full border-2 bg-white bg-opacity-20">
              Subscribe <SubscribeIcon className="ml-2 -mt-1 h-10"/> 
            </button>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col justify-around ml-6 h-xl sm:w-full">
              <div className="flex">
                <Image className="rounded-xl z-0" src={profileLinkImage} width="280" height="288"/> 
              </div>
              <div className="-mt-20 py-4 z-10 font-bold bg-white bg-opacity-5 backdrop-blur-sm">
                <h3 className="text-2xl ml-8">My Etsy Store</h3>
              </div>
              <div className="bg-white rounded-b-xl text-my-green z-10 text-left p-3 w-full">
                <a
                  href="https://nextjs.org/docs"
                  className="ml-5">
                Visit → 
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-around ml-6 h-xl sm:w-full">
              <div className="flex">
                <Image className="rounded-xl z-0" src={profileLinkImage} width="280" height="288"/> 
              </div>
              <div className="-mt-20 py-4 z-10 font-bold bg-white bg-opacity-5 backdrop-blur-sm">
                <h3 className="text-2xl ml-8">My Etsy Store</h3>
              </div>
              <div className="bg-white rounded-b-xl text-my-green z-10 text-left p-3 w-full">
                <a
                  href="https://nextjs.org/docs"
                  className="ml-5">
                Visit → 
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-around ml-6 h-xl sm:w-full">
              <div className="flex">
                <Image className="rounded-xl z-0" src={profileLinkImage} width="280" height="288"/> 
              </div>
              <div className="-mt-20 py-4 z-10 font-bold bg-white bg-opacity-5 backdrop-blur-sm">
                <h3 className="text-2xl ml-8">My Etsy Store</h3>
              </div>
              <div className="bg-white rounded-b-xl text-my-green z-10 text-left p-3 w-full">
                <a
                  href="https://nextjs.org/docs"
                  className="ml-5">
                Visit → 
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-around ml-6 h-xl sm:w-full">
              <div className="flex">
                <Image className="rounded-xl z-0" src={profileLinkImage} width="280" height="288"/> 
              </div>
              <div className="-mt-20 py-4 z-10 font-bold bg-white bg-opacity-5 backdrop-blur-sm">
                <h3 className="text-2xl ml-8">My Etsy Store</h3>
              </div>
              <div className="bg-white rounded-b-xl text-my-green z-10 text-left p-3 w-full">
                <a
                  href="https://nextjs.org/docs"
                  className="ml-5">
                Visit → 
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-row p-24">
            <div className="h-12 w-12 ml-12 transform scale-150">
              <FacebookIcon /> 
            </div>
            <div className="h-12 w-12 ml-12 transform scale-150">
              <InstagramIcon /> 
            </div>
            <div className="h-12 w-12 ml-12 transform scale-150">
              <TwitterIcon /> 
            </div>
            <div className="h-12 w-12 ml-12 transform scale-150">
              <GithubIcon /> 
            </div>
            <div className="h-12 w-12 ml-12 transform scale-150">
              <DribbleIcon /> 
            </div>
          </div>
          <footer className="flex items-center justify-center text-white p-10 bg-white bg-opacity-10 backdrop-blur-sm w-full">
            <Logo className="h-16"/>
            <a
              className="flex ml-5 items-center justify-center font-bold text-xl"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by Mysilio
            </a>
            <button className="flex flex-row pt-4 text-center ml-5 py-2 px-6 rounded-full border-2 bg-white bg-opacity-20">
              Start Building Now <EditIcon  className="ml-2 -mt-1 h-9"/>
            </button>
          </footer>
        </div>
      </main>

    </div>
  )
}
