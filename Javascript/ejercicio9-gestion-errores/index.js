const winston = require('winston');

const logger = winston.createLogger({
	level: 'error',
	format: winston.format.json(),
	defaultMeta: { service: 'user-service' },
	transports: [
		//
		// - Write all logs with importance level of `error` or less to `error.log`
		// - Write all logs with importance level of `info` or less to `combined.log`
		//
		new winston.transports.File({ filename: 'error.log', level: 'error' }),
		new winston.transports.File({ filename: 'combined.log' }),
	],
});

const error = () => {
	throw new Error('Hola soy un error');
};

try {
	error();
} catch (e) {
	logger.log('error', `${e}`);
}
