import { useState } from "react";
import Header from "./components/Header";
import RequestBuilder from "./components/RequestBuilder";
import ResponseViewer from "./components/ResponseViewer";
import HistoryPanel from "./components/HistoryPanel";
import Footer from "./components/Footer";

function App() {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [history, setHistory] = useState(() => {
    try {
      const saved = localStorage.getItem("api-history");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
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

      let data;
      try {
        data = JSON.parse(text);
      } catch {
        data = text;
      }

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
      setHistory((prevHistory) => {
        const updatedHistory = [newEntry, ...prevHistory];
        localStorage.setItem("api-history", JSON.stringify(updatedHistory));
        return updatedHistory;
      });
    } catch (err) {
      setError("Something went wrong. Check the URL and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-950 to-black text-white">
      <Header />

      <main className="max-w-[1400px] mx-auto px-6 py-8 space-y-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white">Workspace</h2>
            <p className="text-zinc-500 mt-1">
              Configure requests, inspect responses, and manage history.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.7)]"></span>
            <span className="text-sm text-zinc-400">Ready</span>
          </div>
        </div>

        <div className="grid xl:grid-cols-4 gap-6 items-start">
          <div className="xl:col-span-3">
            <RequestBuilder
              method={method}
              setMethod={setMethod}
              url={url}
              setUrl={setUrl}
              onSend={handleSend}
              loading={loading}
            />
          </div>

          <div className="xl:col-span-1">
            <HistoryPanel
              history={history}
              setUrl={setUrl}
              setMethod={setMethod}
            />
          </div>
        </div>

        <section className="pt-1">
          <ResponseViewer response={response} error={error} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;