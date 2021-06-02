# What's in the folder
* K8s: deploy K8s and nfs server VM environment
* EFK-kubernetes: deploy EFK to k8s
* Frontend: package with DockerFile
* Backend:   
 We separate this project into two parts, **frontend** and **backend**.

# Install
  
## Kubernetes & Kubernetes Dashboard
* you can see the README file in the 'K8s' folder and follow the descrptions.
  
## Prometheus, Grafana
* helm install prometheus stable/prometheus-operator
* Then, you can use 'kubectl port-forward deployment/prometheus-grafana 3000' to forward port and use 'http://localhost:3000' to open Grafana.

## Fluentd
* td-agent-gem install fluent-plugin-elasticsearch
* Then, you can use 'curl -X POST -d 'json={"json":"message"}' to test fluentd.

## Docker Image (Frontend)
* docker build -t frontend . 
* docker tag ds_frontend gokudera17/ds_fronted
* docker push gokudera17/ds_frontend

# Deploy
In this section, you can use yaml file in 'k8s-config' to deploy service.  
  
## Kubernetes deploy (Frontend)
* kubectl create -f myweb-frontend.yaml


## Kubernetes deploy (Backend)
*
