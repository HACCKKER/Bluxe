FROM nimlang/nim:latest as builder

RUN apt update -y && apt upgrade -y

WORKDIR /app

COPY . /app

RUN nimble build -y

FROM ubuntu:latest

RUN apt update -y && apt upgrade -y

RUN apt install libsqlite3-dev -y

WORKDIR /app

COPY --from=builder /app/bluxe ./

RUN adduser -u 5678 --disabled-password --gecos "" appuser && chown -R appuser /app
USER appuser

EXPOSE 8080

CMD ["./bluxe"]