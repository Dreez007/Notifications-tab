const notBar = document.getElementsByClassName('not-bar')
const notIcon = document.getElementById('not-icon')
const markRead = document.getElementById('mark-read')
const newDot = document.getElementsByClassName('new-dot')

function removeUnreadClass() {
  for (var i = 0; i < notBar.length; i++) {
    notBar[i].classList.remove("unread");
  }
}

function removeNewDot() {
  for (let i = 0; i < newDot.length; i++) {
    newDot[i].style.display = "none"
  }
}

markRead.addEventListener('click', () => {
  notIcon.textContent = 0
  removeUnreadClass()
  removeNewDot()
})


