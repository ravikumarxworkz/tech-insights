export const posts = [
  {
    id: "reverse-number",
    title: "Reverse a Number",
    category: "DSA",
    description: "Reverse digits of a number using logic",
    date: "2026-02-05",

    content: {
      explanation:
        "Reversing a number means extracting digits one by one and building the result.",

      code: {
        java: `
int n = 1234;
int rev = 0;

while (n > 0) {
  rev = rev * 10 + n % 10;
  n = n / 10;
}

System.out.println(rev);
        `,

        python: `
n = 1234
rev = 0

while n > 0:
    rev = rev * 10 + n % 10
    n //= 10

print(rev)
        `,

        javascript: `
let n = 1234;
let rev = 0;

while (n > 0) {
  rev = rev * 10 + (n % 10);
  n = Math.floor(n / 10);
}

console.log(rev);
        `
      }
    }
  }
];
