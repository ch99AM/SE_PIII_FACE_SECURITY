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
			} else if key == keyboard.KeyEsc {
				(*event) = true
				break
			}
		}
	}
}

func finish_program() {
	keyboard.Close()
	signals.Free_ptrs()
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

	for {

		event = false
		fmt.Println("Waiting for entry...")

		for signals.Read_gpio(24) == 0 {
			if event == true {
				break
			}
			time.Sleep(1 * time.Second)
		}
		if event == true {
			break
		}

		event = true
		
		user_id, err := strconv.Atoi(keyboard_buffer)
		if err != nil {
			fmt.Print(err.Error())
			finish_program()
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
		if err != nil {
			fmt.Print(err.Error())
			finish_program()
			os.Exit(1)
		}

		// fmt.Println("[Debug] " + string(jsonReq))

		resp1, err := http.Post("https://www.face-security-api.me/api/access/add", "application/json", bytes.NewBuffer(jsonReq))
		if err != nil {
			fmt.Print(err.Error())
			finish_program()
			os.Exit(1)
		}

		defer resp1.Body.Close()
		bodyBytes1, err := ioutil.ReadAll(resp1.Body)
		if err != nil {
			fmt.Print(err.Error())
			finish_program()
			os.Exit(1)
		}

		var respStruct resources.AccessResponse
		json.Unmarshal(bodyBytes1, &respStruct)

		access_id := respStruct.ID.Oid

		fmt.Println("Access ID = " + access_id)

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
		if err != nil {
			fmt.Print(err.Error())
			finish_program()
			os.Exit(1)
		}

		// fmt.Println("[Debug] " + string(jsonReq))

		req2, err := http.NewRequest(http.MethodPut, "https://www.face-security-api.me/api/access/updateOutDatetime", bytes.NewBuffer(jsonReq))
		if err != nil {
			fmt.Print(err.Error())
			finish_program()
			os.Exit(1)
		}
		req2.Header.Set("Content-Type", "application/json")
		client := &http.Client{}
		resp2, err := client.Do(req2)
		if err != nil {
			fmt.Print(err.Error())
			finish_program()
			os.Exit(1)
		}

		defer resp2.Body.Close()

		_, err = ioutil.ReadAll(resp2.Body)
		if err != nil {
			fmt.Print(err.Error())
			finish_program()
			os.Exit(1)
		}

		// Turn off LED

		time.Sleep(2 * time.Second)
		fmt.Println("Exit registered!")
		signals.Write_gpio(23, 48)

	}

	// End server

	finish_program()
}