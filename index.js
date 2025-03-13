const itemInput = document.getElementById('item-input');
const addItemBtn = document.getElementById('add-item-btn');
const itemList = document.getElementById('item-list');

function addItem() {
    const itemText = itemInput.value.trim();
    if (itemText === '') {
      alert('Please enter a task!');
      return;
    }
}

 const shoppingItem = document.createElement('li')
 shoppingItem.className = 'shopItem';

 const itemTextSpan = document.createElement('span');
  itemTextSpan.textContent = itemList;
  shoppingItem.appendChild(itemTextSpan);

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    itemList.removeChild(shopItem);
  });
  shoppingItem.appendChild(deleteBtn);