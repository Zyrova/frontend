"use client";

import Header from "@/components/header";

export default function IdeaPage() {
  return (
    <div className="">
        <Header />
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 flex items-center justify-center">
      
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-1/4 h-96 w-96 bg-gradient-to-br from-blue-500/10 to-blue-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-20 right-1/4 h-64 w-64 bg-gradient-to-br from-indigo-500/8 to-purple-500/5 blur-[100px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 bg-gradient-to-br from-[#2563EB]/5 to-transparent blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl  text-left">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
          <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            The Idea Behind
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Zyrova
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 leading-relaxed max-w-6xl text-justify">
          Zyrova was born from a simple yet powerful vision: to democratize digital creation and make sophisticated technology accessible to everyone. 
          We believe that great ideas shouldn't be limited by technical barriers, expensive tools, or complex platforms. 
          Our mission is to provide an intuitive ecosystem where creators, entrepreneurs, and businesses can transform their visions 
          into reality without compromise. We're building more than just a platform—we're creating a movement where innovation 
          meets simplicity, where ambition meets accessibility, and where every idea has the potential to become extraordinary. 
          Zyrova is the bridge between imagination and implementation, designed for those who dare to dream and determined to build.
        </p>

        <h1 className="text-4xl font-bold mt-8 mb-8">
          In what way?
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-6xl text-justify">
          Our method is very simple: you can create your business with our advanced components, hooks... Then, to launch it, you will need to download the resource itself, and you decide which server to launch it on (the server is completely independent of Zyrova; you can choose: Hostinger).
        </p>
      </div>
    </div>
    </div>
  );
}