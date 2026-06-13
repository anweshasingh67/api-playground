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
            <div className="text-blue-400 font-medium">
              {item.method}
            </div>

            <div className="text-sm text-zinc-400 truncate">
              {item.url}
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}

export default HistoryPanel;