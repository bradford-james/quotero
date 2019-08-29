# Quotero

The project consists of a cli-tool that will retrieve a random quote, upon using the command "quotero", to lighten up your terminal as you work and possibly provide that spark of inspiration that's been eluding you.

Quotero is CLI tool, when installed globally, will print quotes on design from Martin Scorsese to Pablo Picaso to the console.
Type 'quotero', see the quote, simple as that.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- This is a package registered with [npm](https://www.npmjs.com/get-npm)
- Quotero is coded with [Node.js](https://nodejs.org/en/download/)

Check to see that you have both downloaded:

```
> npm -v
v6.10.2
> node -v
v8.9.4
```

### Installing

Install globally (with npm)

```
>npm install -g quotero
```

In your terminal of choice:

```
>quotero

    Never re-invent the wheel, unless you're sure the client needn't go anywhere.
    -Russell Bishop

```

## Running the tests

```
> npm test
```

- Retrieval of quote from db doc as object

```javascript
{
    quote: expect.any(String),
    author: expect.any(String)
}
```

- All CLI commands

```
> quotero
> quotero --version
> quotero -v
> quotero --help
> quotero -h
```

## Built With

- [Node](https://nodejs.org/en/docs/) - Base Platform
- [LowDB](https://www.npmjs.com/package/lowdb) - Source for quotes
- [Minimist](https://www.npmjs.com/package/minimist) - Parse input parameters, commands, options
- [Ora](https://www.npmjs.com/package/minimist) - Visual loader

Also includes Dockerfile and Jenkinsfile

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/bradford-james/quotero/tags).

## Authors

- **Brad Wettig** - [see more](https://www.bwettig.com/) projects like this

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details

## Upcoming Development

- Establish Quotero as an API (not have to store db doc locally)
