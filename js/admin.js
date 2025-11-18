// admin.js - Gestion de la connexion admin

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('adminLoginForm');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('adminUsername').value;
        const password = document.getElementById('adminPassword').value;
        
        // Vérification des identifiants
        if (username === 'admin' && password === 'admin123') {
            // Connexion réussie
            sessionStorage.setItem('adminLoggedIn', 'true');
            sessionStorage.setItem('adminUsername', username);
            
            // Redirection vers le tableau de bord
            window.location.href = 'admin-dashboard.html';
        } else {
            alert('❌ Identifiants incorrects. Utilisez admin / admin123');
        }
    });
    
    // Vérifier si déjà connecté
    if (sessionStorage.getItem('adminLoggedIn') === 'true') {
        window.location.href = 'admin-dashboard.html';
    }
});
