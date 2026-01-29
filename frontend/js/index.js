const API_BASE = "http://localhost:5000/api";

/* ================= SUBMIT COMPLAINT ================= */
const form = document.getElementById("complaintForm");
if (form) {
  const anonCheck = document.getElementById("anonymous");
  const userFields = document.getElementById("userFields");

  anonCheck.addEventListener("change", () => {
    userFields.classList.toggle("hidden", anonCheck.checked);
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("anonymous", anonCheck.checked);

    try {
      const res = await axios.post(`${API_BASE}/complaints`, formData);
      document.getElementById("msg").innerText =
        "Complaint submitted successfully. ID: " + res.data.complaintId;
      form.reset();
    } catch (err) {
      document.getElementById("msg").innerText =
        "Error submitting complaint";
    }
  });
}

/* ================= TRACK COMPLAINT + MAP ================= */
async function trackComplaint() {
  const id = document.getElementById("cid").value;
  const result = document.getElementById("result");
  const mapBox = document.getElementById("mapBox");
  const mapFrame = document.getElementById("mapFrame");

  if (!id) {
    result.innerHTML = "<p>Please enter Complaint ID</p>";
    return;
  }

  try {
    const res = await axios.get(
      `${API_BASE}/complaints/search/${id}`
    );

    const d = res.data;

    result.innerHTML = `
      <p><b>Status:</b> ${d.status}</p>
      <p><b>Category:</b> ${d.category}</p>
      <p><b>Priority:</b> ${d.priority}</p>
      <p><b>Location:</b> ${d.incidentLocation}</p>
    `;

    if (d.incidentLocation) {
      mapBox.style.display = "block";
      mapFrame.src =
        "https://www.google.com/maps?q=" +
        encodeURIComponent(d.incidentLocation) +
        "&output=embed";
    }
  } catch {
    result.innerHTML = "<p>Complaint not found</p>";
    mapBox.style.display = "none";
  }
}

/* ================= ADMIN DASHBOARD ================= */
async function loadAdmin() {
  const rows = document.getElementById("rows");
  if (!rows) return;

  const res = await axios.get(`${API_BASE}/complaints`);
  let total = 0, pending = 0, resolved = 0, anon = 0;

  res.data.forEach(c => {
    total++;
    if (c.status === "pending") pending++;
    if (c.status === "resolved") resolved++;
    if (c.anonymous) anon++;

    rows.innerHTML += `
      <tr onclick="location.href='admin-detail.html?id=${c.id}'">
        <td>${c.id}</td>
        <td>${c.category}</td>
        <td>${c.status}</td>
        <td>${c.priority}</td>
        <td>${c.anonymous ? "Yes" : "No"}</td>
      </tr>
    `;
  });

  document.getElementById("totalCount").innerText = total;
  document.getElementById("pendingCount").innerText = pending;
  document.getElementById("resolvedCount").innerText = resolved;
  document.getElementById("anonymousCount").innerText = anon;
}

loadAdmin();

/* ================= ADMIN DETAIL ================= */
async function loadDetail() {
  const app = document.getElementById("app");
  if (!app) return;

  const id = new URLSearchParams(window.location.search).get("id");
  const res = await axios.get(`${API_BASE}/complaints/search/${id}`);
  const d = res.data;

  app.innerHTML = `
    <h3>Complaint ID: ${id}</h3>
    <p><b>Description:</b> ${d.description}</p>
    <p><b>Status:</b> ${d.status}</p>
    <p><b>Category:</b> ${d.category}</p>
    <p><b>Location:</b> ${d.incidentLocation}</p>
  `;
}

loadDetail();
