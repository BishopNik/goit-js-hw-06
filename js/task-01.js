const numberOfCategories = Array.from(document.querySelector('#categories').children);
console.log(`Number of categories: ${numberOfCategories.length}`)
console.log('');
numberOfCategories.forEach(function(cat) {
    console.log(`Category: ${cat.querySelector('h2').textContent}`);
    console.log(`Elements: ${cat.querySelectorAll('li').length}`);
    console.log('');
});

