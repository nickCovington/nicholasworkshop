const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row.seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();

let ticketPrice = parseInt(movieSelect.value);




// save selected movie and price
function setMovieData(movieIndex, moviePrice){
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}



function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    // LOCAL STORAGE
    // @@@@@@@@@@@@@@   (currently, local storage for the seat selection is broken :c)

    // get index of selected seats
    const seatsIndex = [...selectedSeats].map(seat => 
        [...seats].indexOf(seat)
    );

    // save selected seats to local storage
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));





    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}


// get data from local storage and show on screen
function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if(selectedSeats !== null && selectedSeats.length > 0){
        seats.forEach((seat, index) => {
            if(selectedSeats.indexOf(index) > -1){
                seat.classList.add('selected');
            }
        })
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if(selectedMovieIndex !== null ){
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}



// changing movie selection
movieSelect.addEventListener('change', e => {
    ticketPrice = parseInt(e.target.value);
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
});


// clicking on seats to add them to total
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
});



// initialize counts and stuff on page load
updateSelectedCount();
