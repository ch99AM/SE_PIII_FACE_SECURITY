#add include to directories
include_directories(${CMAKE_CURRENT_SOURCE_DIR}/include)
set(CMAKE_C_COMPILER arm-linux-gnueabihf-gcc)
# set(CMAKE_C_COMPILER gcc)
set(LIB_C_FILES ${CMAKE_CURRENT_SOURCE_DIR}/lib)
set(CMAKE_LIBRARY_OUTPUT_DIRECTORY ${LIB_C_FILES})

set(C_LIBRARY_PATH ./lib)
set(C_INCLUDE_PATH ./include)
set(C_LIBRARY_NAME gpioDriver)

set(CFLAGS "-I${C_INCLUDE_PATH}")
set(LDFLAGS "-L${C_LIBRARY_PATH} -l${C_LIBRARY_NAME}")

#set the proper macros
set(LIBRARY_NAME gpioDriver)

set(SRC_FILES ${LIB_C_FILES}/gpioDriver.c)
set(INCLUDE_FILES ${CMAKE_CURRENT_SOURCE_DIR}/include/gpioDriver.h)

#add the library
add_library(${LIBRARY_NAME} SHARED ${SRC_FILES} ${INCLUDE_FILES})

#installing the library
install (TARGETS ${LIBRARY_NAME} DESTINATION lib)
install (FILES ${INCLUDE_FILES} DESTINATION include)