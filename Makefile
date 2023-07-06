ENV ?= dev

ifeq ($(ENV), dev)
	# Development environment
	DOCKER_COMPOSE_FILE := docker-compose-dev.yml
	ENV_FILE := .env.dev
else ifeq ($(ENV), prod)
	# Production environment
	DOCKER_COMPOSE_FILE := docker-compose.yml
	ENV_FILE := .env
else
	$(error Unsupported environment: $(ENV))
endif

deps:
	@if [ "$(ENV)" = "prod" ]; then \
		./update-env-ip.sh; \
	fi
	@export ENV_FILE=$(ENV_FILE) && docker compose -f $(DOCKER_COMPOSE_FILE) up -d

stop:
	@docker compose -f $(DOCKER_COMPOSE_FILE) down
down: destroy
destroy:
	@docker compose -f $(DOCKER_COMPOSE_FILE) down -v
	@docker compose -f $(DOCKER_COMPOSE_FILE) rm -f

logs:
	@docker compose -f $(DOCKER_COMPOSE_FILE) logs -f

.PHONY: deps stop down destroy logs