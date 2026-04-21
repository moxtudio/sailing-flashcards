const allCards = [
  { front: "Port", back: "The left side of the boat when facing forward (toward the bow).", category: "Terminology" },
  { front: "Starboard", back: "The right side of the boat when facing forward (toward the bow).", category: "Terminology" },
  { front: "Bow", back: "The front of the boat.", category: "Terminology" },
  { front: "Stern", back: "The back of the boat.", category: "Terminology" },
  { front: "Beam", back: "The widest part of the boat; also used to describe a direction at a right angle to the boat's centerline.", category: "Terminology" },
  { front: "Windward", back: "The side of the boat closest to the wind; the direction from which the wind is blowing.", category: "Terminology" },
  { front: "Leeward", back: "The side of the boat away from the wind; the direction the wind is blowing toward.", category: "Terminology" },
  { front: "Heading up", back: "Turning the bow of the boat toward the wind.", category: "Terminology" },
  { front: "Bearing away", back: "Turning the bow of the boat away from the wind.", category: "Terminology" },
  { front: "Helm", back: "The steering apparatus of a boat (tiller or wheel), and the position of the person steering.", category: "Terminology" },

  { front: "Tacking", back: "Turning the bow of the boat through the wind so that the wind changes from one side of the boat to the other.", category: "Points of Sail" },
  { front: "Jibing (Gybing)", back: "Turning the stern of the boat through the wind so that the wind changes from one side to the other.", category: "Points of Sail" },
  { front: "Close hauled", back: "Sailing as close to the wind as possible, about 45 degrees off the wind.", category: "Points of Sail" },
  { front: "Close reach", back: "Sailing with the wind coming from forward of the beam (between close hauled and beam reach).", category: "Points of Sail" },
  { front: "Beam reach", back: "Sailing with the wind coming directly over the beam (side) of the boat at a 90 degree angle.", category: "Points of Sail" },
  { front: "Broad reach", back: "Sailing with the wind coming from behind the beam but not directly astern.", category: "Points of Sail" },
  { front: "Running", back: "Sailing directly downwind, with the wind coming from behind the stern.", category: "Points of Sail" },
  { front: "In irons", back: "Stuck pointing directly into the wind with the sails luffing and no forward momentum.", category: "Points of Sail" },
  { front: "No-go zone", back: "The roughly 45 degree arc directly into the wind where a sailboat cannot sail.", category: "Points of Sail" },

  { front: "Mast", back: "The vertical spar that supports the sails.", category: "Parts of Boat" },
  { front: "Boom", back: "The horizontal spar that extends from the mast along the foot of the mainsail.", category: "Parts of Boat" },
  { front: "Rudder", back: "The underwater blade at the stern used to steer the boat.", category: "Parts of Boat" },
  { front: "Tiller", back: "The lever or handle attached to the rudder used to steer the boat.", category: "Parts of Boat" },
  { front: "Keel", back: "The weighted fin below the hull that provides stability and prevents the boat from slipping sideways.", category: "Parts of Boat" },
  { front: "Hull", back: "The main body or watertight shell of the boat.", category: "Parts of Boat" },
  { front: "Cockpit", back: "The area where the crew sits and controls the boat.", category: "Parts of Boat" },
  { front: "Mainsail", back: "The primary sail attached along the mast and boom.", category: "Parts of Boat" },
  { front: "Jib", back: "The triangular sail set forward of the mast.", category: "Parts of Boat" },
  { front: "Genoa", back: "A large jib that overlaps the mainsail behind the mast.", category: "Parts of Boat" },
  { front: "Halyard", back: "The line used to raise (hoist) a sail up the mast.", category: "Parts of Boat" },
  { front: "Sheet", back: "The line used to control the angle (trim) of a sail relative to the wind.", category: "Parts of Boat" },
  { front: "Stay", back: "A wire or rope that supports the mast in the fore-and-aft direction.", category: "Parts of Boat" },
  { front: "Shroud", back: "A wire or rope that supports the mast from side to side.", category: "Parts of Boat" },
  { front: "Winch", back: "A mechanical device used to pull in and tension lines under heavy load.", category: "Parts of Boat" },

  { front: "Bowline", back: "A knot that forms a fixed loop at the end of a line; called the king of knots.", category: "Knots" },
  { front: "Figure 8", back: "A stopper knot tied at the end of a line to keep it from running out through a block or fairlead.", category: "Knots" },
  { front: "Cleat hitch", back: "The knot used to secure a line to a cleat, typically a wrap, figure-eight, and locking hitch.", category: "Knots" },
  { front: "Clove hitch", back: "A knot used to temporarily secure a line to a post, rail, or piling.", category: "Knots" },
  { front: "Round turn and two half hitches", back: "A secure knot for tying a line to a ring, post, or piling under load.", category: "Knots" },
  { front: "Reef knot (Square knot)", back: "A knot used to join two lines of equal diameter; commonly used to tie in a reef.", category: "Knots" },

  { front: "Port tack", back: "Sailing with the wind coming over the port side of the boat; the boom is on the starboard side.", category: "Right of Way" },
  { front: "Starboard tack", back: "Sailing with the wind coming over the starboard side of the boat; the boom is on the port side.", category: "Right of Way" },
  { front: "Starboard tack rule", back: "When two boats on opposite tacks meet, the boat on starboard tack has right of way.", category: "Right of Way" },
  { front: "Windward rule", back: "When two boats on the same tack meet, the leeward boat has right of way over the windward boat.", category: "Right of Way" },
  { front: "Overtaking rule", back: "A boat overtaking another must keep clear of the boat being overtaken.", category: "Right of Way" },
  { front: "Sail vs. power", back: "Generally, a sailing vessel has right of way over a powerboat, with exceptions for large ships, fishing vessels, and restricted-maneuverability craft.", category: "Right of Way" },

  { front: "PFD", back: "Personal Flotation Device - a life jacket worn to keep a person afloat in the water.", category: "Safety" },
  { front: "MOB", back: "Man Overboard - the emergency situation and recovery procedure when a person falls into the water.", category: "Safety" },
  { front: "Heave to", back: "A technique to effectively stop the boat by backing the jib against the wind and lashing the tiller to leeward.", category: "Safety" },
  { front: "Reefing", back: "Reducing the area of a sail to lessen the force of the wind on the boat in strong conditions.", category: "Safety" },
  { front: "EPIRB", back: "Emergency Position Indicating Radio Beacon - a device that transmits a distress signal with GPS location to rescue services.", category: "Safety" },
  { front: "VHF radio", back: "Very High Frequency marine radio used for ship-to-ship and ship-to-shore communication, including distress calls on channel 16.", category: "Safety" },

  { front: "Apparent wind", back: "The wind felt on the moving boat - a combination of true wind and the wind created by the boat's motion.", category: "Weather" },
  { front: "True wind", back: "The actual wind speed and direction measured from a stationary point.", category: "Weather" },
  { front: "Gust", back: "A sudden brief increase in wind speed.", category: "Weather" },
  { front: "Lull", back: "A temporary decrease in wind speed.", category: "Weather" },
  { front: "Header", back: "A wind shift that forces the boat to bear away from its course or to tack.", category: "Weather" },
  { front: "Lift", back: "A favorable wind shift that allows the boat to head up closer to its destination.", category: "Weather" },

  { front: "Knot (speed)", back: "A unit of speed equal to one nautical mile per hour (about 1.15 mph or 1.85 km/h).", category: "Navigation" },
  { front: "Bearing", back: "The direction from one point to another, measured in degrees from north.", category: "Navigation" }
];

let deck = allCards.map(c => ({ ...c, status: null }));
let currentCat = "All";
let studyIdx = 0;
let quizIdx = 0;
let mode = "study";
let flipped = false;
let quizAnswers = {};

function renderCatBar() {
  const bar = document.getElementById("catBar");
  const cats = ["All", ...Array.from(new Set(allCards.map(c => c.category)))];
  bar.innerHTML = "";
  cats.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "cat-btn" + (cat === currentCat ? " active" : "");
    btn.textContent = cat;
    btn.onclick = () => {
      currentCat = cat;
      filterDeck();
      renderCatBar();
      updateView();
    };
    bar.appendChild(btn);
  });
}

function filterDeck() {
  deck = currentCat === "All"
    ? allCards.map(c => ({ ...c, status: null }))
    : allCards.filter(c => c.category === currentCat).map(c => ({ ...c, status: null }));
  studyIdx = 0;
  quizIdx = 0;
  quizAnswers = {};
  flipped = false;
}

function updateCounter() {
  const idx = mode === "study" ? studyIdx : quizIdx;
  const total = deck.length;
  document.getElementById("counter").textContent = `${total === 0 ? 0 : idx + 1} / ${total}`;
  const pct = total === 0 ? 0 : ((idx + 1) / total) * 100;
  document.getElementById("progressFill").style.width = pct + "%";
}

function shuffleDeck() {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  studyIdx = 0;
  quizIdx = 0;
  flipped = false;
  updateView();
}

function setMode(m) {
  mode = m;
  document.getElementById("studyModeBtn").classList.toggle("active", m === "study");
  document.getElementById("quizModeBtn").classList.toggle("active", m === "quiz");
  const diagramBtn = document.getElementById("diagramModeBtn");
  if (diagramBtn) diagramBtn.classList.toggle("active", m === "diagram");
  document.getElementById("studyArea").classList.toggle("hidden", m !== "study");
  document.getElementById("quizArea").classList.toggle("hidden", m !== "quiz");
  const diagramArea = document.getElementById("diagramArea");
  if (diagramArea) diagramArea.classList.toggle("hidden", m !== "diagram");
  const progressRow = document.getElementById("progressRow");
  const catBar = document.getElementById("catBar");
  if (progressRow) progressRow.style.display = m === "diagram" ? "none" : "";
  if (catBar) catBar.style.display = m === "diagram" ? "none" : "";
  flipped = false;
  updateView();
}

function updateView() {
  if (mode === "study") {
    showStudyCard();
    updateCounter();
  } else if (mode === "quiz") {
    document.getElementById("quizScorePanel").style.display = "none";
    document.querySelector(".quiz-card").style.display = "block";
    showQuizCard();
    updateCounter();
  }
}

function showStudyCard() {
  if (deck.length === 0) {
    document.getElementById("frontText").textContent = "No cards in this category.";
    document.getElementById("backText").textContent = "";
    document.getElementById("cardCat").textContent = "";
    document.getElementById("card").classList.remove("flipped");
    updateMarkCounts();
    return;
  }
  const card = deck[studyIdx];
  document.getElementById("frontText").textContent = card.front;
  document.getElementById("backText").textContent = card.back;
  document.getElementById("cardCat").textContent = card.category;
  const backCat = document.getElementById("cardCatBack");
  if (backCat) backCat.textContent = card.category;
  const cardEl = document.getElementById("card");
  if (flipped) cardEl.classList.add("flipped"); else cardEl.classList.remove("flipped");
  updateMarkCounts();
  updateCounter();
}

function updateMarkCounts() {
  const known = deck.filter(c => c.status === "know").length;
  const toStudy = deck.filter(c => c.status === "study").length;
  document.getElementById("knowCount").textContent = known;
  document.getElementById("studyCount").textContent = toStudy;
}

function flipCard() {
  flipped = !flipped;
  document.getElementById("card").classList.toggle("flipped", flipped);
}

function nextCard() {
  if (deck.length === 0) return;
  studyIdx = (studyIdx + 1) % deck.length;
  flipped = false;
  showStudyCard();
  updateCounter();
}

function prevCard() {
  if (deck.length === 0) return;
  studyIdx = (studyIdx - 1 + deck.length) % deck.length;
  flipped = false;
  showStudyCard();
  updateCounter();
}

function markCard(status) {
  if (deck.length === 0) return;
  deck[studyIdx].status = status;
  updateMarkCounts();
  if (studyIdx < deck.length - 1) {
    studyIdx++;
    flipped = false;
    showStudyCard();
    updateCounter();
  }
}

function showQuizCard() {
  if (deck.length === 0) {
    document.getElementById("quizQuestion").textContent = "No cards in this category.";
    document.getElementById("quizCat").textContent = "";
    document.getElementById("quizInput").value = "";
    document.getElementById("resultBox").style.display = "none";
    updateQuizScores();
    return;
  }
  const card = deck[quizIdx];
  document.getElementById("quizQuestion").textContent = card.front;
  document.getElementById("quizCat").textContent = card.category;
  const input = document.getElementById("quizInput");
  const prev = quizAnswers[quizIdx];
  if (prev) {
    input.value = prev.userAnswer;
    input.disabled = true;
    document.getElementById("submitBtn").disabled = true;
    showResult(prev.grade, prev.userAnswer, card.back);
  } else {
    input.value = "";
    input.disabled = false;
    document.getElementById("submitBtn").disabled = false;
    document.getElementById("resultBox").style.display = "none";
  }
  updateQuizScores();
}

function gradeAnswer(user, correct) {
  const stop = new Set(["the","and","for","with","from","that","this","when","where","which","into","over","under","about","your","you","are","not","but","its","has","have","been","was","will","can","than","then","them","they","their","there","also","used"]);
  const tokenize = s => s.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(w => w.length > 2 && !stop.has(w));
  const userWords = new Set(tokenize(user));
  const correctWords = tokenize(correct);
  if (correctWords.length === 0 || userWords.size === 0) return "incorrect";
  const unique = Array.from(new Set(correctWords));
  let matches = 0;
  for (const w of unique) if (userWords.has(w)) matches++;
  const ratio = matches / unique.length;
  if (ratio >= 0.55) return "correct";
  if (ratio >= 0.25) return "partial";
  return "incorrect";
}

function submitAnswer() {
  if (deck.length === 0) return;
  const input = document.getElementById("quizInput");
  const user = input.value.trim();
  if (!user) return;
  const card = deck[quizIdx];
  const grade = gradeAnswer(user, card.back);
  quizAnswers[quizIdx] = { userAnswer: user, grade };
  input.disabled = true;
  document.getElementById("submitBtn").disabled = true;
  showResult(grade, user, card.back);
  updateQuizScores();
  if (Object.keys(quizAnswers).length === deck.length) {
    setTimeout(showFinalScore, 400);
  }
}

function showResult(grade, user, correct) {
  const box = document.getElementById("resultBox");
  box.className = "result-box " + grade;
  box.style.display = "block";
  const header = document.getElementById("resultHeader");
  if (grade === "correct") header.textContent = "Correct!";
  else if (grade === "partial") header.textContent = "Close - partial credit";
  else header.textContent = "Not quite";
  document.getElementById("resultYours").textContent = user;
  document.getElementById("resultAnswer").textContent = correct;
}

function updateQuizScores() {
  const entries = Object.values(quizAnswers);
  const correct = entries.filter(a => a.grade === "correct").length;
  const partial = entries.filter(a => a.grade === "partial").length;
  const wrong = entries.filter(a => a.grade === "incorrect").length;
  document.getElementById("qCorrect").textContent = correct;
  document.getElementById("qWrong").textContent = wrong + partial;
  document.getElementById("qAnswered").textContent = entries.length;
  document.getElementById("qTotal").textContent = deck.length;
}

function nextQuiz() {
  if (deck.length === 0) return;
  quizIdx = (quizIdx + 1) % deck.length;
  showQuizCard();
  updateCounter();
}

function prevQuiz() {
  if (deck.length === 0) return;
  quizIdx = (quizIdx - 1 + deck.length) % deck.length;
  showQuizCard();
  updateCounter();
}

function showFinalScore() {
  const entries = Object.values(quizAnswers);
  const correct = entries.filter(a => a.grade === "correct").length;
  const partial = entries.filter(a => a.grade === "partial").length;
  const wrong = entries.filter(a => a.grade === "incorrect").length;
  const total = deck.length;
  const score = correct + partial * 0.5;
  const pct = total === 0 ? 0 : Math.round((score / total) * 100);
  document.getElementById("quizPct").textContent = pct + "%";
  document.getElementById("finalCorrect").textContent = correct;
  document.getElementById("finalWrong").textContent = wrong + partial;
  document.querySelector(".quiz-card").style.display = "none";
  document.getElementById("resultBox").style.display = "none";
  document.getElementById("quizScorePanel").style.display = "block";
}

function retryAll() {
  quizAnswers = {};
  quizIdx = 0;
  document.getElementById("quizScorePanel").style.display = "none";
  document.querySelector(".quiz-card").style.display = "block";
  showQuizCard();
  updateCounter();
}

function retryMissed() {
  const missedIndices = Object.keys(quizAnswers)
    .filter(k => quizAnswers[k].grade !== "correct")
    .map(k => parseInt(k, 10));
  if (missedIndices.length === 0) {
    retryAll();
    return;
  }
  deck = missedIndices.map(i => ({ ...deck[i], status: null }));
  quizAnswers = {};
  quizIdx = 0;
  document.getElementById("quizScorePanel").style.display = "none";
  document.querySelector(".quiz-card").style.display = "block";
  showQuizCard();
  updateCounter();
}

const diagramPositions = [
  { id: "p1",  angle: 0,    label: "In Irons",     tilt: 0 },
  { id: "p2",  angle: -30,  label: "Close Hauled", tilt: -30 },
  { id: "p3",  angle: 30,   label: "Close Hauled", tilt: 30 },
  { id: "p4",  angle: -60,  label: "Close Reach",  tilt: -60 },
  { id: "p5",  angle: 60,   label: "Close Reach",  tilt: 60 },
  { id: "p6",  angle: -90,  label: "Beam Reach",   tilt: -90 },
  { id: "p7",  angle: 90,   label: "Beam Reach",   tilt: 90 },
  { id: "p8",  angle: -135, label: "Broad Reach",  tilt: -135 },
  { id: "p9",  angle: 135,  label: "Broad Reach",  tilt: 135 },
  { id: "p10", angle: -165, label: "Running",      tilt: 180 },
  { id: "p11", angle: 165,  label: "Running",      tilt: 180 }
];

let diagramState = {};

function boatSvg(tiltDeg) {
  return `
    <svg width="52" height="52" viewBox="-26 -26 52 52" style="transform: rotate(${tiltDeg}deg);">
      <ellipse cx="0" cy="8" rx="18" ry="7" fill="#4ad0e8" stroke="#1e2d6b" stroke-width="1.5"/>
      <polygon points="-2,8 -2,-14 12,6" fill="#cfd7e8" stroke="#1e2d6b" stroke-width="1.2"/>
      <line x1="0" y1="8" x2="0" y2="-16" stroke="#5a3a1a" stroke-width="1.5"/>
    </svg>`;
}

function renderDiagram() {
  const stage = document.getElementById("diagramStage");
  const palette = document.getElementById("palette");
  if (!stage || !palette) return;

  stage.querySelectorAll(".boat-slot").forEach(el => el.remove());
  diagramState = {};

  diagramPositions.forEach(pos => {
    const rad = (pos.angle * Math.PI) / 180;
    const xPct = 50 + 38 * Math.sin(rad);
    const yPct = 50 - 38 * Math.cos(rad);
    const slot = document.createElement("div");
    slot.className = "boat-slot";
    slot.style.left = xPct + "%";
    slot.style.top = yPct + "%";
    slot.innerHTML = `
      <div class="boat-icon">${boatSvg(pos.tilt)}</div>
      <div class="drop-zone" data-zone="${pos.id}" data-expected="${pos.label}">drop here</div>
    `;
    stage.appendChild(slot);
  });

  stage.querySelectorAll(".drop-zone").forEach(zone => {
    zone.addEventListener("dragover", e => { e.preventDefault(); zone.classList.add("drag-over"); });
    zone.addEventListener("dragleave", () => zone.classList.remove("drag-over"));
    zone.addEventListener("drop", e => {
      e.preventDefault();
      zone.classList.remove("drag-over");
      const chipId = e.dataTransfer.getData("text/plain");
      if (!chipId) return;
      dropChipOnZone(chipId, zone.dataset.zone);
    });
    zone.addEventListener("click", () => {
      if (zone.classList.contains("filled")) clearZone(zone.dataset.zone);
    });
  });

  const chips = [];
  const counts = {};
  diagramPositions.forEach(p => { counts[p.label] = (counts[p.label] || 0) + 1; });
  Object.entries(counts).forEach(([label, count]) => {
    for (let i = 0; i < count; i++) {
      chips.push({ id: `chip-${label.replace(/\s+/g, "-").toLowerCase()}-${i}`, label });
    }
  });
  for (let i = chips.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [chips[i], chips[j]] = [chips[j], chips[i]];
  }

  palette.innerHTML = "";
  chips.forEach(chip => {
    const el = document.createElement("div");
    el.className = "chip";
    el.draggable = true;
    el.textContent = chip.label;
    el.dataset.chipId = chip.id;
    el.dataset.label = chip.label;
    el.addEventListener("dragstart", e => {
      e.dataTransfer.setData("text/plain", chip.id);
      el.classList.add("dragging");
    });
    el.addEventListener("dragend", () => el.classList.remove("dragging"));
    palette.appendChild(el);
  });

  updateDiagramScore();
}

function dropChipOnZone(chipId, zoneId) {
  const chip = document.querySelector(`.chip[data-chip-id="${chipId}"]`);
  if (!chip) return;
  const existing = diagramState[zoneId];
  if (existing) returnChip(existing);
  diagramState[zoneId] = chipId;
  chip.classList.add("used");
  const zone = document.querySelector(`.drop-zone[data-zone="${zoneId}"]`);
  zone.textContent = chip.dataset.label;
  zone.classList.remove("correct", "wrong");
  zone.classList.add("filled");
  updateDiagramScore();
}

function clearZone(zoneId) {
  const chipId = diagramState[zoneId];
  if (!chipId) return;
  returnChip(chipId);
  delete diagramState[zoneId];
  const zone = document.querySelector(`.drop-zone[data-zone="${zoneId}"]`);
  zone.textContent = "drop here";
  zone.classList.remove("filled", "correct", "wrong");
  updateDiagramScore();
}

function returnChip(chipId) {
  const chip = document.querySelector(`.chip[data-chip-id="${chipId}"]`);
  if (chip) chip.classList.remove("used");
}

function updateDiagramScore() {
  const placed = Object.keys(diagramState).length;
  const total = diagramPositions.length;
  const el = document.getElementById("diagramScore");
  if (el) {
    el.textContent = `${placed} / ${total} placed`;
    el.classList.remove("all-correct");
  }
}

function checkDiagram() {
  let correct = 0;
  diagramPositions.forEach(pos => {
    const chipId = diagramState[pos.id];
    const zone = document.querySelector(`.drop-zone[data-zone="${pos.id}"]`);
    if (!chipId) {
      zone.classList.remove("correct", "wrong");
      return;
    }
    const chip = document.querySelector(`.chip[data-chip-id="${chipId}"]`);
    const label = chip ? chip.dataset.label : "";
    if (label === pos.label) {
      zone.classList.add("correct");
      zone.classList.remove("wrong");
      correct++;
    } else {
      zone.classList.add("wrong");
      zone.classList.remove("correct");
    }
  });
  const el = document.getElementById("diagramScore");
  const total = diagramPositions.length;
  if (el) {
    el.textContent = `${correct} / ${total} correct`;
    el.classList.toggle("all-correct", correct === total);
  }
}

function resetDiagram() {
  renderDiagram();
}
