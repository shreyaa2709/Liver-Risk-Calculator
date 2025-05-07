const questions = [
    {
      question: "1. How balanced is your daily diet according to Ayurvedic principles?",
      options: [
        { text: "Very balanced, home-cooked sattvic meals", score: 10 },
        { text: "Mostly healthy, occasional indulgences", score: 7 },
        { text: "Irregular meals, often processed or spicy", score: 4 },
        { text: "Junk food, late eating, poor digestion", score: 1 },
      ],
    },
    {
      question: "2. How often do you experience digestive issues?",
      options: [
        { text: "Never", score: 10 },
        { text: "Occasionally", score: 7 },
        { text: "Often", score: 4 },
        { text: "Daily", score: 1 },
      ],
    },
    {
      question: "3. Do you follow a consistent daily routine?",
      options: [
        { text: "Always", score: 10 },
        { text: "Mostly", score: 7 },
        { text: "Irregular routine", score: 4 },
        { text: "Very erratic", score: 1 },
      ],
    },
    {
      question: "4. Do you consume alcohol, smoke, or use recreational drugs?",
      options: [
        { text: "Never", score: 10 },
        { text: "Rarely", score: 7 },
        { text: "Occasionally", score: 4 },
        { text: "Frequently", score: 1 },
      ],
    },
    {
      question: "5. How is your emotional state?",
      options: [
        { text: "Calm, balanced", score: 10 },
        { text: "Minor stress", score: 7 },
        { text: "Often angry, irritable or anxious", score: 4 },
        { text: "Highly stressed/irritable regularly", score: 1 },
      ],
    },
    {
      question: "6. Do you regularly detox using Ayurvedic methods?",
      options: [
        { text: "Yes, seasonal detox or daily support", score: 10 },
        { text: "Occasionally", score: 7 },
        { text: "Rarely", score: 4 },
        { text: "Never", score: 1 },
      ],
    },
    {
      question: "7. Are you taking medicines without supervision?",
      options: [
        { text: "No", score: 10 },
        { text: "Herbal only, occasionally", score: 7 },
        { text: "Regular OTC drugs", score: 4 },
        { text: "Daily without guidance", score: 1 },
      ],
    },
    {
      question: "8. How often do you feel sluggish, tired, or heavy during the day?",
      options: [
        { text: "Rarely or never", score: 10 },
        { text: "Sometimes", score: 7 },
        { text: "Often", score: 4 },
        { text: "Daily", score: 1 },
      ],
    },
    {
      question: "9. How frequently do you consume oily, spicy, fermented, or reheated foods?",
      options: [
        { text: "Very rarely", score: 10 },
        { text: "1–2 times a week", score: 7 },
        { text: "3–5 times a week", score: 4 },
        { text: "Almost daily", score: 1 },
      ],
    },
    {
      question: "10. Do you engage in daily physical activity?",
      options: [
        { text: "Yes, daily", score: 10 },
        { text: "3–4 times a week", score: 7 },
        { text: "Occasionally", score: 4 },
        { text: "Rarely", score: 1 },
      ],
    },
  ];
  
  let currentQuestion = 0;
  let totalScore = 0;
  
  const startBtn = document.getElementById("start-btn");
  const questionBox = document.getElementById("question-box");
  const progress = document.getElementById("progress");
  const resultScreen = document.getElementById("result-screen");
  const scoreEl = document.getElementById("score");
  const interpretationEl = document.getElementById("interpretation");
  
  startBtn.addEventListener("click", () => {
    document.querySelector(".start-screen").classList.add("hidden");
    document.querySelector(".quiz-container").classList.remove("hidden");
    showQuestion();
  });
  
  function showQuestion() {
    const q = questions[currentQuestion];
    questionBox.innerHTML = `
      <h3>${q.question}</h3>
      ${q.options
        .map(
          (opt, i) => `<div class="option" onclick="selectOption(${opt.score})">${opt.text}</div>`
        )
        .join("")}
    `;
  
    progress.style.width = `${((currentQuestion) / questions.length) * 100}%`;
  }
  
  function selectOption(score) {
    totalScore += score;
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    document.querySelector(".quiz-container").classList.add("hidden");
    resultScreen.classList.remove("hidden");
    scoreEl.textContent = totalScore;
  
    let interpretation = "";
    if (totalScore >= 81) {
      interpretation = "🌿 Excellent (Swastha Avastha): Maintain healthy habits and consider seasonal detox.";
    } else if (totalScore >= 61) {
      interpretation = "🧘‍♂️ Moderate (Vikruti Developing): Improve lifestyle and consider Ayurvedic tonics like Triphala.";
    } else if (totalScore >= 41) {
      interpretation = "⚠️ At Risk (Ama Accumulating): Consider Ayurvedic consultation and routine correction.";
    } else {
      interpretation = "🚨 High Risk (Dushti Avastha): Immediate detox and herbs like Kutki, Kalmegh are advised.";
    }
  
    interpretationEl.textContent = interpretation;
  }
  