export function generateUniqueId(name: string) {
    const getRandomLetter = () => name[Math.floor(Math.random() * name.length)];
    const getRandomNumber = () => Math.floor(1000 + Math.random() * 9000); // Гарантирует, что число будет четырехзначным

    const twoLetters = getRandomLetter() + getRandomLetter();
    const fourNumbers = getRandomNumber();

    return `${twoLetters}-${fourNumbers}`;
}