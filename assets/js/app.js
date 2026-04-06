// SPA Navigation Function
function showSection(id) {
  // Hide all sections
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  
  // Remove active state from all sidebar nav links
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  
  // Show target section
  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
    // Scroll the main container to the top
    document.getElementById('main').scrollTop = 0;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // Highlight the correct nav link in the sidebar
  document.querySelectorAll('.nav-link').forEach(link => {
    const onClickAttr = link.getAttribute('onclick');
    if (onClickAttr && onClickAttr.includes(id)) {
      link.classList.add('active');
    }
  });
  
  // Always close sidebar on mobile after clicking
  closeSidebar();
}

// Mobile Hamburger & Overlay Logic
const burger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

if (burger && sidebar && overlay) {
    burger.addEventListener('click', () => {
      const isOpen = sidebar.classList.contains('open');
      if (isOpen) { closeSidebar(); } else { openSidebar(); }
    });
    overlay.addEventListener('click', closeSidebar);
}

function openSidebar() {
  sidebar.classList.add('open');
  burger.classList.add('open');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden'; // prevent background scrolling
}

function closeSidebar() {
  sidebar.classList.remove('open');
  burger.classList.remove('open');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Reading Progress Bar
const progressBar = document.getElementById('progress-bar');
window.addEventListener('scroll', () => {
  if (!progressBar) return;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docH = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docH > 0 ? (scrollTop / docH) * 100 : 0;
  progressBar.style.width = pct + '%';
});

// Back to Top Button
const backTop = document.getElementById('back-top');
window.addEventListener('scroll', () => {
  if (!backTop) return;
  backTop.classList.toggle('visible', window.scrollY > 400);
});
if (backTop) {
    backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// Interactive Quiz Logic
// Attach to window object so inline onclick handlers in HTML can find it
window.handleQuiz = function(event, correctAns) {
  const li = event.target.closest('li');
  if (!li) return;
  
  const list = li.parentElement;
  
  // Prevent answering multiple times per question
  if (list.dataset.answered) return;
  list.dataset.answered = true;

  const chosen = li.dataset.ans;
  
  // Evaluate all options
  list.querySelectorAll('li').forEach(item => {
    if (item.dataset.ans === correctAns) {
      item.classList.add('correct');
    } else if (item === li && chosen !== correctAns) {
      item.classList.add('wrong');
    }
    // Disable further clicking
    item.style.pointerEvents = 'none';
  });
};

// Initialize app to show cover page on load
document.addEventListener('DOMContentLoaded', () => {
  showSection('sec-cover');
});