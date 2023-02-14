export async function waitForElement(selector: string) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) resolve(document.querySelector(selector));

    const observer = new MutationObserver((_mutations) => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
  });
}
