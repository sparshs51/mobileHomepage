var tabs = document.getElementById("tabs").children;
var tabItems = document.getElementById("tab-content").children;

var sidebar = document.getElementById("sidebar");
var sidebarRight = sidebar.getElementsByClassName("right-side")[0];

function changeTabs(tabName) {
  if (tabName === "exam") {
    tabs[0].classList.add("active");
    tabItems[0].classList.add("active");
    tabs[1].classList.remove("active");
    tabItems[1].classList.remove("active");
  } else {
    tabs[0].classList.remove("active");
    tabItems[0].classList.remove("active");
    tabs[1].classList.add("active");
    tabItems[1].classList.add("active");
  }
}

function toggleSidebar() {
  sidebar.classList.toggle("hide");
}

sidebarRight.onclick = toggleSidebar;

// slideshow

const first = document.querySelector(".slide");
const slide = () => {
  const before = document.querySelector(".showing");
  if (before) {
    before.classList.remove("showing");
    const next = before.nextElementSibling;
    if (next) {
      next.classList.add("showing");
    } else {
      first.classList.add("showing");
    }
  } else {
    first.classList.add("showing");
  }
};
slide();
setInterval(slide, 3000);

// modal
var modal = document.querySelector("#modal");
function toggleModal() {
  modal.classList.toggle("show");
}
