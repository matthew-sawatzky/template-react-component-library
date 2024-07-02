Link to Repository
https://github.com/matthew-sawatzky/bsb

## Instructions for running

# build image

```shell
docker build . -t "msawatzky-coding-assign11-test:v1.0"
```

# run application container

```shell
docker run --name sawatzky_matthew_coding_assignment11_test -dp 7775:7775 msawatzky-coding-assign11-test:v1.0
```
