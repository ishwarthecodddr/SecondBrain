import { Share2 } from 'lucide-react';
import { CiTwitter, CiYoutube } from 'react-icons/ci';
import { LuBrain } from "react-icons/lu";

export const Landing = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-opacity-50 bg-black">
        <a className="flex items-center justify-center" href="/">
          <div className='text-3xl text-pink-300'>
            <LuBrain />
          </div>
          <span className="ml-2 text-2xl font-bold font-serif">Brainly</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            How It Works
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Your Digital Brain for Social Content
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  Store, organize, and share your favorite YouTube videos and tweets with Brainly. Never lose track of inspiring content again.
                </p>
              </div>
              <div className="space-x-4">
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-white text-black hover:bg-gray-200 h-10 py-2 px-4" onClick={() => {
                  window.location.href = '/signup';
                }}>
                  Get Started
                </button>
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-white hover:bg-white hover:text-black h-10 py-2 px-4">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Key Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-3 text-center">
                <CiYoutube className="h-12 w-12 text-red-600" />
                <h3 className="text-xl font-bold">YouTube Integration</h3>
                <p className="text-gray-200">Save and organize your favorite YouTube videos in one place.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <CiTwitter className="h-12 w-12 text-blue-400" />
                <h3 className="text-xl font-bold">Tweet Storage</h3>
                <p className="text-gray-200">Capture and categorize tweets for easy reference later.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <Share2 className="h-12 w-12 text-green-500" />
                <h3 className="text-xl font-bold">Easy Sharing</h3>
                <p className="text-gray-200">Share your curated content with friends and colleagues effortlessly.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              How It Works
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-lg border bg-white text-black shadow-sm">
                <div className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-gray-100 p-3">
                    <span className="text-4xl font-bold">1</span>
                  </div>
                  <h3 className="text-2xl font-bold">Connect</h3>
                  <p className="text-gray-500">Link your YouTube and Twitter accounts to Brainly.</p>
                </div>
              </div>
              <div className="rounded-lg border bg-white text-black shadow-sm">
                <div className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-gray-100 p-3">
                    <span className="text-4xl font-bold">2</span>
                  </div>
                  <h3 className="text-2xl font-bold">Collect</h3>
                  <p className="text-gray-500">Save videos and tweets with a single click.</p>
                </div>
              </div>
              <div className="rounded-lg border bg-white text-black shadow-sm">
                <div className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-gray-100 p-3">
                    <span className="text-4xl font-bold">3</span>
                  </div>
                  <h3 className="text-2xl font-bold">Share</h3>
                  <p className="text-gray-500">Organize and share your curated content easily.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Organize Your Digital Life?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  Join Brainly today and start collecting, organizing, and sharing your favorite online content.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <button className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-white text-black hover:bg-gray-200 h-10 py-2 px-4 " >
                  Sign Up Now
                </button>
                <p className="text-xs text-gray-200">
                  No credit card required. Start your free trial today.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200 bg-opacity-50 bg-black">
        <p className="text-xs text-gray-200">© 2024 Brainly. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
}

