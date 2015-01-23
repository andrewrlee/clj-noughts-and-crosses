# clj-noughts-and-crosses
Noughts and Crosses in clojure and clojurescript


Bulld the jar by running the following command:

```
  lein build-jar
```

Start the game in the terminal by running:

```
   java -jar target/uberjar/play-0.1.0-SNAPSHOT-standalone.jar
```

Build the game.js file by running:

```
  lein build-js
```

Play the game in your browser [here](http://plasma147.github.io/clj-noughts-and-crosses)


Creating a grid in a specific state:

```
  (def grid (-> new-grid
                (set-grid [1 2 4] "X")
                (set-grid [0 3 6] "O")))

```
