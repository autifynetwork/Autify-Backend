deps:
	direnv reload
	./update-env-ip.sh
	cd .docker && docker compose up db -d

stop:
	cd .docker && docker compose down

down: destroy
destroy:
	cd .docker && docker compose down -v
	cd .docker && docker compose -f docker-compose.yml rm -f
logs: 
	cd .docker && docker compose -f docker-compose.yml logs -f

.PHONY: deps stop down destroy logs