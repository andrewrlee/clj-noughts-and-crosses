# clj-noughts-and-crosses
Noughts and Crosses in clojure


Bulld the jar by running the following command:

```
  lein build-jar
```

Start the game by running:

```
   java -jar target/uberjar/play-0.1.0-SNAPSHOT-standalone.jar
```

Build the game.js file by running:

```
  lein build-js
```


Creating a grid in a specific state:

```
  (def grid (-> p/new-grid
                (p/set-grid [1 2 4] "X")
                (p/set-grid [0 3 6] "O")))

```
