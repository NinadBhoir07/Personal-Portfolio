const projects = [
    {
        id: 01,
        url: "http://127.0.0.1:5501/Projects/projects/ProductLanding.html",
        img: "./mainImages/productlandingpage.png",
        desc: "Product Landing Page",
        category:""
    },
    {
        id: 02,
        url: "http://127.0.0.1:5501/Projects/projects/Surveyform.html",
        img: "./mainImages/surveyform.png",
        desc: "Survey Form Page",
        category:""
    },
    {
        id: 03,
        url: "http://127.0.0.1:5501/Projects/projects/Tributepage.html",
        img: "./mainImages/tributepage.png",
        desc: "Tribute Page",
        category:""
    },
    {
        id: 04,
        url: "http://127.0.0.1:5501/Projects/projects/JS%20documentation.html",
        img: "./mainImages/jsdocumentaion.png",
        desc: "JS documentation Page",
        category:""
    },
    {
        id: 05,
        url: "http://127.0.0.1:5501/Projects/01-color-flipper/setup/index.html",
        img: "./mainImages/colorflipper.png",
        desc: "Color Flipper",
        category:"javascript"
    },
    {
        id: 06,
        url: "http://127.0.0.1:5501/Projects/02-counter/final/index.html",
        img: "./mainImages/counter.png",
        desc: "Counter Project",
        category:"javascript"
    },
    {
        id: 07,
        url: "http://127.0.0.1:5501/Projects/03-reviews/final/index.html",
        img: "./mainImages/reviews.png",
        desc: "Reviews Page",
        category:"javascript"
    },
    {
        id: 08,
        url: "http://127.0.0.1:5501/Projects/08-menu/final/index.html",
        img: "./mainImages/menucard.png",
        desc: "Menu Card",
        category:"javascript"
    },
    {
        id: 09,
        url: "http://localhost:3000/",
        img: "./mainImages/quote generator.png",
        desc: "Random Quote Machine",
        category:"react"
    },
];

// Define parent element

const prjContainer = document.querySelector(".prj-container");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
    displayProjectItems(projects);
})

function displayProjectItems(projectItems) {
    let displayProject = projectItems.map(function (item) {
        return `<div class="col-md-4">
    <article  class="project-desc">
        <a href="${item.url}" target = "_blank">
        <img src="${item.img}" class="img-thumbnail img-fluid" alt="Product Landing Page" />
        <span class="project-title">${item.desc}</span>
        </a>
    </article>
    </div>`;
    });
    displayProject = displayProject.join("");

    prjContainer.innerHTML = displayProject;
}

const filterBtns = btnContainer.querySelectorAll(".filter-btn")
filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function(e){
        const category = e.currentTarget.dataset.id;
        const prjCategory = projects.filter(function(projectItem){
            if(projectItem.category === category){
                return projectItem;
            }
        });
        if(category === 'all'){
            displayProjectItems(projects);
        }else{
            displayProjectItems(prjCategory);
        }
    })
    
});