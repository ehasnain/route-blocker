dev:
	make dc-up service=dev

dev-all:
	make dc-up service=dev_all

example_run:
	make dc-up service=example_run

del-nm:
	./scripts/clean.sh node_modules

del-lib:
	./scripts/clean.sh lib

clean:
	make del-nm && make del-lib

dc-up:
	docker-compose up $(service) && docker-compose rm -fsv $(service)
