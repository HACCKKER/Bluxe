# build stage
FROM nimlang/nim:latest as builder

WORKDIR /app

COPY . .

RUN nimble build -y

# run stage
FROM alpine:latest

WORKDIR /app

COPY --from=builder /app/bluxe ./

RUN chmod +x bluxe

EXPOSE 8080

CMD [ "bluxe" ]