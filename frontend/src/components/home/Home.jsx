import React from 'react';
import home from '../img/home.png';

function Home() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="lg:col-span-7 lg:pr-8" style={{marginTop:'4rem'}}>
            <div className="place-self-center lg:mt-10">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Learn , Certify , and Master ASL Online
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Master American Sign Language through interactive lessons, real-time practice, and earn recognized certifications to showcase your communication proficiency.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                style={{ backgroundColor: 'blue' }}
              >
                Get started
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 mt-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 lg:mt-0"
              >
                Speak to Sales
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 lg:mt-8">
            <div className="flex justify-center lg:justify-end" style={{height:'120%',width:'110%'}}>
              <img
                src={home}
                alt="mockup"
                className="max-w-full h-auto lg:max-h-full lg:max-w-none"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
