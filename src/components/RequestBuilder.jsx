function RequestBuilder({
  method,
  setMethod,
  url,
  setUrl,
  onSend,
  loading,
}) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold text-white">
          Request Builder
        </h2>

        <span className="text-xs text-zinc-500">
          API Request
        </span>
      </div>

      <div className="flex flex-col lg:flex-row gap-3 mb-6">
        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          className="bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white font-medium min-w-[120px]"
        >
          <option value="GET">🟢 GET</option>
          <option value="POST">🟡 POST</option>
          <option value="PUT">🔵 PUT</option>
          <option value="DELETE">🔴 DELETE</option>
        </select>

        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://api.example.com/users"
          className="flex-1 bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={onSend}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-900 disabled:cursor-not-allowed px-6 py-3 rounded-xl font-semibold transition-all"
        >
          {loading ? "Sending..." : "Send Request"}
        </button>
      </div>

      <div className="border-t border-zinc-800 pt-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-zinc-300">
            Request Headers
          </h3>

          <span className="text-xs text-zinc-500">
            Optional
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Content-Type"
            className="bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500"
          />

          <input
            type="text"
            placeholder="application/json"
            className="bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500"
          />
        </div>

        <button
          className="mt-4 text-sm text-blue-400 hover:text-blue-300 transition-colors"
        >
          + Add Header
        </button>
      </div>
    </div>
  );
}

export default RequestBuilder;