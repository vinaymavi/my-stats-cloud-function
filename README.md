# my-stats-cloud-function
My-stats-extension cloud function

# Command to deploy
gcloud beta functions deploy <NAME>  --stage-bucket beta-my-stats-ext.appspot.com --trigger-http

gcloud beta functions deploy website  --stage-bucket beta-my-stats-ext.appspot.com --trigger-http

# Command to run locally
**Start**
 functions-emulator start
 
**Stop**
functions-emulator stop

**Deploy**
functions-emulator deploy <NAME> --trigger-http
functions-emulator deploy website --trigger-http

**CURL Requests** 
