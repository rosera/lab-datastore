# Producer

In the producer code, we initiate a Logging Sink. A Logging Sink enables an export of the logs generated on Google Cloud.

## Getting Started

The following architecture diagram illustrates what is happening when a Logging Sink is enabled.

![Notification architecture](https://github.com/rosera/lab-datastore/blob/master/images/producer-overview.png "Producer")

In our example, the filter specifies gce_instances (i.e. virtual machines). When a virtual machine is provisioned, the associated 
logs matching the filter criteria are sent to the Cloud Run app. The general process is described below:

* GCE Instance is created
* A log entry matching the GCE instance specified
* Logging Sink filter is invoked
* Message written to Cloud PubSub
* Cloud Run processes the message
* Information posted to the specified endpoint


The code is in two parts:

* lab-service which is a [Cloud Run](https://cloud.google.com/run) application that provides the Logging Sink
* webhook which is a [Cloud Function](https://cloud.google.com/functions) application that provide an example endpoint

## Contributing

Any contributions are welcomed. Please read the [CONTRIBUTING.md](CONTRIBUTING.md) for details on the process for submitting pull requests.

## Author

Rich Rose

## License

This repository is licensed under the MIT license - see [LICENSE.md](LICENSE) for further details
