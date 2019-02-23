// Click header for extra title

const h1 = document.querySelector('#page-banner h1');
h1.addEventListener('click', function(e){
	const p = e.target.nextElementSibling;
	p.innerHTML = '<p>Read some books you filthy animal</p>';
});

//Delete list items

const list = document.querySelector('#book-list ul');
list.addEventListener('click', function(e){
	if(e.target.className == 'delete'){
		const li = e.target.parentElement;
		list.removeChild(li);
	}
})

//add books

const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e){
	e.preventDefault();
	const value = addForm.querySelector('input[type="text"]').value;

	if(value != ''){
	//create element
	const li = document.createElement('li');
	const bookName = document.createElement('span');
	const deleteBtn = document.createElement('span');

	//add content 
	bookName.textContent = value;
	deleteBtn.textContent = 'Delete';

	//add classes (2 ways shown)
	bookName.className = 'name';
	deleteBtn.classList.add('delete');

	//append to DOM
	li.appendChild(bookName);
	li.appendChild(deleteBtn);
	list.appendChild(li);
	}
})

//search form

const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
	const term = e.target.value.toLowerCase();
	const books = list.getElementsByTagName('li');
	Array.from(books).forEach(function(book){
		const title = book.firstElementChild.textContent;
		if(title.toLowerCase().indexOf(term) != -1){
			book.style.display = "block";
		}
		else {
			book.style.display = "none";
		}
	})
})