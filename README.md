# Messaging API

This is a project for LaHaus technical test, this project uses the [Twilio API](https://www.twilio.com/es-mx/docs) to send text messages.

## Sections

- [Installation](#installation)
- [Usage](#usage)
  - [Consider](#consider)
- [Built](#built)
- [Contributing](#contributing)
- [License](#license)

## Installation

#### Requirements

- Docker

### How to run

First of all, you need your update your environment variables. In order to do that, please update your Twilio credentials on the [environment file](messaging-api/src/config/environment/.env.docker) for docker

Once you have your credentials installed, please run the following commands

```sh
docker-compose up --build
```

Once you have runned that command, please open a tab in your browser with the [main url](http://localhost:3000) of the project.

### Consider

For the use of this application we have some restrictions for the correct operation of it:

- Only numbers from Colombia and previously registered in the [Twilio API](https://support.twilio.com/hc/en-us/articles/223180048-Adding-a-Verified-Phone-Number-or-Caller-ID-with-Twilio) are available.

## Built

The API was developed using the following technologies:

- npm
- docker

- Frontend:

  - ReactJS
  - TailwindCss

- Backend:
  - Node JS (Express)
  - PostgreSQL
  - OpenApi 3

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
