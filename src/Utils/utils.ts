export function formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    console.log(seconds, mins, secs);
    if (mins < 1) {
        return `${(mins * 60 + secs)} с`; // полное количество секунд
    } else {
        const formattedMins = mins.toString().padStart(2, "0");
        const formattedSecs = secs.toString().padStart(2, "0");
        return `${formattedMins} мин ${formattedSecs} с`;
    }
}
