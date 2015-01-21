(defproject play "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :source-paths  ["target/gen/clj" "src/clj"]
  :dependencies  [[org.clojure/clojure "1.6.0"]]
  :main ^:skip-aot play.core
  :auto-clean false
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}
             :dev {:dependencies [[org.clojure/clojurescript "0.0-2268"]]
                   :plugins [[lein-cljsbuild "1.0.4"]
                             [com.keminglabs/cljx "0.5.0"]]
                   :aliases {"build-jar" ["do" "clean," "test," "uberjar"]
                             "build-js" ["do" "clean," "cljx" "once," "test,"
                                          "cljsbuild" "once"]}}}
  :prep-tasks [["cljx" "once"] "javac" "compile"]
  :cljx {:builds [{:source-paths ["src/cljx"]
                   :output-path "target/gen/clj"
                   :rules :clj}
                  {:source-paths ["src/cljx"]
                   :output-path "target/gen/cljs"
                   :rules :cljs}]}

  :cljsbuild {:builds [{:source-paths ["target/gen/cljs" "src/cljs"]
                        :compiler {:output-to "target/game.js"
                                   :optimizations :advanced
                                   :pretty-print true}}]})
  
