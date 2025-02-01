async function loadLeaderboard() {
    const response = await fetch('leaderboard.csv');
    const data = await response.text();
    const rows = data.split("\n").slice(1); // Skip header

    const tableBody = document.querySelector("#leaderboard tbody");
    tableBody.innerHTML = ""; // Clear previous data

    rows.forEach(row => {
        const cols = row.split(",");
        if (cols.length === 3) {  // Ensure valid row
            const tr = document.createElement("tr");
            cols.forEach(col => {
                const td = document.createElement("td");
                td.textContent = col.trim();
                tr.appendChild(td);
            });
            tableBody.appendChild(tr);
        }
    });
}

// Load leaderboard when the page loads
window.onload = loadLeaderboard;
