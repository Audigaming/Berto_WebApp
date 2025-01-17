document.addEventListener('DOMContentLoaded', function() {
    // Create the cursor dot element
    var cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    document.body.appendChild(cursorDot);

    // Update the dot's position on mousemove
    document.addEventListener('mousemove', function(e) {
        cursorDot.style.left = e.pageX + 'px';
        cursorDot.style.top = e.pageY + 'px';
    });

    // Video and play icon functionality
    const video = document.getElementById('myVideo');
    const playIcon = document.getElementById('playIcon');

    video.addEventListener('mousemove', function(event) {
        // Show the play icon
        playIcon.style.display = 'block';

        // Position the play icon at the cursor within the video
        const rect = video.getBoundingClientRect();
        const x = event.clientX - rect.left; // X coordinate relative to video
        const y = event.clientY - rect.top;  // Y coordinate relative to video

        playIcon.style.left = `${x + rect.left}px`; // Use absolute positioning relative to viewport
        playIcon.style.top = `${y + rect.top}px`;
    });

    video.addEventListener('mouseout', function() {
        playIcon.style.display = 'none';
    });

    playIcon.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            playIcon.textContent = '||'; // Change to pause icon
        } else {
            video.pause();
            playIcon.textContent = '▶️'; // Change to play icon
        }
    });
});
