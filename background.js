// NOTE: GitHubがpjaxでページ遷移する都合でタブのアップデートを取得するしかない.
// pjaxのイベントをハンドリングできればcontent_scriptsで注入するだけで大丈夫そうだが...
function handleUpdated(tabId, changeInfo, tabInfo) {
  if (!tabInfo.url.startsWith("https://github.com")) return
  if (!tabInfo.url.includes("pulls")) return

  browser.tabs.executeScript(
    tabId,
    { file: '/colorize.js' }
  )
}

browser.tabs.onUpdated.addListener(handleUpdated);
