function HistoryPanel({ history, setUrl, setMethod }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 h-full">
      <h2 className="text-xl font-semibold mb-4">
        Request History
      </h2>

      <div className="space-y-3 max-h-[350px] overflow-y-auto">
        {history.length === 0 ? (
          <p className="text-zinc-500 text-sm">No requests yet.</p>
        ) : (
          history.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setUrl(item.url);
                setMethod(item.method);
              }}
              className="bg-zinc-800 border border-zinc-700 rounded-xl p-3 cursor-pointer hover:border-zinc-500 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`px-2 py-1 rounded-md text-xs font-bold ${
                    item.method === "GET" ? "bg-green-600" : "bg-orange-600"
                  }`}
                >
                  {item.method}
                </span>
              </div>
              <div className="text-sm text-zinc-400 break-all">
                {item.url}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default HistoryPanel;