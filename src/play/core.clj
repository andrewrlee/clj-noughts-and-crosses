(ns play.core
  (require  [clojure.string :as s])
  (:gen-class))

(declare prompt-move read-input)

(def new-grid 
  (letfn [(line [a z] (vec (map (fn [id]{:id id}) (range a z))))] 
    [(line 0 3) (line 3 6) (line 6 9)]))

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

(defn coordinates [n] 
  (let [y  (int  (/ n 3))
        x  (- n  (* y 3))] {:x x :y y}))

(defn update-cell [grid n [k v]] 
  (let [{:keys [x y]} (coordinates n)] 
    (assoc-in grid [y x k] v)))

(defn update-cells [grid indexes [k v]]
  (reduce (fn [current-grid n] (update-cell current-grid n [k v])) grid indexes))                        

(defn get-cell [grid n]
  (let [{:keys [x y]} (coordinates n)] 
    (get-in grid [y x])))

(defn get-lines [grid] 
  (let [rows      grid
        cols      (apply map vector grid) 
        diagonals (map (fn [line] (map #(get-cell grid %) line)) [[0 4 8] [2 4 6]])]
    (concat rows cols diagonals) ))

(defn results [grid] 
  (let [line-wins?    (fn [line sign]  (every? #(= (:sign  %) sign) line))
        winning-line  (flatten (filter #(or (line-wins? % "X") (line-wins? % "0")) (get-lines grid)))
        line-indexes  (map :id winning-line)]  
    {:winning-sign (get-in (first winning-line) [:sign])
     :grid         (update-cells grid line-indexes [:winning true])})) 

(defn set-grid 
  ([indexes sign]      (set-grid new-grid indexes sign))   
  ([grid indexes sign] (update-cells grid indexes [:sign sign])))                        

(defn show-grid [grid] 
  (let [results (results grid)] 
    (do (println "Here's your board:\n" (grid->string (:grid results))))
        results))

(defn invalid-move? 
  [grid n] 
  (letfn [(is-taken?   [grid n] ((complement nil?) (:sign (get-cell grid n))))
          (is-out-of-range? [n] ((complement contains?) (vec (range 0 9)) n))]
    (or (is-taken? grid n) 
        (is-out-of-range? n))))

(defn prompt-move
  [grid sign]
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
      (invalid-move? grid selected-index) 
        (do (println "\n!!! That was an invalid move, please try again :(\n")
            (prompt-move grid sign))
      :else 
        (do (let [new-grid  (set-grid grid [selected-index] sign)
                  next-sign (if (= sign "X") "0" "X")]  
              (prompt-move new-grid next-sign))))))  

(defn -main [& args] (prompt-move new-grid (rand-nth ["0" "X"])))
