(ns play.core
  (require  [clojure.string :as s]
            [play.game :as p])
  (:gen-class))

(declare prompt-move read-input)

(defn render-value [row] 
  (letfn [(colour-sign [c val] (str c val "\u001B[0m"))
          (red  [val] (colour-sign "\u001B[31m" val))
          (cyan [val] (colour-sign "\u001B[36m" val))] 
    (map #(cond (:winning %) (cyan (:sign %)) 
                (:sign %)    (red  (:sign %)) 
                :else        (:id  %)) 
         row)))

(defn grid->string [grid]
  (let [divider      "\n  ----------- \n"
        bar          " | "
        lines        (map #(str bar (s/join bar (render-value %)) bar) grid)
        lines-string (s/join divider lines)] 
    (str divider lines-string divider)))

(defn show-grid [grid] 
  (let [results (p/results grid)] 
    (do (println "Here's your board:\n" (grid->string (:grid results))))
        results))

(defn prompt-move [grid sign]
  (let [results (show-grid grid)] 
    (if (:winning-sign results) 
        (println "*** " (:winning-sign results) "WINS!! Well done! ***\n\n")
        (do   
          (println sign ": Where do you want to go? Enter the number: ('q' to quit)")
          (read-input (:grid results) sign)))) )

(defn read-input [grid sign] 
  (let [input          (s/trim (read-line))
        selected-index (Integer. (or (re-find #"^\d+$" input) -1))]
    (cond 
      (= "q" input) 
        (println "Goodbye!")
      (p/invalid-move? grid selected-index) 
        (do (println "\n!!! That was an invalid move, please try again :(\n")
            (prompt-move grid sign))
      :else 
        (do (let [new-grid  (p/set-grid grid [selected-index] sign)
                  next-sign (if (= sign "X") "0" "X")]  
              (prompt-move new-grid next-sign))))))  

(defn -main [& args] (prompt-move p/new-grid (rand-nth ["0" "X"])))
