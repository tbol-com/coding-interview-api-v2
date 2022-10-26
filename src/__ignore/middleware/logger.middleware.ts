import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { blue, blueBright, green, red } from 'chalk';

const getProcessingTimeInMS = (time: [number, number]): string => {
  return `${(time[0] * 1000 + time[1] / 1e6).toFixed(2)}ms`;
};

function loggerMiddleware(req: Request, res: Response, next: NextFunction) {
  const id = uuidv4();
  const { method, url } = req;

  const start = process.hrtime();
  const startText = green(`START: ${getProcessingTimeInMS(start)}`);
  const idText = blue(`[${id}]`);
  const timeStampText = blueBright(`[${new Date().toISOString()}]`);
  console.log(`${idText}${timeStampText} ${method} ${url} ${startText}`);

  res.once('finish', () => {

    const end = process.hrtime(start);
    const endText = red(`END:   ${getProcessingTimeInMS(end)}`);
    console.log(
      `${idText}${timeStampText} ${method} ${url} ${endText} HttpResponseCode: ${res.statusCode}`,
    );
  });

  next();
}

export default loggerMiddleware;
