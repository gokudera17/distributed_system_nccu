# What's in the folder
* K8s: deploy K8s and nfs server VM environment
* EFK-kubernetes: deploy EFK to k8s
* Frontend: package with DockerFile
* Backend:   
 We separate this project into two parts, **frontend** and **backend**.

# Install
  
## Prometheus, Grafana
* helm install prometheus stable/prometheus-operator

## Fluentd
* td-agent-gem install fluent-plugin-elasticsearch

## Docker Image (Frontend)
* docker build -t frontend . 
* docker tag ds_frontend gokudera17/ds_fronted
* docker push gokudera17/ds_frontend

## Kubernetes deploy (Frontend)
* kubectl create -f myweb-frontend.yaml
