const app = document.getElementById("app");

function mediator() {
  const xhr = new XMLHttpRequest();
  const url = `plantillas/${location.hash.slice(1)}.html`;
  xhr.open("get", url);
  xhr.addEventListener("load", () => {
    if (xhr.status == 200) {
      app.innerHTML = xhr.response;
    }
  });
  xhr.send();
}

window.addEventListener("popstate", (e) => {
  mediator();
});
