// FAQ
// document.addEventListener('DOMContentLoaded', function() {
//     const viewToggle = document.getElementById('view-toggle');
//     const questions = document.querySelectorAll('.question');

//     // Initially hide all questions except the first 4
//     questions.forEach((question, index) => {
//         if (index >= 4) {
//             question.classList.add('hidden');
//         }
//     });

//     // Toggle visibility of hidden questions on "View All" click
//     viewToggle.addEventListener('click', function() {
//         questions.forEach((question, index) => {
//             if (index >= 4) {
//                 question.classList.toggle('hidden');
//             }
//         });

//         // Change text based on visibility
//         const isVisible = !questions[4].classList.contains('hidden');
//         viewToggle.textContent = isVisible ? 'VIEW LESS' : 'VIEW ALL';
//     });
// });
{/* <script> */}
document.addEventListener('DOMContentLoaded', function () {
    const viewToggle = document.getElementById('viewallfaq');
    const questions = document.querySelectorAll('.a_question');
    
    // Initially hide all questions except the first 4
    questions.forEach((question, index) => {
    if (index >= 4) {
    question.style.maxHeight = '0';
    question.style.opacity = '0';
    question.style.overflow = 'hidden';
    }
    });
    
    // Toggle visibility of hidden questions on "View All" click
    viewToggle.addEventListener('click', function () {
    questions.forEach((question, index) => {
        if (index >= 4) {
        if (question.style.maxHeight === '0px') {
            question.style.maxHeight = question.scrollHeight + '20px';
            question.style.opacity = '1';
            question.style.overflow = 'visible';
        } else {
            question.style.maxHeight = '0';
            question.style.opacity = '0';
            question.style.overflow = 'hidden';
        }
        }
    });
    
    // Change text based on visibility
    const isVisible = questions[4].style.maxHeight !== '0px';
    viewToggle.textContent = isVisible ? 'VIEW LESS' : 'VIEW MORE';
    });
    });
    
    {/* </script> */}