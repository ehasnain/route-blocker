del-nm:
	rm -rf node_modules

del-lib:
	rm -rf lib

clean:
	make del-nm && make del-lib
