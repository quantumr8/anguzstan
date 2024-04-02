document.addEventListener('DOMContentLoaded', function() {
    const pledgeButton = document.getElementById('pledge-button');
    const qrCode = document.getElementById('qr-code');

    pledgeButton.addEventListener('click', function() {
        qrCode.classList.toggle('hidden');
    });

    // Generate random stats
    const statsContainer = document.querySelector('.stats-container');
    const stats = [
        { label: 'Uranium Mined', value: 0 },
        { label: 'Enrichment Output', value: 0 },
        { label: 'Reactors Built', value: 0 },
        { label: 'Energy Generated', value: 0 }
    ];

    function updateStats() {
        statsContainer.innerHTML = '';
        stats.forEach(stat => {
            // Add a random increment or decrement to the current value
            const change = Math.floor(Math.random() * 200) - 100; // Change will be a value between -100 and 100
            stat.value = Math.max(0, stat.value + change); // Ensure the value doesn't go below 0

            const statElement = document.createElement('div');
            statElement.innerHTML = `<h4>${stat.label}</h4><p>${stat.value}</p>`;
            statsContainer.appendChild(statElement);
        });
    }

    setInterval(updateStats, 2000);
});