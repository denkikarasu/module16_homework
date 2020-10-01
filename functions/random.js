export function random(min, max) {
    if(min > max) {
        return "Данные неверны";
    }
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };