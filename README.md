# Tanzu Build Service - Node.js npm sample  - build with source code from git

Adapted from original code on https://github.com/paketo-buildpacks/samples/tree/main/nodejs/npm 

1. Create a TBS image with source code from a git repository.  
  
  Use either the imperative `kb` command:

    ```
    kp image create nodejs-npm \
    --tag lsilva.azurecr.io/nodejs-npm \
    --cluster-builder tcserverbuilder \
    --namespace default \
    --git https://github.com/lsilvapvt/sample-nodejs-npm.git \
    --git-revision main 
    ```

  OR the declarative `kubectl` definition files (see [kpack Image CRD specs](https://github.com/pivotal/kpack/blob/master/docs/image.md)):

  ```
    kubectl apply -f ./tbs/nodejs-npm-image.yml       
  ```

    The Image instance with name `nodejs-npm` is created in the cluster and its first build instance is triggered to produce a container image and then save that to the registry provided with the `--tag` parameter.

    To inspect the logs of the first build:

    `kp build logs nodejs-npm -b 1`

2. Deploy image to Kubernetes cluster

   `kubectl apply -f ./k8s/nodejs-npm-deployment.yml`

