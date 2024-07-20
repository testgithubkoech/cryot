document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;
    
    // Simulate API call to register user
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    
    alert('User registered successfully!');
});

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    
    // Simulate API call to login user
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    
    if (username === storedUsername && password === storedPassword) {
        document.getElementById('auth-section').style.display = 'none';
        document.getElementById('wallet-section').style.display = 'block';
        loadWalletInfo();
    } else {
        alert('Invalid credentials!');
    }
});

function loadWalletInfo() {
    // Simulate fetching wallet info
    const balance = localStorage.getItem('balance') || 0;
    document.getElementById('balance').innerText = balance;
    document.getElementById('public-key').innerText = 'fake-public-key';
    document.getElementById('private-key').innerText = 'fake-private-key';
}

document.getElementById('deposit-button').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('deposit-amount').value);
    let balance = parseFloat(localStorage.getItem('balance')) || 0;
    balance += amount;
    localStorage.setItem('balance', balance);
    document.getElementById('balance').innerText = balance;
    alert('Deposit successful!');
});

document.getElementById('withdraw-button').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('withdraw-amount').value);
    let balance = parseFloat(localStorage.getItem('balance')) || 0;
    if (amount > balance) {
        alert('Insufficient balance!');
    } else {
        balance -= amount;
        localStorage.setItem('balance', balance);
        document.getElementById('balance').innerText = balance;
        alert('Withdrawal successful!');
    }
});

document.getElementById('show-api-keys').addEventListener('click', function() {
    const apiKeys = document.getElementById('api-keys');
    if (apiKeys.style.display === 'none') {
        apiKeys.style.display = 'block';
    } else {
        apiKeys.style.display = 'none';
    }
});