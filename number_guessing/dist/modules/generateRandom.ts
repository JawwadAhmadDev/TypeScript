export const generateRandomNumber_lessThan = (limit: number): number => {
    return Math.floor(Math.random() * limit + 1);
}