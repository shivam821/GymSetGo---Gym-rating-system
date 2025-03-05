// let inputName = document.getElementById('input-name');
// let inputReview = document.getElementById('input-review');
// let submit = document.getElementById('submit');
// let reviews = document.getElementById('reviews');

// submit.addEventListener('click', function(){
//     var reviewContainer = document.createElement('div');
//     reviewContainer.classList.add('review');

//     var nameParagraph = document.createElement('p');
//     nameParagraph.classList.add('name-styling');
//     nameParagraph.innerText = inputName.value;

//     var reviewParagraph = document.createElement('p');
//     reviewParagraph.classList.add('review-styling');
//     reviewParagraph.innerText = inputReview.value;

//     var hr = document.createElement('hr');
//     hr.classList.add('review-separator');

//     reviewContainer.appendChild(hr);
//     reviewContainer.appendChild(nameParagraph);
//     reviewContainer.appendChild(reviewParagraph);
//     reviewContainer.appendChild(hr);
//     reviews.appendChild(reviewContainer);

//     inputName.value = "";
//     inputReview.value = "";
// });

// document.getElementById('form-group').addEventListener('submit',function(event){
//     const inputName = document.getElementById('input-name');
//     const inputReview = document.getElementById('input-review');

//     localStorage.setItem('input-name',inputName);
//     localStorage.setItem('input-review',inputReview);

//     alert('Data Saved');

// });








// let inputName = document.getElementById('input-name');
// let inputReview = document.getElementById('input-review');
// let submit = document.getElementById('submit');
// let reviews = document.getElementById('reviews');

// submit.addEventListener('click', function(){
//     var reviewContainer = document.createElement('div');
//     reviewContainer.classList.add('review');

//     var nameParagraph = document.createElement('p');
//     nameParagraph.classList.add('name-styling');
//     nameParagraph.innerText = inputName.value;

//     var reviewParagraph = document.createElement('p');
//     reviewParagraph.classList.add('review-styling');
//     reviewParagraph.innerText = inputReview.value;

//     var hr = document.createElement('hr');
//     hr.classList.add('review-separator');

//     reviewContainer.appendChild(hr);
//     reviewContainer.appendChild(nameParagraph);
//     reviewContainer.appendChild(reviewParagraph);
//     reviewContainer.appendChild(hr);
//     reviews.appendChild(reviewContainer);

//     inputName.value = "";
//     inputReview.value = "";
// });

// document.getElementById('review-form').addEventListener('submit', function(event){
//     event.preventDefault();
//     const inputName = document.getElementById('input-name').value;
//     const inputReview = document.getElementById('input-review').value;

//     localStorage.setItem('input-name', inputName);
//     localStorage.setItem('input-review', inputReview);

//     alert('Data Saved');
// });















let inputName = document.getElementById('input-name');
let inputReview = document.getElementById('input-review');
let submit = document.getElementById('submit');
let reviews = document.getElementById('reviews');

submit.addEventListener('click', function(){
    var reviewContainer = document.createElement('div');
    reviewContainer.classList.add('review');

    var nameParagraph = document.createElement('p');
    nameParagraph.classList.add('name-styling');
    nameParagraph.innerText = inputName.value;

    var reviewParagraph = document.createElement('p');
    reviewParagraph.classList.add('review-styling');
    reviewParagraph.innerText = inputReview.value;

    var hr = document.createElement('hr');
    hr.classList.add('review-separator');

    reviewContainer.appendChild(hr);
    reviewContainer.appendChild(nameParagraph);
    reviewContainer.appendChild(reviewParagraph);
    reviews.appendChild(reviewContainer);

    inputName.value = "";
    inputReview.value = "";
});

document.getElementById('review-form').addEventListener('submit', function(event){
    event.preventDefault();
    const inputName = document.getElementById('input-name').value;
    const inputReview = document.getElementById('input-review').value;

    localStorage.setItem('input-name', inputName);
    localStorage.setItem('input-review', inputReview);

    alert('Data Saved');
});

