// Seeded random number generator for consistent results
const seededRandom = function (seed) {
    const m = 2**35 - 31;
    const a = 185852;
    let s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
};

// Backup API functions that will be used if the external API fails to load
export const fetchAPI = function(date) {
    // First try to use the external API if it's available
    if (window.fetchAPI) {
        return window.fetchAPI(date);
    }

    // Fallback implementation
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

export const submitAPI = function(formData) {
    // First try to use the external API if it's available
    if (window.submitAPI) {
        return window.submitAPI(formData);
    }

    // Fallback implementation
    return true; // Simulates successful submission
};