document.addEventListener('DOMContentLoaded', () => {
    const transTable = document.getElementById('transaction-content');
    let transactions = [];

    async function loadTransactions() {
        try{
            const res = await fetch("/api/transactions", {
                method: 'GET',
            });
            if (!res.ok) {
                throw new Error('Not Found');
            }
            transactions = await res.json();
            transactions.forEach(transaction => {
                const tRow = document.createElement('tr');
                const td = document.createElement('td');
                const td2 = document.createElement('td');
                const td3 = document.createElement('td');

                td.textContent = transaction.transaction_name;
                td.className =  'td'
                td2.textContent = transaction.amount;
                td3.textContent = transaction.transaction_category
                tRow.appendChild(td);
                tRow.appendChild(td2);
                tRow.appendChild(td3);
                transTable.appendChild(tRow);
            })
        } catch(error) {
            console.error(error);
        }
    }
    loadTransactions();
})