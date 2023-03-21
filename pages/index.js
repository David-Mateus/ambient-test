import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="h-screen bg-gradient-to-r from-gray-300 to-blue-200">
        {/* NavBar - Componente - 1 */}
        <div className="  flex justify-between">
          <div className="flex flex-row ml-40 mt-12">
            <div>
              <Image src="/img/icons.png" width={50} height={50} alt="Logo" />
            </div>
            <div>
              <h1 className="text-5xl text-gray-700 font-bold">
                Find<span className="text-blue-400">.</span>y
              </h1>
            </div>
          </div>
          <div>
            <Image src="/img/circle.png" width={150} height={150} alt="Hero" />
          </div>
        </div>
        {/* /NavBar */}

        {/* Section */}
        <div className="container  md-auto ">
          <div className="flex space-x-28">
            {/* Image */}
            <div className="flex-shrink -mt-16">
              <Image
                src="/img/Ilustracao.png"
                width={500}
                height={500}
                alt="ilustração"
              />
            </div>

            {/* Text and checkout login */}
            <div className=" space-y-3">
              <h1 className="text-gray-700  font-bold text-4xl ">
                Findy ajudando voce a <br /> enccontra algo que ama.
              </h1>
              <p className="text-gray-500  text-base">
                “São Longuinho, São Longuinho,
                <br /> se eu achar...” Vamos lá
              </p>
              <div>
                <Link href="/signIn">
                <button class=" mt-11  relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-0 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span class="flex px-10 py-2 transition-all ease-in duration-75 bg-gray-200 text-gray-800 text-base rounded group-hover:bg-opacity-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                    Sign in
                  </span>
                </button>
                </Link>
                <Link href="/signUp">
                  <button class="relative  inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white   focus:ring-0 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                    <span class="flex px-10 py-2  transition-all ease-in duration-75group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-gray-800  focus:ring-0 focus:outline-none focus:ring-cyan-200  text-base rounded group-hover:bg-opacity-0 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                        />
                      </svg>
                      Sign up
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* /Section */}
      </div>
    </>
  );
}
