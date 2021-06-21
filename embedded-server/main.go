package main

import (
	"fmt"
	"strconv"
	"time"
	"os"
	"embeddedServer/signals"
	"embeddedServer/resources"
	"bytes"
	"encoding/json"
	"io/ioutil"
	"net/http"
	"github.com/eiannone/keyboard"
)

func keyboard_script(buffer *string, event *bool) {
	// Init keyboard module

	if err := keyboard.Open(); err != nil {
		panic(err)
	}

	for {
		char, key, err := keyboard.GetKey()
		if !(*event) {
			if err != nil {
				panic(err)
			} else if '0' <= char && char <= '9' {
				(*buffer) += string(char)
			} else if last := len(*buffer) - 1; last >= 0 && key == keyboard.KeyBackspace2 {
				(*buffer) = (*buffer)[:last]
			} 
		} else {
			return
		}
	}
}

func main() {
	// Start server

	signals.Init_ptrs()

	signals.Set_mode(23, 1)
	signals.Set_mode(24, 0)
	signals.Write_gpio(23, 48)
	signals.Write_gpio(24, 48)

	// Wait for first event

	keyboard_buffer := ""
	event := false

	go keyboard_script(&keyboard_buffer, &event)

	fmt.Println("Waiting for entry...")

	for signals.Read_gpio(24) == 0 {
		time.Sleep(1 * time.Second)
	}

	event = true
	keyboard.Close()
	
	user_id, err := strconv.Atoi(keyboard_buffer)
	if err != nil {
		fmt.Print(err.Error())
	  	os.Exit(1)
	}

	fmt.Println("Button detected!")

	// Post to the API

	fmt.Println("Posting to API...")

	msg := resources.AccessRequest{
		UserIdCard: user_id, 
		AreaCode: "qwer", 
		Access: resources.Access{InDateTime: time.Now().Format("2006-01-02 15:04:05")}}
	jsonReq, err := json.Marshal(msg)

	fmt.Println("[Debug] " + string(jsonReq))

	resp1, err := http.Post("https://www.face-security-api.me/api/access/add", "application/json", bytes.NewBuffer(jsonReq))
 	if err != nil {
 		fmt.Print(err.Error())
		os.Exit(1)
 	}

	defer resp1.Body.Close()
    bodyBytes, _ := ioutil.ReadAll(resp1.Body)

	var respStruct resources.AccessResponse
    json.Unmarshal(bodyBytes, &respStruct)

	access_id := respStruct.ID.Oid

	fmt.Println("Access ID = " + access_id + "!")

	// Turn on LED

	time.Sleep(2 * time.Second)

	fmt.Println("Access registered!")
	signals.Write_gpio(23, 49)

	// Wait for second event

	fmt.Println("Waiting for exit...")
	for signals.Read_gpio(24) == 0 {
		time.Sleep(1 * time.Second)
	}

	fmt.Println("Button detected!")

	// Put to the API

	fmt.Println("Putting to API...")

	msg = resources.AccessRequest{
		AccessId: access_id, 
		Access: resources.Access{OutDateTime: time.Now().Format("2006-01-02 15:04:05")}}
	jsonReq, err = json.Marshal(msg)

	fmt.Println("[Debug] " + string(jsonReq))

	req2, err := http.NewRequest(http.MethodPut, "https://www.face-security-api.me/api/access/updateOutDateTime", bytes.NewBuffer(jsonReq))
    req2.Header.Set("Content-Type", "application/json")
    client := &http.Client{}
    resp2, err := client.Do(req2)
	if err != nil {
 		fmt.Print(err.Error())
		os.Exit(1)
 	}

	defer resp2.Body.Close()

	// Turn off LED

	time.Sleep(2 * time.Second)
	fmt.Println("Exit registered!")
	signals.Write_gpio(23, 48)

	// End server

	signals.Free_ptrs()

	// // Client

	// fmt.Println("Posting to API...")
	// msg := resources.PostAccessRequest{87654321, "qwer", resources.Access{"2021-05-04 13:00:00"}}
	// jsonReq, err := json.Marshal(msg)

	// resp, err := http.Post("https://www.face-security-api.me/api/access/add", "application/json", bytes.NewBuffer(jsonReq))
 	// if err != nil {
 	// 	fmt.Print(err.Error())
 	// }

	// // fmt.Println(string(jsonReq))

	// defer resp.Body.Close()
    // bodyBytes, _ := ioutil.ReadAll(resp.Body)

	// bodyString := string(bodyBytes)
    // // fmt.Println(bodyString)

	// var respStruct resources.PostAccessResponse
    // json.Unmarshal(bodyBytes, &respStruct)
    // // fmt.Printf("%+v\n", respStruct)

	// Server

	// signals.Init_ptrs()

	// signals.Add_gpio(2)
	// signals.Set_mode(2, 1)

	// value := signals.Get_mode(2)
	// fmt.Println("Mode = " + strconv.Itoa(value))

	// signals.Write_gpio(2, 49)
	// value = signals.Read_gpio(2)
	// fmt.Println("Value = " + strconv.Itoa(value))

	// time.Sleep(1 * time.Second)

	// signals.Write_gpio(2, 48)
	// value = signals.Read_gpio(2)
	// fmt.Println("Value = " + strconv.Itoa(value))

	// signals.Free_ptrs()
}