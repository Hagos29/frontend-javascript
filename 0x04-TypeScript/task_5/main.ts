// task_5/js/main.ts

// MajorCredits interface
interface MajorCredits {
  credits: number;
  // brand property to uniquely identify
  brand: "major";
}

// MinorCredits interface
interface MinorCredits {
  credits: number;
  // brand property to uniquely identify
  brand: "minor";
}

// Function to sum major credits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "major"
  };
}

// Function to sum minor credits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "minor"
  };
}

// ✅ Optional Test
const major1: MajorCredits = { credits: 3, brand: "major" };
const major2: MajorCredits = { credits: 4, brand: "major" };

const minor1: MinorCredits = { credits: 1, brand: "minor" };
const minor2: MinorCredits = { credits: 2, brand: "minor" };

console.log("Sum of major credits:", sumMajorCredits(major1, major2));
console.log("Sum of minor credits:", sumMinorCredits(minor1, minor2));
