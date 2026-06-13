function HistoryPanel() {
  const history = [
    {
      method: "GET",
      url: "jsonplaceholder.typicode.com/posts",
    },
    {
      method: "POST",
      url: "api.example.com/users",
    },
    {
      method: "GET",
      url: "jsonplaceholder.typicode.com/comments",
    },
  ];

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 h-full">

      <h2 className="text-xl font-semibold mb-4">
        Request History
      </h2>

      <div className="space-y-3 max-h-[350px] overflow-y-auto">

        {history.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-800 border border-zinc-700 rounded-xl p-3"
          >
            <div className="flex items-center gap-2 mb-2">

              <span
                className={`px-2 py-1 rounded-md text-xs font-bold ${
                  item.method === "GET"
                    ? "bg-green-600"
                    : "bg-orange-600"
                }`}
              >
                {item.method}
              </span>

            </div>

            <div className="text-sm text-zinc-400 break-all">
              {item.url}
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default HistoryPanel;