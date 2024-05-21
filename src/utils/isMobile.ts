export function isMobile(): boolean {
    const userAgent = typeof window.navigator === 'undefined' ? '' : window.navigator.userAgent;
    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i;
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    return mobileRegex.test(userAgent) || screenWidth <= 768;
}