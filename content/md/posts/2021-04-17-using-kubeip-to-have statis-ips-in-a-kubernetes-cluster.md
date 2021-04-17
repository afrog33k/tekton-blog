{:title "Using KubeIP to have static IP in GKE"
:layout :post
:tags  ["kubernetes" "gke" "tech" "golang" "kubeip"]
:toc true}


This is a small rant about a library I discovered some time ago  at work to use
with our Kubernetes cluster manged by Google Cloud. The library is called [*Kube
IP*](https://kubeip.com/ "Kube IP") and I absolutely love it!


## Infrastructure on AWS

At my current work(which I will be leaving in 2 weeks to be exact), I started
maintaining a cloud managed Kubernetes cluster(GKE) some 6 months ago. Kubenetes
felt like the right kind of tool for our infrastructure needs and so far it has
been a really thrilling experience. Before this we used to use AWS exclusively
and used to have containarized apps deployed in separate EC2 instances. This
turned out slightly more expensive and resulted in a lot of resource waste. All
of these machines were inside a public subnet in a VPC. We had a big PostgreSQL
database to which all of the aforementioned apps communicated with. The design
decision I took was to use AWS RDS for the database server and keep it in a
private subnet under the same VPC. I added inbound rules on the security group
to allow connections to the EC2 instances in the VPC.

## Kubernetes migration(also AWS to GCP migration)

Once I decided to move all the above containerized apps to Kubernetes(which was
a long process), the next design choice was to decide what to do about the
database. Migrating the database to Cloud SQL(the managed database service of
GCP) felt like a lot of work especially since we were majorly short staffed. Instead I decided
to keep the DB over at AWS. Opening the DB to the Internet so the K8s cluster
can communicate with it felt like a death wish. So instead I decided to keep it
private and whitelist the IP addresses of the Source IP of the requests from the
Kubernetes Cluster. I expose each deployment on the cluster with a ClusterIP 
Service type and used an nginx-ingress controller to open up the services to the
Internet.

### The sad story of ephemeral node IPs


I noticed that the Source IP of the requests from the pod was
the IP address of the node it was deployed in. My mind went -
"Easy! Just whitelist those IPs!". Oh boy, was I wrong! I understood that the IP
addresses of the nodes kept changing since they were ephemeral in nature. I
thought that the best way to solve this problem was to reserve static IPs for the
nodes in the cluster. I painfully realized that the nodes of the cluster kept
changing(auto-scaling,etc. like it should), along which changes the IP address.
A lot of looking up time later I found this wonderful library called *Kube IP*.


### Kube IP to the rescue

The idea was quite simple. I deploy KubeIP in a separate nodepool in the
cluster, and configure it to monitor another nodepool which I expect to have
staic IP addresses. I have to reserve n-number of static IP addresses first on
Google Cloud and give them a label that I configure KubeIP with. KubeIP pod will
monitor for any event on the Kubernetes API that signals a removal or addition of
nodes to the nodepool it is monitoring. Once it records am addition to the
nodepool, it forces the node to have an IP address from the reserved static IP
list which is not used by any of the nodes. So far this has been working out
great for me.

One thing that was kind of going wrong for me at the beginning was that the pods
gets scheduled in the KubeIP nodepool (I guess this was my lack of understanding
of kubernetes). The way I solved it was I tainted the nodes in the
KubeIP node pool with a NoExecute taint accompanied with a specific Key Value. I made
the KubeIP pod tolerant to this taint value and everything worked smoothly. The
documentation for [taints and
tolerations](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/)
is very descriptive.

The documentaion of KubeIP tool is very well done and I am starting to look into
the codebase of the tool. I am counting this as part of my Go explorations. I
will document how my first impression of reading Go code was in another post. I
know that I have so much more to learn about Kubernetes and may be there is a
better/cleaner/cheaper way to deal with the problem I was having. I hope to keep
learning a bit each day. But in the meantime, here is to small victories! :-)


Fin.
