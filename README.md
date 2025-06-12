# System zarządzania listą książek do przeczytania  

### **Opis**
Aplikacja do zarządzania listą książek pomaga użytkownikowi w prosty i zorganizowany sposób zarządzać książkami które chce przeczytać. Lista książek posiada również bardzo przydatne funkcje takie jak zaznaczanie książek jako przeczytanych, usuwanie książek lub filtrowanie książek po autorze, kategorii książki lub statusu (przeczytana, nieprzeczytana lub wszystkie).

### **Funkcjonalności**
- **Wyszukiwanie książek** - możliwość wyszukiwania książek po tytule bądź autorze
- **Dodawanie książek do listy** - możliwość dodania wyszukanych książek do listy za pomocą przycisku "Add to list"
- **Usuwanie książek z listy** - możliwość usunięcia książek z listy za pomocą przycisku "Delete"
- **Zaznaczanie książek jako przeczytane/nieprzeczytane** - w liście książek każda książka ma przycisk "Mark as read" co zaznaczy ją jako przeczytaną, w razie pomyłki pojawia się przycisk "Mark as unread" który zaznacza książkę jako nieprzeczytaną
- **Filtrowanie książek** - możliwość filtrowania książek po autorze, gatunku lub statusu przeczytania. Książki można filtrować dowolnie.

### **Instrukcja uruchomienia aplikacji**
1. Zainstaluj Node.jslub zaktualizuj go do nowej wersji (v22 lub nowsza).
2. Sklonuj repozytorium: https://github.com/majamc/MVC_project.git
3. Otwórz aplikacje w dowolnym edytorze kodu (np. Visual Studio Code).
4. Otwórz terminal i po wejściu w odpowiedni katalog w którym jest aplikacja wpisz 'npm install' - zainstaluje to potrzebne biblioteki do odpalenia aplikacji.
5. Napisz w terminalu komendę 'npm start', co odpali aplikacje.
6. Otwórz przeglądarkę internetową i przejdź na stronę pod adresem http://localhost:3000

### **Wykorzystane biblioteki zewnętrzne**
- **ejs ^3.1.10** - pozwala na dynamiczne generowanie HTML z danych. Umożliwia wstawianie kodu JavaScript do plików .ejs dzięki czemu możemy wyświetlać dane z serwera w przeglądarce. Oddziela logikę biznesową od warstwy prezentacji.
- **express ^5.1.0** - minimalistyczny framework do tworzenia serwerów HTTP i aplikacji webowych w Node.js. Umożliwia obsługę tras, middleware oraz zarządzanie żądaniami i odpowiedziami HTTP.
- **mongoose ^8.15.1** - umożliwia komunikacje z bazą danych MongoDB w sposób uporządkowany i obiektowy.
- **nodemon ^3.1.10** - automatycznie restartuje server Node.js gdy wykryje zmiany w plikach projektu. Dzięki temu nie musimy samodzielnie restartować servera.

### **Struktura aplikacji**
- **constants** - zawiera elementy nawigacji oraz statusy kodów.
- **controllers** - kontrolery odpowiedzialne za logikę pomiędzy widokami a modelami. addBookController.js jest odpowiedzialny za renderowanie podstrony "Add Books", homeController.js za renderowanie strony głównej a myListController.js zawiera renderowanie podstrony "My List" oraz umożliwia dodawanie książek do listy, usuwanie i filtrowanie książek oraz aktualizację statusu przeczytania.
- **models** - zawiera modele, które są odpowiedzialne za dane i logikę biznesową. book.js reprezentuje książki zapisane przez użytkownika w lokalnej bazie danych MongoDB. Obsługuje dodawanie, pobieranie, filtrowanie, usuwanie i aktualizację statusu książek. googleBook.js pobiera dane o książkach z publicznego Google Books API na podstawie zapytania wyszukiwania użytkownika.
- **public** - zawiera pliki statyczne, w tym folder css z plikiem main.css, który stylizuje aplikację i poprawia wygląd interfejsu użytkownika.
- **routing** - definiuje trasy aplikacji. Zawiera home.js obsługujący routing strony głównej, addBook.js obsługujący routing podstrony "Add Books" i myList.js odpowiadający za routing podstrony "My List"
- **utils** - posiada logger do logowania czynności użytkownika oraz getFileFromAbsolutePath do łatwiejszego używania ścieżek w kodzie
- **views** - posiada szablony EJS odpowiedzialne za to, co widzi użytkownik oraz folder partials zawierający częściowy szablon, który może być wielokrotnie wykorzystywany, w moim projekcie jest to navigation.ejs zajmujący się nawigacją. Widoki w moim projekcie to 404.ejs odpowiedzialny za widok strony not found, add-book.ejs odpowiedzialny za strone do wyszukiwania i dodawania książek do listy, home.ejs odpowiedzialny za widok strony głównej oraz my-list.ejs odpowiedzialny za widok listy książek.
- **config.js** - zawiera ustawienia konfiguracyjne aplikacji, takie jak port serwera oraz user i haslo do bazy danych.
- **database.js** - odpowiada za połączenie z bazą danych MongoDB i udostępnia funkcję do uzyskania instancji bazy w innych częściach aplikacji.
- **server.js** - główny plik uruchamiający aplikację, konfigurujący Expressa, ścieżki routingu, silnik widoków EJS oraz obsługę błędów.

### **Przykładowe dane wejściowe**
- Tytuł książki lub autor - np.: "Harry Potter", "Mieko Kawakami"
