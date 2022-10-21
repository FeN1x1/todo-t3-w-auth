import { signIn, signOut, useSession } from "next-auth/react";

const Header: React.FC = () => {
  const { data: session } = useSession();
  return (
    <div className="mx-auto max-w-lg px-4 py-5 md:px-24 lg:px-8">
      <div className="relative grid grid-cols-2 items-center lg:grid-cols-2">
        <div className="inline-flex">
          <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[2rem]">
            Create <span className="text-purple-300">T3</span> App
            <span className="text-purple-300"> TODO</span>
          </h1>
        </div>
        <ul className="ml-auto hidden space-x-8 lg:flex">
          {!session ? (
            <li>
              <div
                onClick={() => signIn("google")}
                className="cursor-pointer font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
              >
                Sign In /w Google
              </div>
            </li>
          ) : (
            <li>
              <div
                onClick={() => signOut()}
                className="cursor-pointer font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
              >
                Sign Out
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
