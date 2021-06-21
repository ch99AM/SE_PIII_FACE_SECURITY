#include "../include/gpioDriver.h"

void gpioInitPtrs(){
	int fd = -1;
	
	if ((fd = open("/dev/mem", O_RDWR, 0)) == -1)
            err(1, "Error opening /dev/mem");

	gpfsel0 = (unsigned int*)mmap(0, getpagesize(), PROT_WRITE, MAP_SHARED, fd, GPIO_BASE);

	if (gpfsel0 == MAP_FAILED)
		errx(1, "Error during mapping GPIO");
	
    gpset0 = gpfsel0 + 0x7;
	gpclr0 = gpfsel0 + 0xA;
    gplvl0 = gpfsel0 + 0xD;

    gpio_head = NULL;
}

void add_gpio(unsigned int id) {
    GPIO* new_GPIO = (GPIO*)malloc(sizeof(GPIO));
    new_GPIO->id = id;
    new_GPIO->next = NULL;

    if (gpio_head == NULL) {
        gpio_head = new_GPIO;
    } else {
        GPIO* temp = gpio_head;
        while (temp->next != NULL) {
            temp = temp->next;
        }  
        temp->next = new_GPIO;
    }
}

void delete_gpio(unsigned int id) {
    if(gpio_head == NULL) return;
    else if(gpio_head->id == id) {
        GPIO* temp = gpio_head;
        gpio_head = gpio_head->next;
        free(temp);
    } else {
        GPIO* prev = gpio_head;
        GPIO* temp = gpio_head->next;
        while (temp != NULL) {
            if (temp->id == id) {
                prev->next = temp->next;
                free(temp);
                break;
            }
            prev = temp;
            temp = temp->next;
        }
    }
}

void free_gpio() {
    GPIO* temp = gpio_head;
    while (temp != NULL) {
        gpio_head = gpio_head->next;
        free(temp);
        temp = gpio_head;
    }  
}

void gpioSetMode(unsigned int gpio, unsigned int mode){  
    if (mode >= 0 && mode < 8){
        int off = gpio / 10;
        int shift = (gpio % 10) * 3;
        *(gpfsel0 + off) = (*(gpfsel0 + off) & ~(~mode << shift)) | (mode << shift);
    }
}

void gpioSetModeAll(unsigned int mode){
    if (mode >= 0 && mode < 8) {
        GPIO* temp = gpio_head;
        while (temp != NULL) {
            gpioSetMode(temp->id, mode);
            temp = temp->next;
        }   
    }
}

int gpioGetMode(unsigned int gpio) {
    int off = gpio / 10;
    int shift = (gpio % 10) * 3;
    return (*(gpfsel0 + off) >> shift) & 0x7; 
}

void gpioGetModeAll() {
    GPIO* temp = gpio_head;
    while (temp != NULL) {
        printf("Mode of GPIO%d = %d\n", temp->id, gpioGetMode(temp->id));
        temp = temp->next;
    }
}

void gpioWrite(unsigned int gpio, unsigned char bit){
	if (bit == '1')  *(gpset0) = (*(gpset0) & ~(~0x1 << gpio)) | (0x1 << gpio);
	else if (bit == '0')  *(gpclr0) = (*(gpclr0) & ~(~0x1 << gpio)) | (0x1 << gpio);
} 

void gpioWriteAll(unsigned char bit){
	GPIO* temp = gpio_head;
    while (temp != NULL) {
        gpioWrite(temp->id, bit);
        temp = temp->next;
    }   
}

int gpioRead(unsigned int gpio){
    return (*(gplvl0) >> (gpio)) & 0x1;
}

void gpioReadAll() {
    GPIO* temp = gpio_head;
    while (temp != NULL) {
        printf("Value of GPIO%d = %d\n", temp->id, gpioRead(temp->id));
        temp = temp->next;
    }
}