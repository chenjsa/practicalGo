package main

import (
	"io"
	"log"
	"net/http"
)

func helloHandler(w http.ResponseWriter, req *http.Request) {
	io.WriteString(w, "Hello, world!")
}

func main() {
	http.HandleFunc("/", helloHandler)
	err := http.ListenAndServe("localhost:8090", nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err.Error())
	}
}
