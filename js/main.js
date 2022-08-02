const viandsAssortment = document.querySelector('.viands__assortment');
const itemViands = viandsAssortment.querySelectorAll('.item-viands');
const viandsDescription = viandsAssortment.querySelectorAll('.viands__description');
viandsAssortment.addEventListener('click', ({ target }) => {
    if (itemViands[0].contains(target)) {
        oneItemViands();
    }
    if (itemViands[1].contains(target)) {
        twoItemViands();
    }
    if (itemViands[2].contains(target)) {
        threeItemViands();
    }
});

function oneItemViands() {
    itemViands[0].classList.toggle('item-viands_selected');
    if (containsItem('viands__select_active', viandsDescription[0])) {
        removeAddClass('viands__select_active', 'viands__default_active', viandsDescription[0]);
    } else {
        removeAddClass('viands__default_active', 'viands__select_active', viandsDescription[0]);
    }
}

function twoItemViands() {
    itemViands[1].classList.toggle('item-viands_selected');
    if (containsItem('viands__select_active', viandsDescription[1])) {
        removeAddClass('viands__select_active', 'viands__default_active', viandsDescription[1]);
    } else {
        removeAddClass('viands__default_active', 'viands__select_active', viandsDescription[1]);
    }
}

function threeItemViands() {
    itemViands[2].classList.toggle('item-viands_ended');
    if (containsItem('viands__ended_active', viandsDescription[2])) {
        removeAddClass('viands__ended_active', 'viands__default_active', viandsDescription[2]);
    } else {
        removeAddClass('viands__default_active', 'viands__ended_active', viandsDescription[2]);
    }
}

function containsItem(value, item) {
    return item.classList.contains(value);
}

function removeAddClass(remove, add, item) {
    item.classList.remove(remove);
    item.classList.add(add);
}