#  Consumer
In the consumer code, we build a small app to demonstrate access to the logging data produced.

## Getting Started

The following architecture diagram illustrates what is happening in our example app.

![Consumer architecture](https://github.com/rosera/lab-datastore/blob/master/images/consumer-overview.png "Consumer")

In the diagram, the following process is observed:

* Access the created json files
* Load the information - (CSV/json) filtering process applied (So the data can be enriched if required)
* Data saved in json format
* Example application reads the content and displays the information

## Applications

* lab-list: used to convert a csv to json file 
* spl-data: used to display the information stored in the json file


## Contributing
Any contributions are welcomed. Please read the [CONTRIBUTING.md](CONTRIBUTING.md) for details on the process for submitting pull requests.

## Author

Rich Rose

## License

This repository is licensed under the MIT license - see [LICENSE.md](LICENSE) for further details
