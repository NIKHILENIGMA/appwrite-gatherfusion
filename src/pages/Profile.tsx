import React from "react";

const Profile: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background-color)] text-[var(--text-primary)] font-['Spline_Sans',sans-serif]">
      {/* Header */}
      {/* <header className="bg-[var(--card-bg)]/50 backdrop-blur-sm sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="flex items-center gap-2 text-xl font-bold text-[var(--primary-color)]"
            >
              <svg
                className="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"></path>
              </svg>
              <span>Evently</span>
            </a>
            <div className="hidden md:flex items-center gap-6">
              <a className="text-sm font-medium hover:text-[var(--primary-color)] transition-colors" href="#">Home</a>
              <a className="text-sm font-medium hover:text-[var(--primary-color)] transition-colors" href="#">Explore</a>
              <a className="text-sm font-medium hover:text-[var(--primary-color)] transition-colors" href="#">Create Event</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="w-5 h-5 text-[var(--text-secondary)]"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M21 21L15.803 15.803M15.803 15.803C17.2096 14.3967 18 12.4947 
                    18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 
                    3 10.5C3 14.6421 6.35786 18 10.5 18C12.4947 18 
                    14.3967 17.2096 15.803 15.803V15.803Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search events..."
                className="w-full pl-10 pr-4 py-2 rounded-full bg-[var(--card-bg)] text-[var(--text-primary)] border border-transparent focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] transition-all"
              />
            </div>
            <button className="p-2 rounded-full hover:bg-[var(--card-bg)] transition-colors">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M15 17h5l-1.405-1.405A2.032 
                  2.032 0 0118 14.158V11a6.002 6.002 
                  0 00-4-5.659V5a2 2 0 10-4 
                  0v.341A6.002 6.002 0 006 
                  11v3.159c0 .538-.214 1.055-.595 
                  1.436L4 17h5m6 0v1a3 3 0 
                  11-6 0v-1m6 0H9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <div
              className="w-10 h-10 rounded-full bg-cover bg-center border-2 border-[var(--primary-color)]"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBgOEcdijP5LzIsihRStNFqSDXYCY4JURRT3P_728cI3DIjuOXMALFeBC_zBC22l9Yg4xkkaS9FzNSLtI9Klk2i0tGw3SE_KsQdOz72NFYnf5qiCq4VvVxO_KdoHkY5gJlSnEqm4NNlPqhmiTnRUNn5Uomr9HeEtg-L9u7lCu-yUlVRllVE_y2URudHhYwVTGq3viFzTOmZQwyU_Zz82RUdq4rcFQK5FI1WmnioGU7tOaHNB1q9-fIX9YmYEn2Ya0a2SE7POt0KUEE")',
              }}
            ></div>
          </div>
        </nav>
      </header> */}

      {/* Main */}
      <main className="flex-grow container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Profile card */}
            <div className="bg-[var(--card-bg)] p-8 rounded-2xl text-center shadow-lg border border-[var(--border-color)]">
              <div className="relative inline-block">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIJcmAKYTOZUx3WYHv-3_EYT4Zre2KLlF5WMY83htsu7QrpE2r2Qzo8ImfZY_q0LUttNCMac9IVBbEZN_7sZaSnWhUmQevOoZwK7I91EmHVyzdW4SAotxT9Bi-TkP0-PrAcPCEy0Yh0jyOlFDYyTOyBBtzG3kFrKMltruVkWhzSfGljiU4uEubBb_KRR65n70GY2FM_dqGKOZctlHCW97v3kQECetgzxSmdvd89RTUQ_ecdThFYK6KefWDV7HeWwRVrE3jz8cQB6s"
                  alt="Sophia Clark"
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-[var(--primary-color)]"
                />
                <span className="absolute bottom-2 right-2 bg-[var(--primary-color)] p-1 rounded-full border-2 border-[var(--card-bg)]">
                  <svg
                    className="h-4 w-4 text-black"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 
                      000 16zm3.707-9.293a1 1 0 
                      00-1.414-1.414L9 10.586 
                      7.707 9.293a1 1 0 
                      00-1.414 1.414l2 2a1 1 0 
                      001.414 0l4-4z"
                    />
                  </svg>
                </span>
              </div>
              <h1 className="text-2xl font-bold mt-4">Sophia Clark</h1>
              <p className="text-[var(--text-secondary)]">Event Organizer</p>
              <p className="text-[var(--text-secondary)] text-sm">Joined in 2021</p>
              <button className="mt-6 w-full bg-[var(--primary-color)] text-black px-6 py-3 rounded-full hover:bg-[var(--secondary-color)] transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-50 font-bold">
                Edit Profile
              </button>
            </div>

            {/* About */}
            <div className="bg-[var(--card-bg)] p-6 rounded-2xl shadow-lg border border-[var(--border-color)]">
              <h2 className="text-xl font-bold mb-4">About</h2>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Sophia is a passionate event organizer with over 5 years of
                experience. She specializes in creating memorable experiences
                and has a keen eye for detail.
              </p>
            </div>

            {/* Social links */}
            <div className="bg-[var(--card-bg)] p-6 rounded-2xl shadow-lg border border-[var(--border-color)]">
              <h2 className="text-xl font-bold mb-4">Social Links</h2>
              <div className="flex justify-center gap-4">
                {/* Globe */}
                <a
                  href="#"
                  className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors p-3 bg-black/20 rounded-full"
                >
                  🌐
                </a>
                {/* Twitter */}
                <a
                  href="#"
                  className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors p-3 bg-black/20 rounded-full"
                >
                  🐦
                </a>
                {/* Instagram */}
                <a
                  href="#"
                  className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors p-3 bg-black/20 rounded-full"
                >
                  📸
                </a>
              </div>
            </div>
          </div>

          {/* Main content area */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="border-b border-[var(--border-color)] mb-6">
              <nav className="flex space-x-6">
                <a className="pb-3 border-b-2 border-[var(--primary-color)] text-[var(--primary-color)] font-semibold" href="#">Overview</a>
                <a className="pb-3 border-b-2 border-transparent text-[var(--text-secondary)] hover:text-[var(--primary-color)] hover:border-[var(--primary-color)] transition-all" href="#">Registered Events</a>
                <a className="pb-3 border-b-2 border-transparent text-[var(--text-secondary)] hover:text-[var(--primary-color)] hover:border-[var(--primary-color)] transition-all" href="#">Past Events</a>
                <a className="pb-3 border-b-2 border-transparent text-[var(--text-secondary)] hover:text-[var(--primary-color)] hover:border-[var(--primary-color)] transition-all" href="#">Created Events</a>
              </nav>
            </div>

            {/* Events Sections */}
            <div className="space-y-10">
              <section>
                <h2 className="text-2xl font-bold mb-4">Registered Events</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Event card */}
                  <div className="bg-[var(--card-bg)] rounded-xl overflow-hidden shadow-lg border border-[var(--border-color)] group">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB-uZh6dWL40cmOIPBVjQiMHsZ-Rz4lD4Rtg-iXM3PD0IPJhCdg8iOWsYQcckBfEQnXPiLOm_yC7MMffUkpPEF76-qT0TJA0aQFhx_ybC7JEWeXPH_yEqddiZNaIS0woAPIXlnpjAf3wZwTOiwuIc-puLomiJ-gVXBEbCljHAovOuz65otPelgaAZf1fDcx6sJprPc5aPCwJHonvVcxH1csimS9b7AZ1mweeT8UrlsR3E7xUf3h_AEsqML0x67eXkUFGeX2A9cdeA"
                      alt="Tech Conference 2024"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-4">
                      <h3 className="font-bold text-lg">Tech Conference 2024</h3>
                      <p className="text-sm text-[var(--text-secondary)]">
                        San Francisco, CA
                      </p>
                    </div>
                  </div>

                  <div className="bg-[var(--card-bg)] rounded-xl overflow-hidden shadow-lg border border-[var(--border-color)] group">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuCIW_7C_prHwxDXzAsRqUKeV1LoIDjK-i6RVIhyT1Sl47m-Ps4rJG8SOpTPkv99L73iBmBgKmPw5oh8qup92c4ilPMHB4y8qn1ldLom5Mylm_0zXhNoumGPx3PAyddxl45ezaaXeAeJPGCPTfaCiXRA_C0ZmiyYSYMJUMiFYgifmHMjE-2-KcAzGK_GwchhxOSxkaQnsrbv1RwUyPQ2860uZDlMOCZdUkdpgVaZxm7BlcenGHsNA0cWsWOHwFfXNQnnDnOu_6e8c"
                      alt="Music Festival 2024"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-4">
                      <h3 className="font-bold text-lg">Music Festival 2024</h3>
                      <p className="text-sm text-[var(--text-secondary)]">
                        Los Angeles, CA
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Past Events, Created Events sections... */}
              {/* (Repeat same structure for past/created events as in your HTML) */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
