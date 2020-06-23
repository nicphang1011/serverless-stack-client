export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_51GvfiXKQYMcC604iOWMz2VgiNDiLxACePmGc0a1Cn2O2VHfXOYNehS6WOUwJPNsbV8r9sQJdSOJ8YNP6qWc0iwGo00KcxcfYFn",
  s3: {
    REGION: "us-east-1",
    BUCKET: "nicnotesappuploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://rhkutvii60.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_DkUtSwjmU",
    APP_CLIENT_ID: "49r6vuu9qkp7r2ia1q28kt7oeb",
    IDENTITY_POOL_ID: "us-east-1:f059bdbd-2c86-4a7b-84c8-a88cf64054be"
  }
};