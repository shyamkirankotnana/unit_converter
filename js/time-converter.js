document.addEventListener('DOMContentLoaded', function() {
    const timezoneSelect = document.getElementById('timezoneSelect');
    const currentTimeDiv = document.getElementById('currentTime');

    // Get all timezones
    const timezones = getAllTimeZones();

    // Populate timezone options
    timezones.forEach(zone => {
        let option = document.createElement('option');
        option.value = zone;
        option.textContent = zone;
        timezoneSelect.appendChild(option);
    });

    // Update time display
    timezoneSelect.addEventListener('change', function() {
        const selectedTimezone = timezoneSelect.value;
        displayCurrentTime(selectedTimezone);
    });

    // Initial display
    displayCurrentTime(timezones[0]);
});

function getAllTimeZones() {
    // Intl API to get all supported timezones
    return Intl.supportedValuesOf('timeZone');
}

function displayCurrentTime(timezone) {
    const currentTimeDiv = document.getElementById('currentTime');
    const now = new Date().toLocaleTimeString('en-US', { timeZone: timezone });
    currentTimeDiv.textContent = `Current time in ${timezone}: ${now}`;
}
