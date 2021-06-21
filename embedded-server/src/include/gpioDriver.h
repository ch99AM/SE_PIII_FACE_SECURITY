#ifndef GPIODRIVER_H_
#define GPIODRIVER_H_

#include <sys/mman.h>
#include <err.h>
#include <fcntl.h>
#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>

static unsigned GPIO_BASE = 0x3f200000;

volatile unsigned int * gpfsel0;
volatile unsigned int * gpset0;
volatile unsigned int * gpclr0;
volatile unsigned int * gplvl0;

typedef struct GPIO {
    unsigned int id;
    struct GPIO* next;
} GPIO;

GPIO* gpio_head;

void gpioInitPtrs();

void add_gpio(unsigned int);
void delete_gpio(unsigned int);
void free_gpio();

void gpioSetMode(unsigned int, unsigned int);
void gpioSetModeAll(unsigned int);

int gpioGetMode(unsigned int);
void gpioGetModeAll();

void gpioWrite(unsigned int, unsigned char);
void gpioWriteAll(unsigned char);

int gpioRead(unsigned int);
void gpioReadAll();

#endif