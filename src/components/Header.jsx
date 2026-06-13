function Header() {
  return (
    <header className="border-b border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          
          <div>
            <div className="flex items-center gap-3">
              <div className="text-3xl">
                🚀
              </div>

              <h1 className="text-4xl font-bold text-white tracking-tight">
                API Playground
              </h1>
            </div>

            <p className="text-zinc-400 mt-3 text-lg">
              Build • Test • Inspect API requests
            </p>

            <p className="text-zinc-500 text-sm mt-1">
              Postman-inspired API testing workspace
            </p>
          </div>

          <div className="flex items-center">
            <span className="px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm font-medium">
              Track 9 • Hackathon Project
            </span>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;