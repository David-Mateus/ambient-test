import Image from "next/image";
import Link from "next/link";
export default function SignUp() {
  return (
    <>
      <div className="h-screen w-screen justify-center bg-gray-300 flex items-center bg-gradient-to-r from-gray-300 to-blue-200">
        <div class="w-80">
          <div className="flex justify-center items-center -mt-14 mb-4">
            <Link href="/">
              <Image
                src="img/ilustracao.png"
                alt="Picture of the author"
                width={70}
                height={70}
              />
            </Link>
          </div>

          <div class="bg-white shadow-md rounded-md p-6 space-y-3">
            <form>
              <div class="flex flex-row items-center justify-center lg:justify-start mb-4">
                <p class=" mb-0 mr-4 text-lg">Sign up</p>
              </div>
              <div>
                <label for="email" class="block text-sm  text-gray-700 mb-1">
                  First name
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  class="w-full mt-1 bg-gray-50 border border-gray-300 rounded px-2 py-1 text-sm text-gray-800 
                placeholder-gray-300 focus:outline-none focus:shadow-outline-blue focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-500 ease-in-out "
                />
              </div>
              <div>
                <label for="email" class="block text-sm  text-gray-700 mb-1">
                  Last name
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  class="w-full mt-1 bg-gray-50 border border-gray-300 rounded px-2 py-1 text-sm text-gray-800 
                placeholder-gray-300 focus:outline-none focus:shadow-outline-blue focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-500 ease-in-out "
                />
              </div>
              
              <div>
                <label for="email" class="block text-sm  text-gray-700 mb-1">
                  Email address
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  class="w-full mt-1 bg-gray-50 border border-gray-300 rounded px-2 py-1 text-sm text-gray-800 
                placeholder-gray-300 focus:outline-none focus:shadow-outline-blue focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-500 ease-in-out "
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block text-sm  text-gray-700 mb-1 "
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  class="w-full mt-2 bg-gray-50 border border-gray-300 rounded px-2 py-1  text-sm text-gray-800placeholder-gray-300 focus:outline-none focus:shadow-outline-blue focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-500 ease-in-out "
                />
              </div>
              <div class="text-right mb-4">
                <a href="" class="text-sm text-blue-400 hover:underline">
                  Forgot password?
                </a>
              </div>
              <div>
                <button class="w-full bg-blue-400 border border-gray-300 hover:bg-blue-500 hover:text-white hover:border-gray-100 px-4 py-1 rounded text-white shadow">
                  Criar conta
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
