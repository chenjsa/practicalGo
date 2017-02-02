package main

import (
	"github.com/go-martini/martini"
	"log"
	"net/http"
)

func helloHandler() string {
	return "Hello World!"
}

func main() {
	m := martini.Classic()
	m.Get("/", helloHandler)
	http.Handle("/", m)
	log.Println("start web server on 8090")
	log.Fatal(http.ListenAndServe(":8090", nil))
}
