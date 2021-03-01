console.debug('[colorize] detect pull-request octicon...')

for (const octicon of document.querySelectorAll("svg.octicon")) {
  // pull request icon
  if (octicon.classList.contains("octicon-git-pull-request")) {

    // draft (それ以外も引っかかるがだいたい問題ない)
    if (!octicon.classList.contains("open")) {
      octicon.style.opacity = '0.3'
    }

  }
}
