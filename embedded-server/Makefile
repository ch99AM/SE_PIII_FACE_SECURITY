GOFLAGS=env GOOS=linux GOARCH=arm GOARM=5 CGO_ENABLED=1 CC=arm-linux-gnueabihf-gcc

cross_compile: cmake_build
	@echo "MAKING" 
	$(GOFLAGS) go build main.go

cmake_build:
	mkdir -p build
	cd build && cmake .. && make