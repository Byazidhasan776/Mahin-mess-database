
document.addEventListener("DOMContentLoaded", function () {
  const memberTable = document.getElementById("member-table");
  for (let i = 1; i <= 14; i++) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>📷</td>
      <td contenteditable="true">Member ${i}</td>
      <td contenteditable="true">0</td>
      <td contenteditable="true">0</td>
      <td contenteditable="true">0</td>
      <td contenteditable="true">0</td>
      <td contenteditable="true">0</td>
      <td contenteditable="true">0</td>
      <td contenteditable="true">01XXXXXXXXX</td>
      <td>🔍</td>
    `;
    memberTable.appendChild(row);
  }

  const msg = document.getElementById("admin-message");
  const noti = document.getElementById("admin-notification");

  // Load saved data
  if (localStorage.getItem("admin_msg")) {
    msg.value = localStorage.getItem("admin_msg");
    noti.innerText = localStorage.getItem("admin_msg");
  }

  msg.addEventListener("input", function () {
    localStorage.setItem("admin_msg", msg.value);
    noti.innerText = msg.value;
  });
});
