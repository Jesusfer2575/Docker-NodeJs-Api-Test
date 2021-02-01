# Docker-NodeJs-Api-Test
This is just and example of how to create a rest api in node js, create an image for it and run it using docker container
### Build Docker Image
```
docker build -t <<name-of-image>> .
```

### Run Container (interactive mode)
```
docker run -it -p 4000:3000 <name/id-image>
```


### Run Container (detached mode)
```
docker run -it -p 4000:3000 <name/id-image>
```

### Stop Container
```
docker stop #id
```
