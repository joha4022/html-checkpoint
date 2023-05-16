var input = document.getElementById('data-search');

input.addEventListener('keypress', function(event) {
    if(event.key === 'Enter') {
        event.preventDefault();
        search();
    }
})

// create a search function and search the document
function search() {
    var searchValue = document.getElementById('data-search').value;
    var newDiv = document.createElement('div');
    var newButton = document.createElement('a');
    const movieList = document.getElementsByClassName('moviePoster');
    var noneMatch = [];

    console.log(`searching for ${searchValue}`);
    
    // searches the entire movieList
    for(let i = 0; i < movieList.length; i++) {
        if(movieList[i].id === searchValue) {
            console.log(`we have a match for ${searchValue} ${i}`);
        } else {
            noneMatch.push(i);
        }
    }
    // hide other movies
    for(let j = 0; j < noneMatch.length; j++) {
        movieList[noneMatch[j]].style.display = 'none';
    }
    // insert clear search on main page
    document.body.insertBefore(newDiv, document.getElementById('movieList'));
    newDiv.setAttribute('id', 'resetBar');
    newDiv.appendChild(newButton);
    newButton.setAttribute('id', 'resetButton');
    newButton.innerText = 'Back to main page';
    newButton.style.display = 'flex';
    newButton.style.justifyContent = 'space-around';
    newButton.style.marginTop = '20px';
    newButton.style.textDecoration = 'none';
    newButton.setAttribute('href', './index.html')
}