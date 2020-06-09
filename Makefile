generate:
	java -Xmx4G -jar openapi-generator-cli.jar \
	generate \
	-i ./swagger-fixed.json \
	-g typescript-fetch \
	-o ./out -v

generate-debug:
	java -Xmx4G -jar openapi-generator-cli.jar \
	generate -debugModels -debugOperations \
	-i https://gist.githubusercontent.com/cobraz/e46754a820e837862afa70e0851f7b00/raw/438b82b13c3c724b106f84ba375a89a612df532a/tripletex-swagger.yaml \
	-g typescript-fetch \
	-o ./out -v

generate-docker:
	docker run -v "${PWD}:/local" openapitools/openapi-generator-cli:latest \
	generate \
	-i /local/swagger-fixed.json \
	-g typescript-node \
	-o /local/out

download_jars:
	curl -o ./openapi-generator-cli.jar https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/4.3.1/openapi-generator-cli-4.3.1.jar

download_swagger:
	curl -o ./swagger.json https://triplepub.s3-eu-west-1.amazonaws.com/swagger.json

.PHONY: download_swagger
.PHONY: generate