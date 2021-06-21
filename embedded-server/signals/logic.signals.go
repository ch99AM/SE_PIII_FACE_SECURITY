package signals

/*
#cgo CFLAGS: -I../src/include
#cgo LDFLAGS: -L../src/lib -lgpioDriver
#include <gpioDriver.h>
#include <stdio.h>
#include <stdlib.h>
*/
import "C"

func Init_ptrs() {
	C.gpioInitPtrs()
}

func Free_ptrs() {
	C.free_gpio()
}

func Add_gpio(id int) {
	gpio_id := C.uint(id)
	C.add_gpio(gpio_id)
}

func Delete_gpio(id int) {
	gpio_id := C.uint(id)
	C.delete_gpio(gpio_id)
}

func Set_mode(id int, mode int) {
	gpio_id := C.uint(id)
	gpio_mode := C.uint(mode)
	C.gpioSetMode(gpio_id, gpio_mode)
}

func Set_mode_all(mode int) {
	gpio_mode := C.uint(mode)
	C.gpioSetModeAll(gpio_mode)
}

func Get_mode(id int) int {
	gpio_id := C.uint(id)
	mode := C.gpioGetMode(gpio_id)
	result := int(mode)
	return result
}

func Get_mode_all() {
	C.gpioGetModeAll()
}

func Write_gpio(id int, value int) {
	gpio_id := C.uint(id)
	bit := C.uchar(value)
	C.gpioWrite(gpio_id, bit)
}

func Write_all_gpio(value int) {
	bit := C.uchar(value)
	C.gpioWriteAll(bit)
}

func Read_gpio(id int) int {
	gpio_id := C.uint(id)
	value := C.gpioRead(gpio_id)
	result := int(value)
	return result
}

func Read_all_gpio() {
	C.gpioReadAll()
}