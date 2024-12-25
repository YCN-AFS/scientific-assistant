let currentGrade = null;
let currentSubject = 'physics';

// Dữ liệu mẫu cho topics và videos
const sampleData = {
    physics: {
        6: {
            topics: ['Chuyển động cơ học', 'Lực và áp suất', 'Công và năng lượng'],
            videos: [
                { title: 'Chuyển động thẳng đều', url: '#' },
                { title: 'Lực ma sát', url: '#' }
            ]
        },
        // Thêm dữ liệu cho các lớp khác
    },
    // Thêm dữ liệu cho các môn khác
};

function selectGrade(grade) {
    // Reset active state
    document.querySelectorAll('.grade-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Find and activate clicked button
    const clickedButton = [...document.querySelectorAll('.grade-btn')]
        .find(btn => btn.textContent.includes(`Lớp ${grade}`));
    if (clickedButton) {
        clickedButton.classList.add('active');
    }

    currentGrade = grade;
    loadTopics(grade);
    loadVideos(grade);
}

function loadTopics(grade) {
    const topics = sampleData[currentSubject]?.[grade]?.topics || [];
    const topicsGrid = document.getElementById('topicsGrid');
    topicsGrid.innerHTML = '';
    
    topics.forEach(topic => {
        const topicDiv = document.createElement('div');
        topicDiv.className = 'topic-item';
        topicDiv.textContent = topic;
        topicsGrid.appendChild(topicDiv);
    });
}

function loadVideos(grade) {
    const videos = sampleData[currentSubject]?.[grade]?.videos || [];
    const videoGrid = document.getElementById('videoGrid');
    videoGrid.innerHTML = '';
    
    videos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';
        videoCard.innerHTML = `
            <h4>${video.title}</h4>
            <a href="${video.url}" target="_blank" rel="noopener noreferrer">
                <i class="fas fa-play-circle"></i> Xem video
            </a>
        `;
        videoGrid.appendChild(videoCard);
    });
}

function selectSubject(subject) {
    currentSubject = subject;
    document.querySelectorAll('.subject-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const selectedBtn = document.querySelector(`[data-subject="${subject}"]`);
    if (selectedBtn) {
        selectedBtn.classList.add('active');
    }
    document.getElementById('currentSubject').textContent = `Môn học: ${getSubjectName(subject)}`;
    
    if (currentGrade) {
        loadTopics(currentGrade);
        loadVideos(currentGrade);
    }
}

function getSubjectName(subject) {
    const names = {
        'physics': 'Vật lý',
        'chemistry': 'Hóa học',
        'biology': 'Sinh học'
    };
    return names[subject] || subject;
}