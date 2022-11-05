FROM golang:alpine as builder

ENV GO111MODULE=off

WORKDIR /app

COPY main.go .

RUN go build -o main .

FROM scratch 
WORKDIR /app
COPY --from=builder /app .

CMD ["./main"]