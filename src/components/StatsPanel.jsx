function StatsPanel({ history }) {
  const totalRequests = history.length;
  const successfulRequests = history.filter(
    (item) => item.status >= 200 && item.status < 300
  ).length;
  const failedRequests = history.filter(
    (item) => item.status >= 400
  ).length;

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-xl font-semibold text-white">
            Request Stats
          </h2>
          <p className="text-sm text-zinc-500 mt-1">
            Quick summary of API usage
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
          <p className="text-zinc-500 text-sm">Total</p>
          <p className="text-2xl font-bold text-white mt-1">{totalRequests}</p>
        </div>

        <div className="rounded-xl border border-green-500/20 bg-green-500/10 p-4">
          <p className="text-green-400 text-sm">Successful</p>
          <p className="text-2xl font-bold text-green-300 mt-1">
            {successfulRequests}
          </p>
        </div>

        <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-4">
          <p className="text-red-400 text-sm">Failed</p>
          <p className="text-2xl font-bold text-red-300 mt-1">{failedRequests}</p>
        </div>
      </div>
    </div>
  );
}

export default StatsPanel;