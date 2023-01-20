// variabila menu este definita in data.js

// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
});

function diplayMenuItems(menuItems) {
    let displayMenu =menuItems.map(function(item)
   return` <article class="menu-item">
    <img src="./img/item-10.jpeg" alt="menu item" class="photo" />
    <div class="item-info">
      <header>
        <h4>buttermilk pancakes</h4>
        <h4 class="price">15 RON</h4>
      </header>
      <p class="item-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
        laboriosam excepturi! Quo, officia.
      </p>
    </div>
  </article>`
   
}
function displayMenuButtons(){
    const categories = menu.reduce(
        function(values, item){
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
        },["all"]
    )


const categoryBtns = categories.map(function(category,index){
    let btr_nr ='btn'+(index+1);
    const categoryRo ={
        all:'Tot',
        breakfast:'Mic Dejun',
        lunch:'Pranz',
        dinner:'Cina',
        shakes:'Bauturi',
     }
return `<button typr="button" class"filter-btn" data-id${category} data-nr${btn_nr}></button>
`})
.join("");


const filterBtns= btnContainer.querySelectorAll(".filter-btn");
filterBtns.forEach(function(btn){
btn.addEventListener("click",function(e){
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function(menuItem){
        if(menuItem.category===category){
            return menuItem;
        }
    });
    if (category ==="all"){
        diplayMenuItems(menu);
    }   else{
        diplayMenuItems(menuCategory);
    }
});
})






}
function displayMenuButtons() {
    
   
}