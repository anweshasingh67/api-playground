function ResponseViewer({ response }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">

        <h2 className="text-xl font-semibold">
          Response Viewer
        </h2>

        <div className="flex flex-wrap gap-2">

          <span className="px-3 py-1 rounded-full bg-green-600 text-sm font-medium">
            200 OK
          </span>

          <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm">
            127 ms
          </span>

          <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm">
            2.3 KB
          </span>

          <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-lg text-sm transition-colors">
            Copy
          </button>

        </div>

      </div>

      <pre className="bg-black border border-zinc-800 rounded-xl p-4 min-h-[350px] overflow-auto text-zinc-300">

        {response
          ? JSON.stringify(response, null, 2)
          : `{
  "message": "Response will appear here..."
}`}

      </pre>

    </div>
  );
}

export default ResponseViewer;