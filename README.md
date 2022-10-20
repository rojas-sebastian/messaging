# Messaging API

This is a project for LaHaus technical test, this project uses the [Twilio API](https://www.twilio.com/es-mx/docs) to send text messages.

## Sections

- [Installation](#installation)
  - [Requirements](#requirements)
  - [How to run](#how-to-run)
  - [Consider](#consider)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Next steps for a future version](#next-steps-for-a-future-version)
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

#### Running locally without docker

First of all, since running locally, you need to create your [local environment file for development](messaging-api/src/config/environment/.env.development) in this path. You can use as base the example [environment file](messaging-api/src/config/environment/.env.example)

Once you have this file configured:

1. Go to the internal dir `messaging-api`, and run the following command line

```sh
npm run start
```

1. Go to the internal dir `webapp`, and run the following command line

```sh
npm run start
```

You can go to your browser and see the application into http://localhost:3000

### Consider

For the use of this application we have some restrictions for the correct operation of it:

- Only numbers from Colombia and previously registered in the [Twilio API](https://support.twilio.com/hc/en-us/articles/223180048-Adding-a-Verified-Phone-Number-or-Caller-ID-with-Twilio) are available.

## Technologies Used

The API was developed using the following technologies:

- NodeJS v16
- npm
- Docker

- For the frontend webapp I used:

  - ReactJS
  - TailwindCSS

- For the backed api I used:
  - Node JS (Express)
  - PostgreSQL
  - OpenApi 3
  - Jest (I'm having problems mocking some dependencies)
  - Winston for centralized logger
  - Morgan to allow access logs for express

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Next steps for a future version

- Configure production environment into a Cloud
- Adding continous integration
- Adding initial structure for unit testing into messaging-api; I'm trying to follow [this tutorial](https://www.youtube.com/watch?v=lZJ1mar_znk), but currently I'm struggling mocking the external dependencies like Twilio and Postgres. Once I'll have an stable version, I need to increase unit test coverage
- For logging I've configured winston transport, in a next version we can send logs into a centralized logs server (logdna, elasticsearch, datadog, newrelic)

## License

[MIT](https://choosealicense.com/licenses/mit/)
