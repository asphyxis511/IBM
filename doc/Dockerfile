FROM registry.access.redhat.com/ubi8/ubi

LABEL authors="Frank Ketelaars <fketelaars@nl.ibm.com>"

ARG NVM_RELEASE=12.21.0

# Install required packages, including HashiCorp Vault client
RUN yum install -y git && \
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash && \
    source ~/.bashrc && \
    nvm install ${NVM_RELEASE} && \
    npm i apollo-boost graphql react-apollo -S && \
    nvm use ${NVM_RELEASE}

VOLUME ["/doc"]

EXPOSE 8080

ENTRYPOINT ["/doc/run-npm-dev.sh"]
