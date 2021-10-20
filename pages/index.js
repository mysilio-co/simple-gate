import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Mysilio Gate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 pb-40 text-center">
        <h1 className="text-6xl font-bold">
          Greetings, Traveler 
        </h1>
        <span className="text-sm">
        Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames. Dui, amet, nec sit pulvinar.
        </span>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">A list of people I’ll probably never meet whose names I would intentionally mispronounce as a flex </h3>
            <p className="mt-4 text-xl">
            Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.
            </p>
            <>
            Created 4/24/21 Last Edited 4:22 PM 5/19/21
            </>
            <button className="">
              Read More
            </button>
          </a>
        </div>
        <div className="flex flex-col text-left mt-16">
          <h1 className="text-5xl font-bold">
            Check out my other shit 
          </h1>
          <span className="text-sm">
          Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames. Dui, amet, nec sit pulvinar.
          </span>
          <button className="">
            Subscribe
          </button>
          <>
            <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
              <a
                href="https://nextjs.org/docs"
                className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
              >
                <h3 className="text-2xl font-bold">My Etsy Store</h3>
                <button className="">
                 Visit 
                </button>
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
              <a
                href="https://nextjs.org/docs"
                className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
              >
                <h3 className="text-2xl font-bold">My Amazon Wishlist</h3>
                <button className="">
                 Visit 
                </button>
              </a>
            </div>
          </>
          <>
            facebook insta twitta github dribble
          </>
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
