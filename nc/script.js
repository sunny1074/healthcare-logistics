
document.addEventListener('DOMContentLoaded', () => {
    const technicianSelect = document.getElementById('technician');
    const bookingForm = document.getElementById('bookingForm');
    const bookingList = document.getElementById('bookingList');

    const technicians = ['John Doe', 'Jane Smith', 'Robert Brown'];

    technicians.forEach(tech => {
        const option = document.createElement('option');
        option.value = tech;
        option.textContent = tech;
        technicianSelect.appendChild(option);
    });

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const testName = document.getElementById('testName').value;
        const date = document.getElementById('date').value;
        const location = document.getElementById('location').value;
        const technician = document.getElementById('technician').value;

        const bookingItem = document.createElement('li');
        bookingItem.textContent = `${testName} - ${date} - ${location} - Technician: ${technician}`;
        bookingList.appendChild(bookingItem);

        bookingForm.reset();
    });
});