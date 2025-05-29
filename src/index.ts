export function greetUser(name: string): string {
  return `Hello, ${name}! Welcome to TypeScript!`;
}

export function getCurrentTimestamp(): string {
  return new Date().toISOString();
}

function main(): void {
  const userName: string = 'World';
  const greeting: string = greetUser(userName);
  const timestamp: string = getCurrentTimestamp();

  console.log(`${greeting}`);
  console.log(`Current time: ${timestamp}`);
  console.log('🚀 TypeScript Hello World project is running successfully!');
}

main();
