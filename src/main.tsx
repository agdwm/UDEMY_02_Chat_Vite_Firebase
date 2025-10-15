import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { BrowserRouter } from "react-router";
import { FirebaseAppProvider } from "reactfire";

import { firebaseConfig } from "./config/firebase.ts";
import FirebaseServices from "./config/FirebaseServices.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <FirebaseServices>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FirebaseServices>
    </FirebaseAppProvider>
  </StrictMode>
);
