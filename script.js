
// Plan generieren
function generatePlan() {
  const days = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];
  const calendar = document.getElementById('calendar');
  calendar.innerHTML = '';
  for (let i = 0; i < 28; i++) {
    const dayBox = document.createElement('div');
    dayBox.className = 'day';
    const dayName = days[i % 7];
    dayBox.innerHTML = `
      <strong>${dayName}</strong><br>
      <div class="mittagslot">Mittag: Gericht ${i+1}</div>
      <div class="abendslot">Abend: Gericht ${i+29}</div>
    `;
    calendar.appendChild(dayBox);
  }
}

// Plan speichern
function savePlan() {
  let planText = '';
  const days = document.querySelectorAll('.day');
  days.forEach(day => {
    planText += day.innerText + '\n\n';
  });
  const blob = new Blob([planText], { type: 'text/plain;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'essenplan.txt';
  a.click();
}
