"use strict";(self.webpackChunkcloud_pak_deployer_monitors=self.webpackChunkcloud_pak_deployer_monitors||[]).push([[4721],{4048:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return i},default:function(){return u}});var a=n(3366),r=(n(7294),n(4983)),o=n(7160),l=["components"],i={},p={_frontmatter:i},s=o.Z;function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)(s,Object.assign({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",null,"Configure authentication secrets in the vault used by the Cloud Pak Deployer"),(0,r.kt)("p",null,"Before deploying the monitor, ensure the secrets used in the deployment are available in the vault used by the Cloud Pak Deployer."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Source repository token (",(0,r.kt)("strong",{parentName:"li"},"Mandatory"),")",(0,r.kt)("br",{parentName:"li"}),"Source token used to build and monitor image"),(0,r.kt)("li",{parentName:"ul"},"Target Container Registry username and password (",(0,r.kt)("strong",{parentName:"li"},"Optional"),")",(0,r.kt)("br",{parentName:"li"}),"By default the image will be pushed to the internal image-registry of OpenShift, which do not require credentials. If the image is pushed to an external image registry, the required credentials must be available. ")),(0,r.kt)("p",null,"Example to configure the secrets in the vaults used by the Cloud Pak Deployer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"export STATUS_DIR=<Status directory of the Cloud Pak Deployer>\nexport CONFIG_DIR=<Configuration folder used by the Cloud Pak Deployer>\n\n# Mandatory Source Repo secret\n./cp-deploy.sh vault set --vault-secret monitors_source_repo_secret --vault-secret-value ThisIsMyGitAccessToken!\n# Optional Target Image Registry Credentials\n./cp-deploy.sh vault set --vault-secret default_monitor_target_cr_user_secret --vault-secret-value TargetCRUserName\n./cp-deploy.sh vault set --vault-secret monitors_target_cr_password --vault-secret-value TargetCRPassword\n")),(0,r.kt)("p",null,"Validate the created secrets are available:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"export STATUS_DIR=<Status directory of the Cloud Pak Deployer>\nexport CONFIG_DIR=<Configuration folder used by the Cloud Pak Deployer>\n\n# List all secrets\n./cp-deploy.sh vault list\n\n# Optionally retrieve the values to confirm the correct values are loaded\n./cp-deploy.sh vault get --vault-secret monitors_source_repo_secret\n")),(0,r.kt)("h2",null,"Add OpenShift Monitoring to the Cloud Pak Deployer configuration"),(0,r.kt)("p",null,"Deploying monitors requires the OpenShift Monitoring to be enabled on the OpenShift cluster. If not already part of the Cloud Pak Deployer configuration, add the ",(0,r.kt)("inlineCode",{parentName:"p"},"openshift_monitoring")," configuration. This can be added to an existing yaml configuration file, or a new yaml file can be added to the configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"openshift_monitoring:\n- openshift_cluster_name: <OC_CLUSTER_NAME>\n  user_workload: enabled\n  # Optional properties to persist OpenShift Monitoring\n  pvc_storage_class: ibmc-vpc-block-retain-general-purpose\n  pvc_storage_size_gb: 100\n  # Optional Remote Rewrite\n  #remote_rewrite_url: http://remote_rewrite_url:<port>/write\n  # Optional install local instance of Grafana on OpenShift\n  grafana_operator: enabled\n  grafana_project: grafana\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:null},"Allowed values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"openshift_cluster_name"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the openshift cluster set"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user_workload"),(0,r.kt)("td",{parentName:"tr",align:null},"Flag to enable or disable OpenShift User workload monitoring"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"enabled, disabled")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pvc_storage_class"),(0,r.kt)("td",{parentName:"tr",align:null},"Storage class used to persist the OpenShift monitoring"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pvc_storage_size_gb"),(0,r.kt)("td",{parentName:"tr",align:null},"Size of the Persistent Volume Claim for storing OpenShift monitoring"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"remote_rewrite_url"),(0,r.kt)("td",{parentName:"tr",align:null},"Push the Prometheus metrics to a remote system"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"grafana_operator"),(0,r.kt)("td",{parentName:"tr",align:null},"Install the Red Hat Community Grafana Operator"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"enabled, disabled")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"grafana_project"),(0,r.kt)("td",{parentName:"tr",align:null},"Target OpenShift Project for the deployment of Grafana"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",null,"Add the monitor to the Cloud Pak Deployer configuration"),(0,r.kt)("p",null,"Add the following section to the Cloud Pak Deployer configuration, or add the monitor to an existing ",(0,r.kt)("inlineCode",{parentName:"p"},"monitors")," section. "),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"cp4d_monitors")," can be added to an existing configuration yaml file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," folder, or create a seperate yaml file:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"OC_PROJECT: The Project name in which Cloud Pak for Data is deployed where the monitors will be added"),(0,r.kt)("li",{parentName:"ul"},"OC_CUSTER_NAME: The name of the OpenShift Cluster")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# List of cp4d_monitors\ncp4d_monitors:\n- name: cp4d-monitor-set-1\n  cp4d_instance: <OC_PROJECT>\n  openshift_cluster_name: <OC_CLUSTER_NAME>\n  default_monitor_source_repo: https://github.com/IBM/cp4d-monitors\n  default_monitor_source_token_secret: monitors_source_repo_secret\n  #Optional target Container Registry\n  default_monitor_target_cr: de.icr.io/monitorrepo  \n  default_monitor_target_cr_user_secret: monitors_target_cr_username\n  default_monitor_target_cr_password_secret: monitors_target_cr_password\n  # List of monitors\n  monitors:\n  - name: cp4d-platform-wml-deployment-space-job-info\n    #monitor_source_repo:             \n    #monitor_source_token_secret:    \n    #monitor_target_cr:              \n    #monitor_target_cr_user_secret\n    context: cp4d-wml-deployment-space-job-info\n    label: latest\n    schedule: "*/15 * * * *"   \n    event_types:\n    - name: "cp4d_wml_deployment_space_jobs_overall_count"\n      simple_name: "CP4D Watson Machine Learning Deployment Spaces Jobs overall count"\n      alert_type: "platform"\n      short_description: "CP4D Watson Machine Learning Deployment Spaces Jobs Info Overall Count"\n      long_description: "CP4D Watson Machine Learning Deployment Spaces Jobs Info Overall Count: <cp4d_wml_deployment_space_jobs_overall_count>"\n      resolution: "none"\n      reason_code_prefix: "80"\n    - name: "cp4d_wml_deployment_space_jobs_active_count"\n      simple_name: "CP4D Watson Machine Learning Deployment Spaces Active Jobs Count"\n      alert_type: "platform"\n      short_description: "CP4D Watson Machine Learning Deployment Space Acitve Jobs Count"\n      long_description: "CP4D Watson Machine Learning Deployment Space Acitve Jobs Count: <cp4d_wml_deployment_space_jobs_active_count>"\n      resolution: "none"\n      reason_code_prefix: "80"      \n    - name: "cp4d_wml_deployment_space_job_last_status"\n      simple_name: "Status of Last CP4D Watson Mechine Learning Deployment Space Job"\n      alert_type: "platform"\n      short_description: "Status of Last CP4D Watson Mechine Learning Deployment Space Job"\n      long_description: "Status of Last CP4D Watson Mechine Learning Deployment Space Job: <cp4d_wml_deployment_space_job_last_status_success>"\n      resolution: "none"\n      reason_code_prefix: "80"  \n')),(0,r.kt)("h2",null,"Run the Cloud Pak Deployer"),(0,r.kt)("p",null,"Run the Cloud Pak Deployer to implement the changes and deploy the monitors. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"export STATUS_DIR=<Status directory of the Cloud Pak Deployer>\nexport CONFIG_DIR=<Configuration folder used by the Cloud Pak Deployer>\n\n./cp-deploy.sh env apply\n")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-monitors-cp-4-d-wml-deployment-space-job-info-deployer-index-mdx-0c71bfbc5b26c1cc50a7.js.map