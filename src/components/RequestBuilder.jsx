function RequestBuilder({
  method,
  setMethod,
  url,
  setUrl,
}) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

      <h2 className="text-xl font-semibold mb-4">
        Request Builder
      </h2>

      <div className="flex gap-3">

        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white"
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
        </select>

        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://api.example.com"
          className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white placeholder-zinc-500"
        />

        <button
          className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg font-medium transition-colors"
        >
          Send
        </button>

      </div>

    </div>
  );
}

export default RequestBuilder;