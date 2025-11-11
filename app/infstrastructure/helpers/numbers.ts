export const getRandomNumber = (minNumber = 1, maxNumber = 10) => {

    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
};
