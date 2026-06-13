import { useState } from "react";
function ResponseViewer({ response, error }) {
  const [copied, setCopied] = useState(false);

const handleCopy = () => {
  if (response) {
    const text = JSON.stringify(response.data, null, 2);
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }
};

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <h2 className="text-xl font-semibold">Response Viewer</h2>

        <div className="flex flex-wrap gap-2">
          {response && (
            <>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${response.status >= 200 && response.status < 300 ? "bg-green-600" : "bg-red-600"}`}>
                {response.status} {response.statusText}
              </span>
              <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm">
              {response.timeTaken} ms
            </span>
            <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm">
              {response.size} KB
            </span>
            </>
          )}
          <button
          onClick={handleCopy}
          className={`px-3 py-1 rounded-lg text-sm transition-colors ${copied ? "bg-green-600" : "bg-blue-600 hover:bg-blue-700"}`}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
        </div>
      </div>

      {error ? (
      <div className="bg-red-950 border border-red-800 rounded-xl p-4 min-h-[350px] flex items-center justify-center">
      <div className="text-center">
      <p className="text-red-400 text-lg font-semibold mb-2">Request Failed</p>
      <p className="text-red-300 text-sm">{error}</p>
      </div>
    </div>
    ) : (
    <pre className="bg-black border border-zinc-800 rounded-xl p-4 min-h-[350px] overflow-auto text-zinc-300">
    {response
      ? JSON.stringify(response.data, null, 2)
      : `{\n  "message": "Response will appear here..."\n}`}
  </pre>
)}
    </div>
  );
}

export default ResponseViewer;