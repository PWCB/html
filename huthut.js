if (window.location.href== "http://178.128.11.125/") {
   window.location.href = 'http://www.nfl.com/'; 
}

if (window.location.href== "http://cornsquares.com/") {
   window.location.href = 'http://cornsquares.com/cornsquares.html'; 
   RewriteCond %{REQUEST_FILENAME} !-f
	RewriteCond %{REQUEST_FILENAME} !-d
	RewriteRule ^(.*)\.html$ /$1 [L,R=301]
}