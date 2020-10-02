del-nm:
	./scripts/clean.sh node_modules

del-lib:
	./scripts/clean.sh lib

clean:
	make del-nm && make del-lib
