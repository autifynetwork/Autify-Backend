db: 
	docker-compose up db -d

deps:
	make db

stop:
	docker-compose down

destroy:
	docker-compose down -v
	docker-compose rm -f

.PHONY: db stop destroy