(ns play.game
  (:require  [clojure.string :as s]))

(def new-grid 
  (letfn [(line [a z] (vec (map (fn [id]{:id id}) (range a z))))] 
    [(line 0 3) (line 3 6) (line 6 9)]))

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

(defn invalid-move? [grid n] 
  (letfn [(is-taken?   [grid n] ((complement nil?) (:sign (get-cell grid n))))
          (is-out-of-range? [n] ((complement contains?) (vec (range 0 9)) n))]
    (or (is-taken? grid n) 
        (is-out-of-range? n))))

