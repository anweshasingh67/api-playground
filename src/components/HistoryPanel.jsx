function HistoryPanel({ history, setUrl, setMethod, onClearHistory }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl h-full">
      <div className="flex items-center justify-between gap-3 mb-5">
        <div>
          <h2 className="text-xl font-semibold text-white">
            Request History
          </h2>
          <p className="text-sm text-zinc-500 mt-1">
            Click a previous request to reuse it
          </p>
        </div>

        <button
          onClick={onClearHistory}
          disabled={history.length === 0}
          className="px-3 py-1.5 rounded-lg text-xs font-medium border border-zinc-700 bg-zinc-800 text-zinc-300 hover:bg-zinc-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          Clear History
        </button>
      </div>

      {history.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-14 border border-dashed border-zinc-800 rounded-xl bg-zinc-950/40">
          <div className="text-5xl mb-4">🕒</div>
          <h3 className="text-lg font-medium text-white mb-2">
            No requests yet
          </h3>
          <p className="text-zinc-400 text-sm max-w-xs leading-6">
            Your recent API requests will appear here after you send them.
          </p>
        </div>
      ) : (
        <div className="space-y-3 max-h-[620px] overflow-y-auto pr-2">
          {history.map((item, index) => (
            <button
              key={`${item.method}-${item.url}-${index}`}
              onClick={() => {
                setUrl(item.url);
                setMethod(item.method);
              }}
              className="w-full text-left bg-zinc-800/70 border border-zinc-700 rounded-xl p-4 hover:border-zinc-500 hover:bg-zinc-800 transition-all group"
            >
              <div className="flex items-center justify-between gap-3 mb-2">
                <span
                  className={`px-2.5 py-1 rounded-md text-xs font-bold tracking-wide ${
                    item.method === "GET"
                      ? "bg-green-600/20 text-green-400 border border-green-500/30"
                      : item.method === "POST"
                      ? "bg-yellow-600/20 text-yellow-300 border border-yellow-500/30"
                      : item.method === "PUT"
                      ? "bg-blue-600/20 text-blue-300 border border-blue-500/30"
                      : "bg-red-600/20 text-red-400 border border-red-500/30"
                  }`}
                >
                  {item.method}
                </span>

                <span className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">
                  Reuse
                </span>
              </div>

              <div className="text-sm text-zinc-300 break-all leading-6">
                {item.url}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default HistoryPanel;