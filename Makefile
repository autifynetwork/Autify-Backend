deps:
	direnv reload
	cd .docker && docker compose up db redis nginx -d

stop:
	cd .docker && docker-compose down

down: destroy
destroy:
	cd .docker && docker-compose down -v
	cd .docker && docker-compose rm -f
logs: 
	cd .docker && docker compose logs -f

.PHONY: deps stop down destroy logs