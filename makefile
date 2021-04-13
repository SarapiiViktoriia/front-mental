FILES :=                                  \
	makefile                              \
	tests/test.js
all: setup start
reset: stop clean setup start
setup:
	sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 3000
build:
	npm install
start:	
	forever -l forever.log -o out.log -e err.log --sourceDir . -c "npm start" / &
stop:
	forever stopall
clean:
	rm -f *.log nohup.out
TestWebsite.jsx: tests/test.js
	npm test
run: TestWebsite.jsx
