import bunyan from 'bunyan';

const logger = bunyan.createLogger({
  name: 'myapp',
  stream: process.stdout,
  serializers: {
    err: bunyan.stdSerializers.err,
  },
});

export default logger;
