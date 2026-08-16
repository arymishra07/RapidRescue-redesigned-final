const rules = [
  ["unconscious", 5, "Unconscious / unresponsive"],
  ["bleeding", 5, "Severe bleeding"],
  ["breathing", 5, "Breathing difficulty"],
  ["trauma", 4, "Major accident / serious trauma"],
  ["chest", 4, "Chest-pain-like emergency"],
  ["multiple", 4, "Multiple seriously injured people"],
  ["severePain", 2, "Severe pain / suspected major injury"],
  ["minor", 1, "Minor injury"]
];
export function priorityEngine(answers = {}) {
  const reasons = [];
  let score = 0;
  for (const [key, points, label] of rules) if (answers[key] === true) { score += points; reasons.push(`${label} +${points}`); }
  const level = score >= 5 ? "RED" : score >= 2 ? "YELLOW" : "GREEN";
  return { score, level, reasons };
}
