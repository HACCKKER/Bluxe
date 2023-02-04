# build stage
FROM ubuntu:latest as build

WORKDIR /app

COPY . .

RUN nimble build

# run stage
FROM alpine:latest

WORKDIR /app

COPY --from=build /app/bluxe ./

EXPOSE 8080

RUN adduser -u 5678 --disabled-password --gecos "" appuser && chown -R appuser /app
USER appuser

CMD ["./bluxe"]