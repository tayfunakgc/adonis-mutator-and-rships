## Model Relationships without FK & Basic Mutator Usage

## Running app

+ npm install
+ adonis migration:run
+ adonis seed
+ adonis serve --dev
+ open http://localhost:3333/tests in browser

## Note
1. This sample does not include any controller. Check "start/routes.js"
2. To parse sub json string use "Mutators" in "app/Models/Test.js" (lines from 8 to 10)
3. Car and owner migration file dont include Foreign key. In "app/Models/Owner.js" check "cars" function & in "app/Models/Car.js" check "owner" function
