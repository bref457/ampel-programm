# Ampel Programm

Ein interaktives Webprogramm, das Benutzern ermöglicht, eine Ampelfarbe einzugeben und Anweisungen basierend auf der Farbe ausgibt. 
Das Projekt demonstriert die Nutzung von HTML, JavaScript und grundlegender Interaktivität.

## 🚦 Features

- Benutzer können eine Ampelfarbe eingeben (`grün`, `orange`, `rot`).
- Das Programm gibt Anweisungen entsprechend der eingegebenen Farbe:
  - **Grün**: "Du kannst fahren!"
  - **Orange**: "Du darfst anfahren oder musst bremsen!"
  - **Rot**: "Du musst anhalten!"
  - **Ungültige Eingabe**: Meldung über ungültige Farben.
- Robuste Eingabelogik durch Konvertierung in Kleinbuchstaben.

## 🛠️ Verwendete Technologien

- **HTML**: Für die Struktur der Seite.
- **JavaScript**: Zur Verarbeitung der Benutzereingabe und Ausgabe von Anweisungen.

## 📁 Projektstruktur

- `index.html`: Die Hauptseite mit der Benutzeroberfläche und dem Eingabefeld.
- `main.js`: Enthält die Logik zur Überprüfung der Farben und Ausgabe der Anweisungen.

## 📖 Funktionsweise

1. Der Benutzer gibt eine Farbe (z. B. `grün`, `orange`, `rot`) in das Textfeld ein.
2. Nach einem Klick auf den Button "Überprüfen":
   - Das Programm überprüft die Eingabe.
   - Eine entsprechende Nachricht wird in einem Popup-Fenster (`alert`) angezeigt.

## 🚀 Installation und Nutzung

1. Lade das Projekt von GitHub herunter:
   ```bash
   git clone https://github.com/bref457/ampel-programm
   
Öffne die Datei index.html in deinem bevorzugten Browser.

Gib eine Farbe ein und klicke auf den Button „Überprüfen“, um die passende Anweisung zu erhalten.

🌟 Erweiterungsideen
Füge CSS hinzu, um die Ampel visuell darzustellen.
Implementiere einen Timer, um die Ampelphasen automatisch zu wechseln.
Akzeptiere Farbcodes (z. B. #FF0000 für Rot) als Eingabe.

🤝 Mitwirken
Beiträge und Vorschläge sind willkommen! Forke das Repository, implementiere deine Ideen und erstelle einen Pull Request.

📜 Lizenz
Dieses Projekt steht nicht unter Lizenz.
