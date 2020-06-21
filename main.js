//Select DOM Elements
const tabItem= document.querySelectorAll("#tab");
const tabContentItem= document.querySelectorAll("#tab-content");

//Adding the border if the element is clicked

tabItem.forEach(item => item.addEventListener('click', selectItem))

function removeBorder() {
  tabItem.forEach (item => item.classList.remove('border-bot'))

}

function hideContent()
{
  tabContentItem.forEach(item => item.classList.add('hide-content'));
}


function selectItem(e) {
  //remove the border first
  removeBorder();
  hideContent();

  //add the border beneath the selected element
  this.classList.add('border-bot');
  //display the content
  const tabContent= document.querySelector(`.${this.classList[0]}-content`);
  tabContent.classList.remove('hide-content');

}
