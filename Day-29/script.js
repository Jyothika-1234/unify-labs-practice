const posts = [
    { title: "Verification Process", tag: "debugging", date: "24 Feb 2025", desc: "Complete the debugging by 25 Feb." },
    { title: "Building a REST API", tag: "testing", date: "24 Feb 2025", desc: "It is very important." },
    { title: "My First Zenith Post", tag: "internship", date: "24 Feb 2025", desc: "API working." }
];

const container = document.getElementById('posts-container');

function renderPosts() {
    container.innerHTML = posts.map(post => `
        <div class="post-card">
            <div style="display:flex; justify-content:space-between;">
                <span class="badge"># ${post.tag}</span>
                <small>${post.date}</small>
            </div>
            <h3>${post.title}</h3>
            <p>${post.desc}</p>
            <div class="btn-group">
                <button>Read</button>
                <button>Edit</button>
                <button class="btn-delete">Delete</button>
            </div>
        </div>
    `).join('');
}

renderPosts();