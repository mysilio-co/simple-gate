import Head from 'next/head'
import Image from 'next/image';
let headerImage = "http://picsum.photos/1360/544";
let profileImage = "http://picsum.photos/176/176";
let articleImage = "http://picsum.photos/456/384";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Mysilio Gate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center w-full flex-1 text-center">
        <div className="flex flex-row relative items-stretch w-screen h-96"> 
          <Image className="z-0 object-cover h-96" src={headerImage} alt="forest" layout="fill" /> 
        </div>
        <div className="flex flex-col w-7/12 text-left -mt-20 bg-white rounded-2xl shadow  z-20  py-12 px-14 pl-20">
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
              <button className="mt-4  w-36 py-2 rounded border border-my-green text-center text-my-green">
                Read More
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
              <button className="mt-4  w-36 py-2 rounded border border-my-green text-center text-my-green">
                Read More
              </button>
            </div>
            <div className="flex-none">
              <Image className="rounded-2xl" src={articleImage} width="456" height="384"/> 
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-my-green text-white w-screen items-left text-left mt-16 items-center">
          <div className="flex flex-col p-14 max-w-4xl">
            <h1 className="text-5xl font-bold">
              Check out my other shit 
            </h1>
            <span className="text-sm mt-4 opacity-80">
            Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames. Dui, amet, nec sit pulvinar.
            </span>
            <button className="text-left mt-6">
              Subscribe
            </button>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-wrap items-center justify-around ml-6 h-xl sm:w-full">
              <a
                href="https://nextjs.org/docs"
                className="p-6 mt-6 text-left border w-72 rounded-xl hover:text-blue-600 focus:text-blue-600"
              >
                <h3 className="text-2xl font-bold">My Etsy Store</h3>
                <button className="">
                 Visit 
                </button>
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-around max-w-4xl ml-6 sm:w-full">
              <a
                href="https://nextjs.org/docs"
                className="p-6 mt-6 text-left border w-72 rounded-xl hover:text-blue-600 focus:text-blue-600"
              >
                <h3 className="text-2xl font-bold">My Amazon Wishlist</h3>
                <button className="">
                 Visit 
                </button>
              </a>
            </div>
          </div>
          <div className="flex flex-row p-20">
            facebook insta twitta github dribble
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Mysilio
        </a>
        <button>
          Start Building Now
        </button>
      </footer>
    </div>
  )
}
