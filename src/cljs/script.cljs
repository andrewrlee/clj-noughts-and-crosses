(ns game 
  (:require [play.game :as p]
            [goog.events :as events]
            [goog.dom :as dom]))

(def state  (atom {}))
(def player (atom (rand-nth ["0" "X"]))) 

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
  (doall (map #(render-cell-element! %1 %2) 
              (get-cell-elements) 
              (flatten grid))))

(defn update-grid! [grid]
  (swap! state #(p/results grid))
  (render-grid! @state)
  (if (:winning-sign @state)
    (show-message! :info "WELL DONE! YOU WON!") 
    (clear-message!)))

(defn switch-player! [] (swap! player #(if (= @player "X") "0" "X"))) 
    
(defn clear-grid! [] (update-grid! p/new-grid))   

(defn perform-move! [event] 
  (if (:winning-sign @state)
    (show-message! :info "RESTART TO PLAY AGAIN!")
    (let [index  (js/parseInt  (.getAttribute (.-target event) "data-index"))
          player @player]   
      (if (p/invalid-move? (:grid @state) index)
          (show-message! :error "BAD MOVE! TRY AGAIN!") 
          (do (update-grid! (p/set-grid (:grid @state) [index] player))
              (switch-player!))))))

(do (clear-grid!)    
    (events/listen (dom/getElement "reset") "click" clear-grid!)
    (doseq [element (get-cell-elements)] 
      (events/listen element  "click" perform-move!)))
