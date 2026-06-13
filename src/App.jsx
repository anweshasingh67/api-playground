import { useState } from "react";
import Header from "./components/Header";
import RequestBuilder from "./components/RequestBuilder";
import ResponseViewer from "./components/ResponseViewer";
import HistoryPanel from "./components/HistoryPanel";

function App() {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [history, setHistory] = useState(() => {
  const saved = localStorage.getItem("api-history");
  return saved ? JSON.parse(saved) : [];
});

  const handleSend = async () => {
    if (!url) return;
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const startTime = Date.now();
      const res = await fetch(url, { method });
      const timeTaken = Date.now() - startTime;
      const text = await res.text();
      const data = JSON.parse(text);
      const size = (new Blob([text]).size / 1024).toFixed(1);
      const statusText = res.statusText || (res.status === 200 ? "OK" : "");

      setResponse({
        status: res.status,
        statusText,
        timeTaken,
        size,
        data,
      });
      const newEntry = { method, url };
      const updatedHistory = [newEntry, ...history];
      setHistory(updatedHistory);
      localStorage.setItem("api-history", JSON.stringify(updatedHistory));
    } catch(err) {
      setError("Something went wrong. Check the URL and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header />
      <main className="max-w-7xl mx-auto p-6 space-y-6">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RequestBuilder
              method={method}
              setMethod={setMethod}
              url={url}
              setUrl={setUrl}
              onSend={handleSend}
              loading={loading}
            />
          </div>
          <HistoryPanel history={history} setUrl={setUrl} setMethod={setMethod} />
        </div>
        <ResponseViewer response={response} error={error} />
      </main>
    </div>
  );
}

export default App;