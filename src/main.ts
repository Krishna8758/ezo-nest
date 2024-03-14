require('dotenv').config({ path: '.env' })
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ExceptionsHandlerFilter } from './utils/exception-handler.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { swagger_api_response } from './utils/swaggerApiResponse.entity';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix('v1/api');

  // Start handle Global exceptions
  const httpAdapterHostRef = app.get(HttpAdapterHost);
  app.useGlobalFilters(new ExceptionsHandlerFilter(httpAdapterHostRef));
  // End

  app.use(function (req, res, next) {
    var oneOf = false;
    if (req.headers.origin) {
      res.header('Access-Control-Allow-Origin', req.headers.origin);
      oneOf = true;
    }

    if (req.headers['access-control-request-method']) {
      res.header(
        'Access-Control-Allow-Methods',
        req.headers['access-control-request-method'],
      );
      oneOf = true;
    }

    if (req.headers['access-control-request-headers']) {
      res.header(
        'Access-Control-Allow-Headers',
        req.headers['access-control-request-headers'],
      );
      oneOf = true;
    }

    if (oneOf) {
      res.header('Access-Control-Max-Age', 60 * 60 * 24 * 365);
      res.header('Access-Control-Allow-Credentials', true);
    }

    // intercept OPTIONS method
    if (oneOf && req.method == 'OPTIONS') {
      res.sendStatus(200);
    } else {
      next();
    }
  })

  const config = new DocumentBuilder()
    .setTitle('EZO Apis Documentation')
    .setVersion('1.0')
    .addServer(`http://localhost:${process.env.PORT}`)
    .addBearerAuth(
      {
        description: `Please enter token`,
        name: 'Authorization',
        bearerFormat: 'Bearer',
        scheme: 'Bearer',
        type: 'http',
        in: 'Header',
      },
      'access-token',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    extraModels: [swagger_api_response],
  });

  SwaggerModule.setup('api-doc', app, document);

  app.useStaticAssets(join(__dirname, '..', 'public'), {
    prefix: '/public/',
  });

  await app.listen(process.env.PORT, () => {
    console.log(`Server running At PORT http://localhost:${process.env.PORT}`);

  });
}
bootstrap();
