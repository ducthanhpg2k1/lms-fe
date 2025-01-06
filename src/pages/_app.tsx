/* eslint-disable react/no-unknown-property */
import "../styles/globals.scss";
import "../styles/tailwind.css";

import { ReactElement, ReactNode } from "react";

import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { PagesProgressBar as ProgressBar } from "next-nprogress-bar";
import { DefaultSeo, DefaultSeoProps } from "next-seo";
import AppLayout from "@/layout/AppLayout";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export const SEO: DefaultSeoProps = {
  titleTemplate: "Title",
  defaultTitle: "Title",
  description: "Title",
  openGraph: {
    title: "Title",
    description: "Title",
    images: [
      {
        url: "banner-1.png",
        width: 800,
        height: 400,
        alt: "Title Banner Alt",
      },
    ],
  },
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: any) => page);

  return (
    <>
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content={"index,follow"} />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#476055" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta name="title" content="Maby Client" />
        <meta name="description" content="Maby Client" />
        <link rel="shortcut icon" href="/static/logo-aeon.svg" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=2,shrink-to-fit=no"
        />
      </Head>
      <DefaultSeo {...SEO} />

      <ProgressBar
        height="2px"
        color="#B31E8D"
        options={{ showSpinner: false }}
        shallowRouting
      />
      <AppLayout>{getLayout(<Component {...pageProps} />)}</AppLayout>
    </>
  );
}

export default MyApp;
