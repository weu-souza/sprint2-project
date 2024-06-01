const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};
const pages = {
  "/": "../pages/main.html",
  "/adopt": "../pages/adopt.html",
  "/success": "../pages/success.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = pages[path];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("content").innerHTML = html;
};
window.onpopstate = handleLocation;
window.route = route;

handleLocation();
