// script.js
document.addEventListener('DOMContentLoaded', function () {
    fetchCandidates();
});

function fetchCandidates() {
    fetch('/api/voting/candidates')
        .then(response => response.json())
        .then(data => {
            const candidateSelect = document.getElementById('candidateSelect');
            data.forEach(candidate => {
                const option = document.createElement('option');
                option.value = candidate.id;
                option.text = candidate.name;
                candidateSelect.add(option);
            });
        });
}

function castVote() {
    const candidateId = document.getElementById('candidateSelect').value;
    const voterId = prompt('Enter your voter ID:'); // For simplicity; replace with proper authentication
    const vote = { candidateId, voterId };

    fetch('/api/voting/vote', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(vote),
    })
        .then(response => response.text())
        .then(message => alert(message));
}
