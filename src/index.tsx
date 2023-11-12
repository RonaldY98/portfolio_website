import * as React from "react";
import { createRoot } from "react-dom/client";

// CSS styling imports
// import "bootstrap/dist/css/bootstrap.css";
import './assets/main.css';

// Component imports
import App from './app'

const root = createRoot(document.getElementById("root")!);

root.render(<App />);
