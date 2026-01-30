// Get Form
const form = document.getElementById("complaintForm");

// Form Submit Event
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get Values
  const description = document.getElementById("description").value;
  const category = document.getElementById("category").value;
  const incidentDate = document.getElementById("incidentDate").value;
  const location = document.getElementById("location").value;

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  const files = document.getElementById("file").files;

  // Create FormData (For File Upload)
  const formData = new FormData();

  formData.append("description", description);
  formData.append("category", category);
  formData.append("incidentDate", incidentDate);
  formData.append("incidentLocation", location);

  formData.append("name", name);
  formData.append("email", email);
  formData.append("phone", phone);

  // Multiple Files Upload
  for (let i = 0; i < files.length; i++) {
    formData.append("files", files[i]);
  }

  try {
    const response = await fetch("http://localhost:3000/api/complaints", {
      method: "POST",
      body: formData
    });

    const result = await response.json();

    if (result.success) {
      alert("✅ Complaint Submitted Successfully!\nID: " + result.data.complaintId);
      form.reset();
    } else {
      alert("❌ Submission Failed");
    }

  } catch (error) {
    console.error(error);
    alert("⚠ Server Error");
  }
});
