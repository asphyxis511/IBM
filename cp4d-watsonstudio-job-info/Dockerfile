# set base image (host OS)
FROM clrv0000236035.ic.ing.net:443/ubi8/python-38

# install dependencies
COPY requirements.txt .

RUN pip install -r requirements.txt

COPY ./scripts /cp4d-monitoring-scripts

WORKDIR /cp4d-monitoring-scripts

USER 1001
ENTRYPOINT [ "sh", "/cp4d-monitoring-scripts/run_scripts.sh" ]
