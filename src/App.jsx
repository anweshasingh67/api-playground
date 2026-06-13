import { useState } from "react";

import Header from "./components/Header";
import RequestBuilder from "./components/RequestBuilder";
import ResponseViewer from "./components/ResponseViewer";
import HistoryPanel from "./components/HistoryPanel";

function App() {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");
  const [response, setResponse] = useState(null);

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
            />
          </div>

          <HistoryPanel />
        </div>

        <ResponseViewer response={response} />

      </main>
    </div>
  );
}

export default App;