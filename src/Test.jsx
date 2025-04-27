// utils/getSubdomain.js
const getSubdomain = () => {
  const host = window.location.hostname; // jhon.example.in
  const parts = host.split(".");
  if (parts.length > 2) return parts[0]; // return 'jhon'
  return null; // www.example.in or example.in
};

import { useEffect, useState } from "react";
import { templateMap } from "@/config/templateMap"; // explained below

const SubdomainRouter = () => {
  const [component, setComponent] = useState(null);

  useEffect(() => {
    const subdomain = getSubdomain();

    fetch(`/api/users/${subdomain}/portfolio`)
      .then((res) => res.json())
      .then(({ template, data }) => {
        const Layout = templateMap[template];
        setComponent(<Layout portfolioData={data} />);
      });
  }, []);

  if (!component) return <div>Loading...</div>;

  return component;
};

export default SubdomainRouter;
