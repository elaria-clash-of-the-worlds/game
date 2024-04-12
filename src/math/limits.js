function clamp(min, number, max) {
    return Math.max(min, Math.min(number, max));
}

export default clamp;