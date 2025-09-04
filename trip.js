document.addEventListener("DOMContentLoaded", () => {
  const tripForm = document.getElementById("tripForm");
  const activitiesList = document.getElementById("activitiesList");
  const addActivityBtn = document.getElementById("addActivityBtn");
  const activityInput = document.getElementById("activityInput");
  const tripOutput = document.getElementById("tripOutput");
  const tripDetails = document.getElementById("tripDetails");

  let activities = [];

  // Add activity
  addActivityBtn.addEventListener("click", () => {
    const activity = activityInput.value.trim();
    if (activity) {
      activities.push(activity);
      renderActivities();
      activityInput.value = "";
    }
  });

  // Render activities
  function renderActivities() {
    activitiesList.innerHTML = "";
    activities.forEach((act, index) => {
      const li = document.createElement("li");
      li.textContent = act;
      li.addEventListener("click", () => {
        activities.splice(index, 1);
        renderActivities();
      });
      activitiesList.appendChild(li);
    });
  }

  // Generate Trip Plan
  tripForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const destination = document.getElementById("destination").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const travelers = document.getElementById("travelers").value;
    const budget = document.getElementById("budget").value;

    tripDetails.innerHTML = `
      <div class="trip-card">
        <h3>Destination: ${destination}</h3>
        <p><strong>Dates:</strong> ${startDate} → ${endDate}</p>
        <p><strong>Travelers:</strong> ${travelers}</p>
        <p><strong>Budget:</strong> ₹${budget}</p>
        <p><strong>Activities:</strong> ${activities.length ? activities.join(", ") : "No activities added"}</p>
      </div>
    `;

    tripOutput.style.display = "block";
  });
});
