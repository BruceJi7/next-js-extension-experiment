const port = chrome.runtime.connect({ name: "knockknock" });
console.log(`port`, port);
port.postMessage({ joke: "Knock knock" });
port.onMessage.addListener(function (msg) {
  console.log(`msg`, msg);
  if (msg.question == "Who's there?") port.postMessage({ answer: "Madame" });
  else if (msg.question == "Madame who?")
    port.postMessage({ answer: "Madame... Bovary" });
});
