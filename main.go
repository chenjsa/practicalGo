package main

import (
	"flag"
	"github.com/go-martini/martini"
	"log"
	"net/http"
)

func helloHandler() string {
	return "Hello World!"
}

func runServer(war *string, addr *string) {
	m := martini.Classic()
	m.Use(martini.Static(*war, martini.StaticOptions{SkipLogging: true}))

	/*router*/
	m.Get("/", helloHandler)

	http.Handle("/", m)
	log.Printf("start web server on %s", *addr)
	log.Fatal(http.ListenAndServe(*addr, nil))
}

func main() {
	addr := flag.String("p", ":8090", "address where the server listen on")
	war := flag.String("war", "./web", "directory of war files")
	flag.Parse()
	runServer(war, addr)
}
