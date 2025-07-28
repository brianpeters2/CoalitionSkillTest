fetch('https://fedskillstest.coalitiontechnologies.workers.dev')
  .then(res => res.json())
  .then(data => {
    const jessica = data.find(p => p.name === "Jessica Taylor");
    if (jessica) {
      displayPatientInfo(jessica);
      displayChart(jessica.diagnosis_history);
    }
  });

.catch(err => {
    console.error("Fetch error:", err);
  });
