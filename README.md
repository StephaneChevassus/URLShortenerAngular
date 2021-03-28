
# URLShortener

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

This project is a quick attempt to build the front end of an existing ASP.NET Core application in Angular with no changes to the backend application, except for the creation of an API to let the front end app communicate with the backend.

**Exiting project:** https://github.com/StephaneChevassus/URLShortener

**Live Demo:** https://urlshortenerwebsite.azurewebsites.net

For the purpose of this SAP, I've added an API endpoint to the URLShortener project in order to retrieve and post data. CORS has also been setup.

**Live Endpoint:** https://urlshortenerwebsite.azurewebsites.net/api/shorturls

**Live Demo Angular Application:** http://urlshortener-angular.s3-website-ap-southeast-2.amazonaws.com

Being a demo, the API is not restricted at all. All data currently stored can be fetched by anyone.

Be aware that when you shorten a link using this Angular application, you will be redirected to a view that will display all shortened URLs currently stored.


  

## Development server

  

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

  

## Code scaffolding

  

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

  

## Build

  

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Testing

There is no testing for the moment as I was simply exploring limited part of Angular given the amount of time that I could allocate to this project. I will look at testing next.
  
