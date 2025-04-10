import Assistant from "@/components/agent/assistant";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex overflow-hidden flex-col items-center bg-linear-to-tr from-[#64C130] to-[#0CABEC]  justify-center h-screen p-2 sm:p-8 lg:p-12 relative">
      <SignedIn>
        <Assistant />
      </SignedIn>
      <SignedOut>
        <div className="flex bg-white rounded-md w-full  flex-col items-center justify-center h-screen">
          <p className="text-2xl font-bold mb-8">Agent Testing</p>
          <div className="flex flex-col border h-12  rounded-md hover:border-green-500 hover:bg-green-100 hover:text-green-700 items-center text-xl justify-center px-12">
            <SignInButton />
          </div>
        </div>
      </SignedOut>
    </div>
  );
}
