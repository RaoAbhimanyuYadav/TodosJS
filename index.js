const addForm = document.querySelector(".add");
const list = document.querySelector(".list-group");
const search = document.querySelector(".search input");

const generateTemplate = (todo) => {
  const html = `<li class="list-group-item">${todo} <span class="delete nav justify-content-end">D</span></li>
    `;
  list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  todo = addForm.add.value.trim();
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

const filterTodo = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => {
      todo.classList.add("filtered");
    });
  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodo(term);
});

// const result = Array.from(list.children).filter((todo) => {
//   console.log(todo.textContent.includes("A"));
//   return todo.textContent;
// });
// console.log(result);
