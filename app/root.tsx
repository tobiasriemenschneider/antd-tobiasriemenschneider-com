// imports - REMIX
import type { MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
// imports - STYLES
import stylesAntd from "./styles/antd.css";

// * META
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "antd sandbox | antd.tobiasriemenschneider.com",
  viewport: "width=device-width,initial-scale=1",
});

// * LINKS
export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesAntd }];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        {typeof document === "undefined" ? "__STYLES__" : null}
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
