document.addEventListener('DOMContentLoaded', function() {
    
    loadPoems();

    
    document.getElementById('poemForm').addEventListener('submit', function(event) {
        event.preventDefault(); 

        
        let poem = document.getElementById('poem').value.trim();
        let author = document.getElementById('author').value.trim();

        
        if (poem !== '' && author !== '') {
          
            savePoem(poem, author);

          
            displayPoem(poem, author);

           
            document.getElementById('poem').value = '';
            document.getElementById('author').value = '';
        } else {
          
            alert('Please enter both a poem and an author.');
        }
    });

   
    document.getElementById('poemCardContainer').addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-btn')) {
          
            deletePoem(event.target.parentElement);
            
            event.target.parentElement.remove();
        }
    });
});

function loadPoems() {
   
    if(localStorage.getItem('poems')) {
        
        let poems = JSON.parse(localStorage.getItem('poems'));

        
        poems.forEach(poem => {
            displayPoem(poem.poem, poem.author);
        });
    }
}

function savePoem(poem, author) {
    
    let poems = localStorage.getItem('poems') ? JSON.parse(localStorage.getItem('poems')) : [];

    
    poems.push({ poem: poem, author: author });

    
    localStorage.setItem('poems', JSON.stringify(poems));
}

function displayPoem(poem, author) {
    
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <p><strong>Poem:</strong> ${poem}</p>
        <p><strong>Author:</strong> ${author}</p>
        <button class="delete-btn">Delete</button>
    `;

   
    document.getElementById('poemCardContainer').appendChild(card);
}

function deletePoem(card) {
    let poems = JSON.parse(localStorage.getItem('poems'));
    let poemIndex = Array.from(card.parentElement.children).indexOf(card);

    
    poems.splice(poemIndex, 1);

    
    localStorage.setItem('poems', JSON.stringify(poems));
}


