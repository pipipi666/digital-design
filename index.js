const data = [
  {
    id: "1",
    img: "assets/images/shirt.jpg",
    title: "T-shirt",
    dateOfCreate: "1.05.2023",
    category: "T-shirts 1",
  },
  {
    id: "1",
    img: "assets/images/shirt.jpg",
    title: "T-shirt",
    dateOfCreate: "30.04.2023",
    category: "T-shirts 1",
  },
  {
    id: "1",
    img: "assets/images/shirt.jpg",
    title: "T-shirt",
    dateOfCreate: "1.01.2023",
    category: "T-shirts 1",
  },
  {
    id: "1",
    img: "assets/images/shirt.jpg",
    title: "T-shirt",
    dateOfCreate: "11.02.2023",
    category: "T-shirts 1",
  },
  {
    id: "1",
    img: "assets/images/shirt.jpg",
    title: "T-shirt",
    dateOfCreate: "11.02.2023",
    category: "T-shirts 1",
  },
  {
    id: "1",
    img: "assets/images/shirt.jpg",
    title: "T-shirt",
    dateOfCreate: "11.02.2023",
    category: "T-shirts 1",
  },
  {
    id: "1",
    img: "assets/images/shirt.jpg",
    title: "T-shirt",
    dateOfCreate: "11.02.2023",
    category: "T-shirts 1",
  },
  {
    id: "1",
    img: "assets/images/shirt.jpg",
    title: "T-shirt",
    dateOfCreate: "11.02.2023",
    category: "T-shirts 1",
  },
  {
    id: "1",
    img: "assets/images/shirt.jpg",
    title: "T-shirt",
    dateOfCreate: "11.02.2023",
    category: "T-shirts 1",
  },
  {
    id: "1",
    img: "assets/images/shirt.jpg",
    title: "T-shirt",
    dateOfCreate: "11.02.2023",
    category: "T-shirts 1",
  },
  {
    id: "1",
    img: "assets/images/shirt.jpg",
    title: "T-shirt",
    dateOfCreate: "11.02.2023",
    category: "T-shirts 1",
  },
  {
    id: "1",
    img: "assets/images/shirt.jpg",
    title: "T-shirt",
    dateOfCreate: "11.02.2023",
    category: "T-shirts 1",
  },
  {
    id: "1",
    img: "assets/images/shirt.jpg",
    title: "T-shirt",
    dateOfCreate: "11.02.2023",
    category: "T-shirts 1",
  },
  {
    id: "1",
    img: "assets/images/shirt.jpg",
    title: "T-shirt",
    dateOfCreate: "11.02.2023",
    category: "T-shirts 1",
  },
  {
    id: "1",
    img: "assets/images/shirt.jpg",
    title: "T-shirt",
    dateOfCreate: "11.02.2023",
    category: "T-shirts 1",
  },
  {
    id: "1",
    img: "assets/images/shirt.jpg",
    title: "T-shirt",
    dateOfCreate: "11.02.2023",
    category: "T-shirts 1",
  },
  {
    id: "1",
    img: "assets/images/shirt.jpg",
    title: "T-shirt",
    dateOfCreate: "11.02.2023",
    category: "T-shirts 1",
  },
  {
    id: "1",
    img: "assets/images/shirt.jpg",
    title: "T-shirt",
    dateOfCreate: "11.02.2023",
    category: "T-shirts 1",
  },
  {
    id: "1",
    img: "assets/images/shirt.jpg",
    title: "T-shirt",
    dateOfCreate: "11.02.2023",
    category: "T-shirts 1",
  },
  {
    id: "2",
    img: "assets/images/shirt.jpg",
    title: "T-shirt",
    dateOfCreate: "24.05.2023",
    category: "T-shirts 2",
  },
];

const categories = Array.from(new Set(data.map((x) => x.category)));
let isDarkTheme = false;

const body = document.querySelector("body");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");
const categoriesLinks = document.querySelector(".ul");
const categoriesLinksFooter = document.querySelector(".footer__ul");
const btnUp = document.querySelector(".btn_up");
const popup = document.querySelector(".popup__wrapper");
const form = document.querySelector(".form");
const message = document.querySelector(".message");
const btnMessage = document.querySelector(".btn_msg");
const btnClose = document.querySelector(".btn_close");
const btnTheme = document.querySelector(".btn_theme");
const countInput = document.getElementById("count");
const colorDefault = document.getElementById("white");
const textarea = document.querySelector(".textarea");
const imgTheme = document.querySelector(".img_theme");

const switchTheme = () => {
  isDarkTheme = !isDarkTheme;
  localStorage.setItem("pi-dark-theme", isDarkTheme);
  body.classList.toggle("dark");
  imgTheme.src = isDarkTheme
    ? " assets/icons/moon.png"
    : "assets/icons/sun.svg";
};

const onSubmit = (e) => {
  e.preventDefault();
  message.style.display = "block";
  form.style.display = "none";
};

const onCountInput = () => {
  countInput.value = countInput.value.toString().replace(/[^0-9]/g, "");
  if (countInput.value === "0") {
    countInput.value = 1;
  }
};

const onScroll = () => {
  btnUp.style.display = window.scrollY === 0 ? "none" : "flex";
};

const goUp = () => {
  scrollTo(0, 0);
};

const openPopup = () => {
  popup.style.display = "flex";
  body.style.overflow = "hidden";
  body.style.height = "100vh";
  message.style.display = "none";
  form.style.display = "flex";
  textarea.value = "";
  countInput.value = "1";
  colorDefault.checked = true;
};

const closePopup = (e) => {
  e.preventDefault();
  popup.style.display = "none";
  body.style.overflow = "auto";
};

const getDayInfo = (str) => {
  const date = new Date(str.split(".").reverse().join("."));
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDate();
  const weekNum = Math.ceil((2 + Math.floor(date.getDate() - firstDay)) / 7);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const res = date
    .toLocaleDateString("ru-RU", options)
    .replace("г.", "года")
    .replace(date.getDate(), weekNum + " неделя ");
  return res;
};

const addLink = (name) => {
  const li = document.createElement("li");
  const link = document.createElement("a");
  link.className = "link";
  link.textContent = name;
  link.href = `#${name}`;
  li.append(link);
  categoriesLinks.append(li);
  const footerLi = li.cloneNode(true);
  categoriesLinksFooter.append(footerLi);
};

const addCategory = (name) => {
  const section = document.createElement("section");
  const sectionName = document.createElement("h2");
  sectionName.className = "h2";
  sectionName.textContent = name;
  section.id = name;
  const cardsContainer = document.createElement("div");
  cardsContainer.className = "cards";
  section.append(sectionName, cardsContainer);
  const cards = data.filter((item) => item.category === name);
  cards.map((item) => {
    addCard(item, cardsContainer);
  });
  main.append(section);
};

const addCard = (item, parent) => {
  const card = document.createElement("div");
  card.className = "card";
  const img = document.createElement("img");
  img.src = item.img;
  img.alt = item.title;
  img.className = "img";
  const cardInfo = document.createElement("div");
  cardInfo.className = "card__info";
  const title = document.createElement("h4");
  title.textContent = item.title;
  const date = document.createElement("p");
  date.textContent = getDayInfo(item.dateOfCreate);
  const btn = document.createElement("button");
  btn.textContent = "Купить";
  btn.className = "btn btn_buy";
  btn.addEventListener("click", openPopup);
  cardInfo.append(title, date, btn);
  card.append(img, cardInfo);
  parent.append(card);
};

categories.map((category) => {
  addLink(category);
  addCategory(category);
});

window.addEventListener("scroll", onScroll);
btnUp.addEventListener("click", goUp);
countInput.addEventListener("input", onCountInput);
form.addEventListener("submit", onSubmit);
btnMessage.addEventListener("click", closePopup);
btnClose.addEventListener("click", closePopup);
btnTheme.addEventListener("click", switchTheme);

if (localStorage.getItem("pi-dark-theme") === "true") {
  switchTheme();
}
