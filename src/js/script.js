const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})

// FOR REG NO BUTTON IN BLOG_CONTENT MD SCREEN SIZE AND ABOVE
{/* <script>
document.addEventListener('DOMContentLoaded', function() {
    const regNoInput = document.getElementById('reg-no');
    const submitButton = document.getElementById('submit-button');

    // Clear placeholder on click
    regNoInput.addEventListener('click', function() {
        this.placeholder = '';
    });

    // Restore placeholder if input is empty on blur
    regNoInput.addEventListener('blur', function() {
        if (this.value === '') {
            this.placeholder = 'ENTER REG NO';
        }
    });

    // Handle form submission
    submitButton.addEventListener('click', function() {
        // Add your form submission logic here
        // For example, you can access the input value like this:
        const regNo = regNoInput.value;
        // Then proceed with your form submission process
        // Note: You may need to prevent the default form submission behavior using event.preventDefault()
    });
});
</script> */}

{/* <script> */}
// document.addEventListener('DOMContentLoaded', function() {
//     const regNoInput = document.getElementById('reg-no');
//     const submitButton = document.getElementById('submit-button');

//     // Clear placeholder on click
//     regNoInput.addEventListener('click', function() {
//         this.placeholder = '';
//     });

//     // Restore placeholder if input is empty on blur
//     regNoInput.addEventListener('blur', function() {
//         if (this.value === '') {
//             this.placeholder = 'ENTER REG NO';
//         }
//     });

//     // Handle form submission
//     submitButton.addEventListener('click', function() {
//         const regNo = regNoInput.value;
//         // Proceed with your form submission process
//         // For example, you can submit the form using JavaScript
//         // form.submit();
//     });
// });
// </script>


// For the ENTER YOUR REG BUTTON ON HOMEPAGE AND BLOG-CONTENT
document.getElementById("submit-button").addEventListener("click", function() {
    var regNoInput = document.getElementById("reg-no");
    var regNo = regNoInput.value;
    // Here you can perform whatever action you want with the submitted value, such as sending it to the server
    console.log("Submitted value: ", regNo);
    // Clear the input value
    regNoInput.value = "";
});

document.addEventListener('DOMContentLoaded', function() {
    const regNoInput = document.getElementById('reg-no');

    // Clear placeholder on click
    regNoInput.addEventListener('click', function() {
        this.placeholder = '';
    });

    // Restore placeholder if input is empty on blur
    regNoInput.addEventListener('blur', function() {
        if (this.value === '') {
            this.placeholder = 'ENTER REG NO';
        }
    });
});



// document.addEventListener('DOMContentLoaded', function() {
//     const regForm = document.getElementById('reg-form');
//     const regNoInput = document.getElementById('reg-no');

//     // Clear placeholder on click
//     regNoInput.addEventListener('click', function() {
//         this.placeholder = '';
//     });

//     // Restore placeholder if input is empty on blur
//     regNoInput.addEventListener('blur', function() {
//         if (this.value === '') {
//             this.placeholder = 'ENTER REG NO';
//         }
//     });

//     // Handle form submission
//     regForm.addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevent default form submission
//         const regNo = regNoInput.value;
//         // Proceed with your form submission process
//         // For example, you can submit the form using JavaScript
//         // form.submit();
//     });
// });


// PAGINATION

        document.addEventListener("DOMContentLoaded", function () {
            const table = document.getElementById('data-table');
            const rowsPerPage = 5;
            let currentPage = 1;
        
            function showPage(pageNumber) {
                const startIndex = (pageNumber - 1) * rowsPerPage;
                const endIndex = startIndex + rowsPerPage;
                const rows = table.querySelectorAll('tr');
                
                rows.forEach((row, index) => {
                    if (index >= startIndex && index < endIndex) {
                        row.style.display = '';
                    } else {
                        row.style.display = 'none';
                    }
                });
            }
        
            function generatePaginationButtons(totalPages) {
                const paginationNav = document.getElementById('pagination');
                paginationNav.innerHTML = '';
        
                const prevButton = document.createElement('button');
                prevButton.textContent = 'Previous';
                prevButton.addEventListener('click', () => {
                    if (currentPage > 1) {
                        currentPage--;
                        showPage(currentPage);
                    }
                });
                paginationNav.appendChild(prevButton);
        
                for (let i = 1; i <= totalPages; i++) {
                    const pageButton = document.createElement('button');
                    pageButton.textContent = i;
                    pageButton.addEventListener('click', () => {
                        currentPage = i;
                        showPage(currentPage);
                    });
                    paginationNav.appendChild(pageButton);
                }
        
                const nextButton = document.createElement('button');
                nextButton.textContent = 'Next';
                nextButton.addEventListener('click', () => {
                    if (currentPage < totalPages) {
                        currentPage++;
                        showPage(currentPage);
                    }
                });
                paginationNav.appendChild(nextButton);
            }
        
            // Initially show first page
            showPage(1);
        
            // Assuming your table has at least one row (header row)
            const totalRows = table.rows.length - 1;
            const totalPages = Math.ceil(totalRows / rowsPerPage);
            generatePaginationButtons(totalPages);
        });
        
        


// CRITICAL CHECK FUNTIONALITY (COLLAPSE AND EXPAND) HOMEPAGE AND PRICING PAGE
// scripts.js
// document.addEventListener('DOMContentLoaded', function () {
//     const viewToggle = document.getElementById('checklist-toggle');
//     const critical_checks = document.querySelectorAll('.checklist');

//     // Initially hide all critical_checks except the first 4
//     critical_checks.forEach((question, index) => {
//         question.style.maxHeight = '0';
//         question.style.opacity = '0';
//         question.style.overflow = 'hidden';
//     });

//     // Toggle visibility of hidden critical_checks on "View All" click
//     viewToggle.addEventListener('click', function () {
//         critical_checks.forEach((question, index) => {
//             if (question.style.maxHeight === '0px') {
//                 question.style.maxHeight = question.scrollHeight + 'px';
//                 question.style.opacity = '1';
//                 question.style.overflow = 'visible';
//             } else {
//                 question.style.maxHeight = '0';
//                 question.style.opacity = '0';
//                 question.style.overflow = 'hidden';
//             }
//         });

//         // Change text based on visibility
//         const isVisible = critical_checks[4].style.maxHeight !== '0px';
//         viewToggle.textContent = isVisible ? '- Important Checks' : '+ Important Checks';
//     });
// });

// document.addEventListener('DOMContentLoaded', function () {
//     const viewToggle = document.getElementById('checklist-toggle');
//     const critical_checks = document.querySelectorAll('.checklist');
    
//     // Initially hide all critical_checks except the first 4
//     critical_checks.forEach((question, index) => {
//         if (index >= 4) {
//         question.style.maxHeight = '0';
//         question.style.opacity = '0';
//         question.style.overflow = 'hidden';
//         }
//     });

//     // Toggle visibility of hidden critical_checks on "View All" click
//     viewToggle.addEventListener('click', function () {
//         critical_checks.forEach((question, index) => {
//             if (index >= 4) {
//             if (question.style.maxHeight === '0px') {
//                 question.style.maxHeight = question.scrollHeight + 'px';
//                 question.style.opacity = '1';
//                 question.style.overflow = 'visible';
//             } else {
//                 question.style.maxHeight = '0';
//                 question.style.opacity = '0';
//                 question.style.overflow = 'hidden';
//             }
//             }
//         });

//         // Change text based on visibility
//         const isVisible = critical_checks[4].style.maxHeight !== '0px';
//         viewToggle.textContent = isVisible ? '- Important Checks' : '+ Important Checks';
//     });
// });
