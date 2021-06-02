# K8s and nfs server deployment

# Requirement
* require ansible and vagrant pre-install

## Deployment
* cd vagrant/k8s
* vagrant up

* cd ..
* cd nfs
* vagrant up

* after all, need to deploy https://github.com/kubernetes-sigs/nfs-subdir-external-provisioner to k8s cluster first