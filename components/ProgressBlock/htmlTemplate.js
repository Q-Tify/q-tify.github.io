const htmlTemplate = document.createElement('template');

htmlTemplate.innerHTML = `
    <link rel="stylesheet" href="/components/ProgressBlock/styles.css">
    <div class="progress-container">
        <svg class="progress-ring" width="120" height="120">
            <circle
                stroke="#e0e6ef"
                stroke-width="10"
                cx="60"
                cy="60"
                r="55"
                fill="transparent" />
            <circle
                class="progress-ring__circle"
                stroke="#005bff"
                stroke-width="10"
                cx="60"
                cy="60"
                r="55"
                fill="transparent" />
        </svg>
    </div>
`;

export default htmlTemplate;
