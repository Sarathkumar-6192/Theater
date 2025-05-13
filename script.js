const seatContainer = document.getElementById('seat-container');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

const ROWS = 6;
const COLS = 12;

// Fake data: Occupied seats
const occupiedSeats = [3, 5, 12, 13, 26, 30, 45];

function createSeats() {
  for (let i = 0; i < ROWS * COLS; i++) {
    const seat = document.createElement('div');
    seat.classList.add('seat');
    if (occupiedSeats.includes(i)) {
      seat.classList.add('occupied');
    }
    seat.dataset.index = i;
    seatContainer.appendChild(seat);
  }
}

function updateSummary() {
  const selectedSeats = document.querySelectorAll('.seat.selected');
  const selectedCount = selectedSeats.length;
  const ticketPrice = +movieSelect.value;

  count.textContent = selectedCount;
  total.textContent = selectedCount * ticketPrice;
}

seatContainer.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');
    updateSummary();
  }
});

movieSelect.addEventListener('change', updateSummary);

// Initialize
createSeats();
updateSummary();

