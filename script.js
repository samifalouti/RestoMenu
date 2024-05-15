document.addEventListener('DOMContentLoaded', function() {
    const tacos = document.getElementById('tacos');
    const burgers = document.getElementById('burgers');
    const souffle = document.getElementById('souffle');
    const panini = document.getElementById('panini');
    const orderBtn = document.getElementById('order-btn');
    const tableSelection = document.querySelector('.table-selection');
    const selectTableBtn = document.getElementById('select-table-btn');
    const tableModal = document.getElementById('table-modal');
    const tableModalContent = document.querySelector('.modal-content');

    // Function to get selected items from checkboxes
    function getSelectedItems(sectionId) {
        const section = document.getElementById(sectionId);
        const checkboxes = section.querySelectorAll('input[type="checkbox"]:checked');
        const selectedItems = [];
        checkboxes.forEach(checkbox => {
            selectedItems.push(checkbox.value);
        });
        return selectedItems.join(', ');
    }

    // Populate table selection
    const tables = ['Table 1', 'Table 2', 'Table 3', 'Table 4', 'Table 5', 'Table 6', 'Table 7', 'Table 8', 'Table 9', 'Table 10'];
    tables.forEach((table, index) => {
        const tableDiv = document.createElement('div');
        tableDiv.classList.add('table');
        tableDiv.textContent = table;
        tableDiv.addEventListener('click', () => {
            tableSelection.innerHTML = `<p>Selected Table: ${table}</p>`;
            tableModal.style.display = 'none';
        });
        tableModalContent.querySelector('.tables').appendChild(tableDiv);
    });

    // Handle order button click
    orderBtn.addEventListener('click', () => {
        const selectedTable = tableSelection.querySelector('p').textContent;
        const selectedItems = getSelectedItems('tacos') + ', ' + getSelectedItems('burgers') + ', ' + getSelectedItems('souffle') + ', ' + getSelectedItems('panini');
        
        // Populate hidden fields
        document.getElementById('selected-table').value = selectedTable;
        document.getElementById('selected-items').value = selectedItems;

        // Submit the form (you might need to adjust this part based on your form setup)
        document.getElementById('order-form').submit();
    });

    // Open table selection modal
    selectTableBtn.addEventListener('click', () => {
        tableModal.style.display = 'block';
    });

    // Close modal when click on close button or outside modal
    const closeBtn = document.querySelector('.close');
    window.onclick = function(event) {
        if (event.target == tableModal) {
            tableModal.style.display = 'none';
        }
    };
});
