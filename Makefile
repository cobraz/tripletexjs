generate:
	openapi-generator \
	generate \
	-i ./out/openapi.json \
	-g typescript-fetch \
	-o ./out -v

download_swagger:
	curl -o ./swagger.json https://tripletex.no/v2/swagger.json

.PHONY: download_swagger
.PHONY: generate