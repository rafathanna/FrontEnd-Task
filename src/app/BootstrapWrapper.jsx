"use client"; // <- Make this a client component

import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BootstrapWrapper({ children }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return children;
}
