(ns game 
  (:require [play.game :as p]
            [goog.events :as events]
            [goog.dom :as dom]))

(def results  (atom {}))
(def player   (atom (rand-nth ["0" "X"]))) 

(defn get-cell-elements [] (array-seq  (dom/getElementsByClass "grid-cell"))) 

(defn show-message! [colour msg] 
  (let [message (dom/getElement "message")
        classes (.-classList message)]
    (set! (.-innerHTML message) msg)
    (.toggle classes "error" (= :error colour))
    (.toggle classes "info"  (= :info colour))))

(defn clear-message! [] (show-message! :info "")) 

(defn render-cell-element! [e c] 
  (set! (.-innerHTML e) (:sign  c ""))
  (.setAttribute e "data-index" (:id c))
  (.toggle (.-classList e) "winning" (:winning c)))

(defn render-grid! [{:keys [grid]}] 
  (let [cells    (flatten grid)
        elements (get-cell-elements)]
    (doall (map (fn [elem cell](render-cell-element! elem cell)) 
                elements cells))))

(defn update-grid! [grid]
  (swap! results (fn [] (p/results grid)))
  (render-grid! @results)
  (if (:winning-sign @results)
    (show-message! :info "WELL DONE! YOU WON!") 
    (clear-message!)))

(defn switch-player! [] (swap! player #(if (= @player "X") "0" "X"))) 
    
(defn clear-grid! [] (update-grid! p/new-grid))   

(defn perform-move! [event] 
  (if (:winning-sign @results)
    (show-message! :info "RESTART TO PLAY AGAIN!")
    (let [index  (js/parseInt  (.getAttribute (.-target event) "data-index"))
          player @player]   
      (if (p/invalid-move? (:grid @results) index)
        (show-message! :error "BAD MOVE! TRY AGAIN!") 
        (do (update-grid! (p/set-grid (:grid @results) [index] player))
            (switch-player!))))))

(defn main []
  (do (clear-grid!)    
      (events/listen (dom/getElement "reset") "click" clear-grid!)
      (doseq [element (get-cell-elements)] 
        (events/listen element  "click" perform-move!))))

(main)

