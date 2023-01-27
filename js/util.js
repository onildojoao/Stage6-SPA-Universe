const bgImg1 = "./assets/mountains-universe-1.png"
const bgImg2 = "./assets/mountains-universe-2.png"
const bgImg3 = "./assets/mountains-universe-3.png"

function toogleText(element) {
  resetToggleText()
  element.classList.toggle("selected")
  changeBg()
}

function resetToggleText() {
  const menuArray = document.querySelectorAll("li")
  for (const itemArray of menuArray) {
    itemArray.classList.remove("selected")
  }
}

function changeBg() {
  const { pathname } = window.location
  const bgImg = document.querySelector("img")

  switch (pathname) {
    case "/exploration":
      bgImg.className = "bg-image exploration"
      bgImg.src = bgImg3
      break

    case "/universe":
      bgImg.className = "bg-image universe"
      bgImg.src = bgImg2
      break

    default:
      bgImg.className = "bg-image home"
      bgImg.src = bgImg1
      break
  }
}
export { toogleText }
