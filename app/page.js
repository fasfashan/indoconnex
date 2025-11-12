export default function LandingPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-[#dde1e6] py-4 px-20 flex items-center justify-between max-w-[1440px] mx-auto">
        <div className="w-40 h-4 font-bold text-red-500">INDOCONNEX</div>

        <nav className="flex gap-4 items-center">
          <a
            href="#"
            className="px-2 py-3 text-[#21272a] text-base font-medium"
          >
            Eleven
          </a>
          <a
            href="#"
            className="px-2 py-3 text-[#21272a] text-base font-medium"
          >
            Twelve
          </a>
          <a
            href="#"
            className="px-2 py-3 text-[#21272a] text-base font-medium"
          >
            Thirteen
          </a>
          <a
            href="#"
            className="px-2 py-3 text-[#21272a] text-base font-medium flex items-center gap-2"
          >
            Sixteen
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 10l5 5 5-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </nav>

        <div className="flex gap-4 items-center">
          <a
            href="/auth/register"
            className="border-2 border-red-500 px-3 py-4 h-12 flex items-center justify-center font-medium text-base tracking-[0.5px] text-red-500 hover:bg-red-50 transition-colors"
          >
            Join Now
          </a>
          <a
            href="/auth/login"
            className="bg-red-500 text-white border-2 border-red-500 px-3 py-4 h-12 flex items-center justify-center font-medium text-base tracking-[0.5px] hover:bg-red-600 transition-colors"
          >
            Sign In
          </a>
          <a
            href="#"
            className="text-sm text-center text-red-500 hover:underline"
          >
            Create account for a business
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-[838px] mx-auto text-center pt-[140px] pb-10 flex flex-col gap-10 items-center">
        <div className="flex flex-col gap-6 text-center">
          <h1 className="text-5xl font-medium text-[#21272a] leading-[60px] tracking-[-0.96px]">
            Connecting People in One Platform
          </h1>
          <p className="text-lg text-[#535862] leading-7 w-[636px]">
            Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum
            sit nunc in eros scelerisque sed. Commodo in viverra nunc,
            ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis,
            pulvinar.
          </p>
        </div>

        <button className="bg-white border border-[#d5d7da] rounded-lg px-4 py-2.5 flex items-center gap-3 hover:bg-gray-50 transition-colors">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          <span className="text-[#414651] text-base font-semibold">
            Continue with Google
          </span>
        </button>
      </section>

      {/* Feature Sections */}
      <div className="w-full">
        {/* Section 1 */}
        <section className="bg-white flex gap-20 h-[580px] items-center p-20">
          <div className="flex-1 flex flex-col gap-16 py-8">
            <div className="flex flex-col gap-12 w-full">
              <h2 className="text-5xl font-medium text-[#21272a] leading-[60px] tracking-[-0.96px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h2>
              <p className="text-xl text-[#535862] leading-[30px]">
                Rhoncus morbi et augue nec, in id ullamcorper at sit.
                Condimentum sit nunc in eros scelerisque sed. Commodo in viverra
                nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam
                sagittis, pulvinar.
              </p>
            </div>
          </div>
          <div className="flex-1 bg-white border border-[#c1c7cd] rounded-[20px] h-full overflow-hidden">
            <div className="flex flex-col h-full">
              <div className="flex gap-[43px] items-center p-4 border-b border-[#dde1e6]">
                <div className="flex gap-1.5 flex-1">
                  <div className="w-4 h-4 rounded-full bg-[#dde1e6]"></div>
                  <div className="w-4 h-4 rounded-full bg-[#dde1e6]"></div>
                  <div className="w-4 h-4 rounded-full bg-[#dde1e6]"></div>
                </div>
                <div className="flex gap-1.5 items-center justify-end flex-1">
                  <svg
                    className="w-6 h-6 text-[#a2a9b0]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M15 18l-6-6 6-6" strokeWidth="2" />
                  </svg>
                  <svg
                    className="w-6 h-6 text-[#697077]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M9 18l6-6-6-6" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 bg-[#dde1e6]"></div>
            </div>
          </div>
        </section>

        {/* Section 2 - Reversed */}
        <section className="bg-white flex gap-20 h-[580px] items-center p-20">
          <div className="flex-1 bg-white border border-[#c1c7cd] rounded-[20px] h-full overflow-hidden">
            <div className="flex flex-col h-full">
              <div className="flex gap-[43px] items-center p-4 border-b border-[#dde1e6]">
                <div className="flex gap-1.5 flex-1">
                  <div className="w-4 h-4 rounded-full bg-[#dde1e6]"></div>
                  <div className="w-4 h-4 rounded-full bg-[#dde1e6]"></div>
                  <div className="w-4 h-4 rounded-full bg-[#dde1e6]"></div>
                </div>
                <div className="flex gap-1.5 items-center justify-end flex-1">
                  <svg
                    className="w-6 h-6 text-[#a2a9b0]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M15 18l-6-6 6-6" strokeWidth="2" />
                  </svg>
                  <svg
                    className="w-6 h-6 text-[#697077]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M9 18l6-6-6-6" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 bg-[#dde1e6]"></div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-16 py-8">
            <div className="flex flex-col gap-12 w-full">
              <h2 className="text-5xl font-medium text-[#21272a] leading-[60px] tracking-[-0.96px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h2>
              <p className="text-xl text-[#535862] leading-[30px]">
                Rhoncus morbi et augue nec, in id ullamcorper at sit.
                Condimentum sit nunc in eros scelerisque sed. Commodo in viverra
                nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam
                sagittis, pulvinar.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="bg-white flex gap-20 h-[580px] items-center p-20">
          <div className="flex-1 flex flex-col gap-16 py-8">
            <div className="flex flex-col gap-12 w-full">
              <h2 className="text-5xl font-medium text-[#21272a] leading-[60px] tracking-[-0.96px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h2>
              <p className="text-xl text-[#535862] leading-[30px]">
                Rhoncus morbi et augue nec, in id ullamcorper at sit.
                Condimentum sit nunc in eros scelerisque sed. Commodo in viverra
                nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam
                sagittis, pulvinar.
              </p>
            </div>
          </div>
          <div className="flex-1 bg-white border border-[#c1c7cd] rounded-[20px] h-full overflow-hidden">
            <div className="flex flex-col h-full">
              <div className="flex gap-[43px] items-center p-4 border-b border-[#dde1e6]">
                <div className="flex gap-1.5 flex-1">
                  <div className="w-4 h-4 rounded-full bg-[#dde1e6]"></div>
                  <div className="w-4 h-4 rounded-full bg-[#dde1e6]"></div>
                  <div className="w-4 h-4 rounded-full bg-[#dde1e6]"></div>
                </div>
                <div className="flex gap-1.5 items-center justify-end flex-1">
                  <svg
                    className="w-6 h-6 text-[#a2a9b0]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M15 18l-6-6 6-6" strokeWidth="2" />
                  </svg>
                  <svg
                    className="w-6 h-6 text-[#697077]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M9 18l6-6-6-6" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 bg-[#dde1e6]"></div>
            </div>
          </div>
        </section>

        {/* Section 4 - Reversed */}
        <section className="bg-white flex gap-20 h-[580px] items-center p-20">
          <div className="flex-1 bg-white border border-[#c1c7cd] rounded-[20px] h-full overflow-hidden">
            <div className="flex flex-col h-full">
              <div className="flex gap-[43px] items-center p-4 border-b border-[#dde1e6]">
                <div className="flex gap-1.5 flex-1">
                  <div className="w-4 h-4 rounded-full bg-[#dde1e6]"></div>
                  <div className="w-4 h-4 rounded-full bg-[#dde1e6]"></div>
                  <div className="w-4 h-4 rounded-full bg-[#dde1e6]"></div>
                </div>
                <div className="flex gap-1.5 items-center justify-end flex-1">
                  <svg
                    className="w-6 h-6 text-[#a2a9b0]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M15 18l-6-6 6-6" strokeWidth="2" />
                  </svg>
                  <svg
                    className="w-6 h-6 text-[#697077]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M9 18l6-6-6-6" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 bg-[#dde1e6]"></div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-16 py-8">
            <div className="flex flex-col gap-12 w-full">
              <h2 className="text-5xl font-medium text-[#21272a] leading-[60px] tracking-[-0.96px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h2>
              <p className="text-xl text-[#535862] leading-[30px]">
                Rhoncus morbi et augue nec, in id ullamcorper at sit.
                Condimentum sit nunc in eros scelerisque sed. Commodo in viverra
                nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam
                sagittis, pulvinar.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="bg-[#f2f4f8] px-20 py-20">
        <div className="max-w-[1280px] mx-auto flex gap-20 items-center">
          <div className="flex-1 flex flex-col gap-16 py-20">
            <div className="flex flex-col gap-12">
              <h2 className="text-5xl font-medium text-[#21272a] leading-[60px] tracking-[-0.96px]">
                The All-In-One Wireframing Kit
              </h2>
              <p className="text-xl text-[#21272a] leading-[30px]">
                Nec massa viverra eget feugiat pellentesque. Feugiat adipiscing
                massa vitae auctor mi massa. Sodales libero viverra cursus sed
                duis luctus nulla. In malesuada vulputate pharetra ipsum orci.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="bg-red-500 text-white border-2 border-red-500 px-4 py-4 h-14 font-medium text-xl tracking-[0.5px] hover:bg-red-600 transition-colors">
                Primary Action
              </button>
              <button className="border-2 border-red-500 px-4 py-4 h-14 font-medium text-xl tracking-[0.5px] text-red-500 hover:bg-red-50 transition-colors">
                Secondary Action
              </button>
            </div>
          </div>
          <div className="flex-1 h-[505px] relative">
            {/* Placeholder for desktop/mobile screens */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#697077] px-20 py-12 flex flex-col gap-12">
        <div className="flex gap-12 items-center w-full">
          <div className="w-40 h-4 font-bold text-red-500">INDOCONNEX</div>
          <div className="flex-1 flex flex-col gap-4 items-end">
            <div className="flex gap-4 items-center">
              <input
                type="email"
                placeholder="Enter your email to get the latest news..."
                className="bg-[#f2f4f8] border-b border-[#c1c7cd] px-4 py-3 h-12 text-base text-[#697077] w-[400px]"
              />
              <button className="bg-red-500 text-white border-2 border-red-500 px-3 py-4 h-12 font-medium text-base tracking-[0.5px] hover:bg-red-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#c1c7cd] h-px w-full"></div>

        <div className="flex gap-12 w-full">
          <div className="flex-1 flex flex-col gap-4">
            <div className="py-3 font-bold text-lg text-white">Column One</div>
            <a href="#" className="text-base text-white font-medium">
              Twenty One
            </a>
            <a href="#" className="text-base text-white font-medium">
              Thirty Two
            </a>
            <a href="#" className="text-base text-white font-medium">
              Fourty Three
            </a>
            <a href="#" className="text-base text-white font-medium">
              Fifty Four
            </a>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="py-3 font-bold text-lg text-white">Column Two</div>
            <a href="#" className="text-base text-white font-medium">
              Sixty Five
            </a>
            <a href="#" className="text-base text-white font-medium">
              Seventy Six
            </a>
            <a href="#" className="text-base text-white font-medium">
              Eighty Seven
            </a>
            <a href="#" className="text-base text-white font-medium">
              Ninety Eight
            </a>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="py-3 font-bold text-lg text-white">
              Column Three
            </div>
            <a href="#" className="text-base text-white font-medium">
              One Two
            </a>
            <a href="#" className="text-base text-white font-medium">
              Three Four
            </a>
            <a href="#" className="text-base text-white font-medium">
              Five Six
            </a>
            <a href="#" className="text-base text-white font-medium">
              Seven Eight
            </a>
          </div>
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="py-3 font-bold text-lg text-white">
                Column Four
              </div>
              <div className="flex gap-4">
                <div className="h-10 w-30 bg-gray-200 rounded"></div>
                <div className="h-10 w-34 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="py-3 font-bold text-lg text-white">Join Us</div>
              <div className="flex gap-4">
                <a href="#" className="text-white">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.5 6.5c-.4 1.5-1.6 2.7-3.1 3.1C19 10.4 12 10.4 12 10.4s-7 0-8.4-.8c-1.5-.4-2.7-1.6-3.1-3.1C0 5.1 0 2.5 0 2.5S0 0 .5 .5c.4-1.5 1.6-2.7 3.1-3.1C5 8.6 12 8.6 12 8.6s7 0 8.4.8c1.5.4 2.7 1.6 3.1 3.1.5 1.4.5 4 .5 4s0 2.6-.5 4z" />
                  </svg>
                </a>
                <a href="#" className="text-white">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.6l.4-4h-4v-2c0-1.1.2-1.5 1.2-1.5h2.8v-5h-4c-3.6 0-5 1.8-5 5.2v3.3z" />
                  </svg>
                </a>
                <a href="#" className="text-white">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.95 4.6c-.9.4-1.8.6-2.8.8 1-.6 1.8-1.6 2.2-2.7-1 .6-2 1-3.1 1.2-.9-1-2.2-1.6-3.6-1.6-2.7 0-4.9 2.2-4.9 4.9 0 .4 0 .8.1 1.1-4.2-.2-7.8-2.2-10.2-5.2-.5.8-.7 1.6-.7 2.5 0 1.7.9 3.2 2.2 4.1-.8 0-1.6-.2-2.2-.6v.1c0 2.4 1.7 4.4 3.9 4.8-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 2 2.4 3.4 4.6 3.4-1.7 1.3-3.8 2.1-6.1 2.1-.4 0-.8 0-1.2-.1 2.2 1.4 4.8 2.2 7.5 2.2 9.1 0 14-7.5 14-14v-.6c1-.7 1.8-1.6 2.5-2.5z" />
                  </svg>
                </a>
                <a href="#" className="text-white">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1s-3.6 0-4.8-.1c-3.3-.1-4.9-1.7-4.9-4.9-.1-1.3-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-3.2 1.7-4.8 4.9-4.9 1.3-.1 1.6-.1 4.8-.1zM12 0C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9c.2 4.4 2.6 6.8 7 7 1.2.1 1.6.1 4.9.1s3.7 0 4.9-.1c4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9C21.7 2.7 19.3.3 14.9.1 13.7 0 13.3 0 12 0zm0 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm6.4-11.8c-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4 1.4-.6 1.4-1.4-.6-1.4-1.4-1.4z" />
                  </svg>
                </a>
                <a href="#" className="text-white">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm13.5 12.3h-3v-5.6c0-3.4-4-3.1-4 0v5.6h-3v-11h3v1.8c1.4-2.6 7-2.8 7 2.5v6.7z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#c1c7cd] h-px w-full"></div>

        <div className="flex gap-12 items-start w-full">
          <p className="text-sm text-white">
            CompanyName @ 202X. All rights reserved.
          </p>
          <div className="flex-1 flex gap-4 items-center justify-end">
            <a href="#" className="px-2 py-3 text-base text-white font-medium">
              Eleven
            </a>
            <a href="#" className="px-2 py-3 text-base text-white font-medium">
              Twelve
            </a>
            <a href="#" className="px-2 py-3 text-base text-white font-medium">
              Thirteen
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
