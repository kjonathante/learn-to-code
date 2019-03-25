FROM golang:1.8
# Create app directory
WORKDIR /usr/src/app
COPY . .
RUN go build -o main .
CMD ["/usr/src/app/main"]