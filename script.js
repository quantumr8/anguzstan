document.addEventListener('DOMContentLoaded', function() {
    const pledgeButton = document.getElementById('pledge-button');
    const qrCode = document.getElementById('qr-code');

    pledgeButton.addEventListener('click', function() {
        qrCode.classList.toggle('hidden');
    });

    // Generate random stats
    const statsContainer = document.querySelector('.stats-container');
    const stats = [
        { label: 'Uranium Mined', value: Math.floor(Math.random() * 1000) },
        { label: 'Enrichment Output', value: Math.floor(Math.random() * 1000) },
        { label: 'Reactors Built', value: 1 },
        { label: 'Energy Generated', value: Math.floor(Math.random() * 1000) }
    ];

    function updateStats() {
        statsContainer.innerHTML = '';
        stats.forEach(stat => {
            if (stat.label !== "Reactors Built"){
                // Add a random increment to the current value
                const change = Math.floor(Math.random() * 100); // Change will be a value between 0 and 100
                stat.value += change;
            }

            const statElement = document.createElement('div');
            statElement.innerHTML = `<h4>${stat.label}</h4><p>${stat.value}</p>`;
            statsContainer.appendChild(statElement);
        });
    }

    setInterval(updateStats, 2000);
});