import { useEffect, useState } from "react";

import { BrowserRouter } from "react-router-dom";

function App() {
  const [cordovaPlugins, setCordovaPlugins] = useState<any>(null);
  const [cordovaPluginNotificationLocal, setCordovaPluginNotificationLocal] = useState<any>(null);

  useEffect(() => {
    document.addEventListener("deviceready", () => {
      try {
        // @ts-expect-error cordova is not defined
        const cordova = window.cordova;
        setCordovaPlugins(cordova.plugins);
        setCordovaPluginNotificationLocal(cordova.plugins.notification.local);
      } catch (error) {
        console.error("Error initializing device:", error);
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="p-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <p className="text-gray-700 mb-10">This is a simple React application.</p>

        <div>
          <label className="block mb-2">cordova.plugins:</label>
          <pre className="bg-gray-100 p-2 rounded">
            {cordovaPlugins
              ? JSON.stringify(cordovaPlugins, null, 2)
              : "Loading..."}
          </pre>
        </div>

        <div>
          <label className="block mb-2">cordova.plugins.notification:</label>
          <pre className="bg-gray-100 p-2 rounded">
            {cordovaPluginNotificationLocal
              ? JSON.stringify(cordovaPluginNotificationLocal, null, 2)
              : "Loading..."}
          </pre>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
