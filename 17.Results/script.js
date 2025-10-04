let semesterCount = 0;
let semesterData = [];
const subjectsPerSemester = 7; // <-- Updated to 7 subjects

function addSemester() {
  semesterCount++;
  let container = document.getElementById("semesters");

  let semesterDiv = document.createElement("div");
  semesterDiv.classList.add("semester");
  semesterDiv.setAttribute("id", "semester" + semesterCount);

  let tableRows = '';
  for (let i = 1; i <= subjectsPerSemester; i++) {
    tableRows += `
      <tr>
        <td><input type="text" value="Subject ${i}"></td>
        <td><input type="number" value="100"></td>
        <td><input type="number" class="marks"></td>
      </tr>`;
  }

  semesterDiv.innerHTML = `
    <h3>Semester ${semesterCount}</h3>
    <table>
      <thead>
        <tr>
          <th>Subject</th>
          <th>Max Marks</th>
          <th>Marks Obtained</th>
        </tr>
      </thead>
      <tbody>
        ${tableRows}
      </tbody>
    </table>
    <button onclick="calculateSemester(${semesterCount})">Calculate Semester Result</button>
    <div class="result-box" id="result${semesterCount}">
      <p>Total Marks: <span>0</span></p>
      <p>Percentage: <span>0%</span></p>
      <p>CGPA: <span>0</span></p>
    </div>
  `;

  container.appendChild(semesterDiv);
}

function calculateSemester(semId) {
  let semesterDiv = document.getElementById("semester" + semId);
  let marks = semesterDiv.querySelectorAll(".marks");
  let totalMarks = 0, maxMarks = 0;

  marks.forEach(row => {
    let obtained = parseInt(row.value) || 0;
    let max = parseInt(row.parentElement.previousElementSibling.firstElementChild.value) || 0;
    totalMarks += obtained;
    maxMarks += max;
  });

  let percentage = (totalMarks / maxMarks) * 100;
  let cgpa = (percentage / 9.5).toFixed(2);

  semesterData[semId - 1] = parseFloat(cgpa);

  let resultBox = semesterDiv.querySelector("#result" + semId);
  resultBox.innerHTML = `
    <p>Total Marks: <span>${totalMarks} / ${maxMarks}</span></p>
    <p>Percentage: <span>${percentage.toFixed(2)}%</span></p>
    <p>CGPA: <span>${cgpa}</span></p>
  `;
}

function calculateOverall() {
  let totalCgpa = semesterData.reduce((sum, val) => sum + val, 0);
  let avgCgpa = (totalCgpa / semesterData.length).toFixed(2);

  document.getElementById("avgCgpa").textContent = avgCgpa;
}
