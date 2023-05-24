const data = [
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
    dateOfCreate: "11.02.2023",
    category: "T-shirts 2",
  },
];

const categories = Array.from(new Set(data.map((x) => x.category)));

const main = document.querySelector(".main");
const categoriesLinks = document.querySelector(".ul");

const addLink = (name) => {
  const li = document.createElement("li");
  const link = document.createElement("a");
  link.className = "link";
  link.textContent = name;
  link.href = `#${name}`;
  li.append(link);
  categoriesLinks.append(li);
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
  date.textContent = item.dateOfCreate;
  const btn = document.createElement("button");
  btn.textContent = "Купить";
  btn.className = "btn btn_buy";
  cardInfo.append(title, date, btn);
  card.append(img, cardInfo);
  parent.append(card);
};

categories.map((category) => {
  addLink(category);
  addCategory(category);
});
