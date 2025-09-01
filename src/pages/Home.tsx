const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <section className="w-full max-w-2xl p-8  rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Welcome to Gatherfusion
        </h1>
        <p className="text-foreground mb-6">
          This is your home page. Start exploring features and manage your
          gatherings efficiently.
        </p>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a
                href="/events"
                className="text-primary hover:underline font-medium"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="/profile"
                className="text-primary hover:underline font-medium"
              >
                Profile
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </main>
  );
};

export default Home;
