function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
          
          <div className="text-zinc-500">
            © 2025 API Playground
          </div>

          <div className="flex items-center gap-3 text-zinc-500">
            <span>Track 9 Hackathon</span>
            <span className="text-zinc-700">•</span>
            <span>Built with React + Vite + Tailwind</span>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;