async function loadDashboard() {
    const res = await fetch("http://localhost:3000/api/complaints");
    const result = await res.json();
    const complaints = result.data;

    let submitted = 0, investigating = 0, resolved = 0;

    const tbody = document.getElementById("tableBody");
    tbody.innerHTML = "";

    complaints.forEach(c => {
        if (c.status === "submitted") submitted++;
        if (c.status === "under_investigation") investigating++;
        if (c.status === "resolved") resolved++;

        tbody.innerHTML += `
            <tr>
                <td>${c.complaintId}</td>
                <td>${c.category}</td>
                <td>${c.status}</td>
                <td>${c.priority}</td>
                <td>${c.submittedAt}</td>
            </tr>
        `;
    });

    document.getElementById("total").innerText = complaints.length;
    document.getElementById("submitted").innerText = submitted;
    document.getElementById("investigating").innerText = investigating;
    document.getElementById("resolved").innerText = resolved;
}

function logout() {
    localStorage.removeItem("adminLoggedIn");
    window.location.href = "admin-login.html";
}

loadDashboard();
