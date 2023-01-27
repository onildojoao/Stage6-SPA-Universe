 import { toogleText } from "./util.js" 

class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)
    toogleText(event.path[1])
    this.handle()
  }

  handle() {
    const { pathname } = window.location

    const route = this.routes[pathname] || this.routes["/home"]

    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        document.querySelector(".app").innerHTML = html
      })
  }

  /* toogleText(element) {
    this.resetToggleText()
    element.classList.toggle("selected")
  }

  resetToggleText() {
    const menuArray = document.querySelectorAll("li")
    for (const itemArray of menuArray) {
      itemArray.classList.remove("selected")
    }
  } */
}

export default Router
