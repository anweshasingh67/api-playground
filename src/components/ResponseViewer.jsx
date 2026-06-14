import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
function ResponseViewer({ response, error }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!response) return;

    const text =
      typeof response.data === "string"
        ? response.data
        : JSON.stringify(response.data, null, 2);

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  };

  const responseText = response
    ? typeof response.data === "string"
      ? response.data
      : JSON.stringify(response.data, null, 2)
    : `{
  "message": "Response will appear here after you send a request"
}`;

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div>
          <h2 className="text-xl font-semibold text-white">
            Response Viewer
          </h2>
          <p className="text-sm text-zinc-500 mt-1">
            Inspect status, timing, and payload
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {response && (
            <>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  response.status >= 200 && response.status < 300
                    ? "bg-green-600/20 text-green-400 border border-green-500/30"
                    : "bg-red-600/20 text-red-400 border border-red-500/30"
                }`}
              >
                {response.status} {response.statusText}
              </span>

              <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300 border border-zinc-700">
                {response.timeTaken} ms
              </span>

              <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300 border border-zinc-700">
                {response.size} KB
              </span>
            </>
          )}

          <button
            onClick={handleCopy}
            disabled={!response}
            className="px-3 py-1 rounded-lg text-sm font-medium transition-colors bg-blue-600 hover:bg-blue-700 disabled:bg-zinc-800 disabled:text-zinc-500 disabled:cursor-not-allowed"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>

      {error ? (
        <div className="bg-red-950/40 border border-red-800 rounded-xl p-5 min-h-[360px] flex items-center justify-center">
          <div className="text-center max-w-md">
            <div className="text-4xl mb-3">⚠️</div>
            <p className="text-red-400 text-lg font-semibold mb-2">
              Request Failed
            </p>
            <p className="text-red-300 text-sm leading-6">{error}</p>
          </div>
        </div>
      ) : (
        <div className="relative">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Response Body
            </span>
            <span className="text-xs text-zinc-500">
              JSON / Text preview
            </span>
          </div>

          <pre className="bg-black/80 border border-zinc-800 rounded-xl p-5 min-h-[360px] max-h-[520px] overflow-auto text-zinc-300 text-sm leading-6 whitespace-pre-wrap break-words">
            {responseText}
          </pre>
        </div>
      )}
    </div>
  );
}

export default ResponseViewer;