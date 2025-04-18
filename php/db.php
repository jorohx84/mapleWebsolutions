<?php

// Fehlerberichterstattung ausschalten
ini_set('display_errors', '0');  // Keine Fehler im Browser anzeigen
error_reporting(E_ALL);          // Alle Fehler (außer fatale) werden im Logfile geschrieben

// Definiere den Pfad zum Logfile
define('LOG_FILE', __DIR__ . '/error_log.txt'); // Fehler in error_log.txt im aktuellen Verzeichnis speichern

// Zugangsdaten
$db_server = 'database-5016916828.webspace-host.com';
$db_benutzer = 'dbu2287213';
$db_passwort = 'r0TH#+8432!#+192188';
$db_name = 'dbs13644475';

// Funktion zum Loggen von Fehlern
function log_error($message) {
    $date = date('Y-m-d H:i:s');
    file_put_contents(LOG_FILE, "[$date] - $message\n", FILE_APPEND);
}

// Verbindungsaufbau
try {
    $dbh = new PDO("mysql:host=$db_server;dbname=$db_name", $db_benutzer, $db_passwort);
} catch (PDOException $e) {
    log_error("Fehler bei der Verbindung zur Datenbank: " . $e->getMessage());
    exit;  // Stoppe das Skript bei einem Fehler, keine Rückmeldung an den Benutzer
}

// Formular-Daten empfangen
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Werte aus dem Formular extrahieren
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);
    
    // SQL-Query zum Einfügen der Daten in die Tabelle "kontaktformular"
    $sql = "INSERT INTO kontaktformular (name, email, phone, message) VALUES (:name, :email, :phone, :message)";
    
    // Vorbereiten der SQL-Anweisung
    $stmt = $dbh->prepare($sql);
    
    // Binde die Werte an die Parameter
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':phone', $phone);
    $stmt->bindParam(':message', $message);
    
    try {
        // Führe die Abfrage aus und überprüfe, ob die Einfügung erfolgreich war
        $stmt->execute();

        // E-Mail senden
        $to = "info@maple-websolutions.de"; // Die E-Mail-Adresse, an die die Nachricht geschickt werden soll
        $subject = "Neue Nachricht vom Kontaktformular";
        $body = "Neue Nachricht von:\n\n" .
                "Name: $name\n" .
                "E-Mail: $email\n" .
                "Telefon: $phone\n\n" .
                "Nachricht:\n$message";
        
        $headers = "From: info@maple-websolutions.de\r\n"; // Achte auf eine gültige E-Mail-Adresse
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
        
        // Sende die E-Mail
        if (!mail($to, $subject, $body, $headers)) {
            log_error("Fehler beim Senden der E-Mail.");
        }

    } catch (PDOException $e) {
        log_error("Fehler beim Absenden der Nachricht: " . $e->getMessage());
    }
}
?>
