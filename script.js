const revealMenu = (e) => {
    let menuItems = e.target.firstElementChild;
    menuItems = menuItems.nextElementSibling;
    menuItems.style.display = "flex";
    const arrow = e.target.firstElementChild.firstElementChild.nextElementSibling;
    arrow.style.display = "flex";
}

const hideMenu = (e) => {
    let menuItems = e.target.firstElementChild;
    menuItems = menuItems.nextElementSibling;
    menuItems.style.display = "none";
    const arrow = e.target.firstElementChild.firstElementChild.nextElementSibling;
    arrow.style.display = "none";
}

const makeDropDown = (name) => {
    const menuTop = document.getElementById(`${name}`);
    menuTop.parentElement.addEventListener('mouseenter', revealMenu);
    menuTop.parentElement.addEventListener('mouseleave', hideMenu);
}

const drawMenuElement = (name, itemsArray) => {
    const menuContainer = document.getElementById('menuContainer');
    const menuElement = document.createElement('div');
    menuElement.classList.add('menuElement');
    menuContainer.appendChild(menuElement)
    const menuTop = document.createElement('div');
    menuTop.classList.add('menuTop');
    menuTop.setAttribute('id', `${name}`);
    menuElement.appendChild(menuTop);
    const menuTitle = document.createElement('div');
    menuTitle.textContent = name;
    menuTop.appendChild(menuTitle);
    const arrow = document.createElement('div');
    arrow.setAttribute('id', 'arrow');
    arrow.style.display = 'none';
    arrow.textContent = '⌄';
    menuTop.appendChild(arrow);
    const menuItems = document.createElement('div');
    menuItems.style.display = 'none';
    menuItems.classList.add('menuItems');
    menuItems.setAttribute('id', 'menuItems');
    menuElement.appendChild(menuItems);
    itemsArray.forEach(element => {
        const item = document.createElement('div');
        item.textContent = element;
        menuItems.appendChild(item);
    });
}

const makeDropDownMenu = (name, itemsArray) => {
    drawMenuElement(name, itemsArray);
    makeDropDown(name);
}
//reusable where the menu items are contained 
//in a sibling div to the menu title

const makeNavigation = (menuElementsArray, parentElement) => {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');
    menuContainer.setAttribute('id', 'menuContainer');
    parentElement.appendChild(menuContainer);
    menuElementsArray.forEach(menuElement => {
        makeDropDownMenu(menuElement.name, menuElement.items);
    })
}

const menuElement = (string) => {
    const name = string;
    const items = [];
    return {name, items}
}

const dogsItems = ['rufus', 'lilly', 'Charlie'];
const dogs = menuElement("dogs");
console.log(dogs);
dogs.items = dogsItems;

const flowersItems = ['rose', 'pansy', 'habiscus'];
const flowers = menuElement("flowers");
flowers.items = flowersItems;

const menuElements = [dogs, flowers];

let mainContain = document.getElementsByClassName("mainContain");
mainContain = mainContain[0];

makeNavigation(menuElements, mainContain);


