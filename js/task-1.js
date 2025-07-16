const categories = document.querySelector('#categories');
const totalCaregories = categories.querySelectorAll('li.item');

  console.log(`Number of categories: ${totalCaregories.length}`);

totalCaregories.forEach(i => {
  const title = i.querySelector('h2').textContent;
  const count = i.querySelectorAll('ul li').length
  console.log(`Category: ${title}`);
  console.log(`Elements: ${count}`);
  
}
)
