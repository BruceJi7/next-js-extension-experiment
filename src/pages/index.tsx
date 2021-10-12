import Head from "next/head";
import { useEffect } from "react";

import styles from "./index.module.scss";

const SECRET = "the hedgehog plays in the rain, yes?";

export default function Home() {
  useEffect(() => {
    chrome.runtime.onMessageExternal.addListener(function (
      request,
      sender,
      sendResponse
    ) {
      console.log(`request`, request);
      sendResponse({ reply: "YES", success: true, secret: SECRET });
    });
  });

  return (
    <div className={styles.Container}>
      <Head>
        <title>Next Template</title>
        <meta name="description" content="Next.js template by Ivan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>TEST 9</h1>

      <button onClick={() => {}}>Click Me</button>
    </div>
  );
}
