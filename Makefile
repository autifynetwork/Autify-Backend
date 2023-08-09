deps:
	direnv reload
	cd .docker && docker compose up db -d
	sleep 5
	yarn migrate

stop:
	cd .docker && docker compose down

down: destroy
destroy:
	cd .docker && docker compose down -v

logs:
	cd .docker && docker compose logs -f

.PHONY: deps stop down destroy logs