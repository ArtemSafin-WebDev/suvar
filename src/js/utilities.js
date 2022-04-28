export function convertRemToPixels(rem) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

export function isMobile() {
    return window.matchMedia("(max-width: 640px)").matches;
}

