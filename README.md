 ## Autify Backend

 ### Autify Network Backend Features

 - GraphqlAPI :
    - Private API following industry best practices
    - For admin activities (TBD)
 - Authentication :
    - Code is sent via sendgrid to end users email which can be exchanged for jwt auth token
    - OAuth integration (TBD)
 - Wallet Creation 
    - Private and public is being created using magic which gets linked to the authenticated user.
    - This same wallet is used for tracking subscription usage and limit barriers. 
 - Security
    - Velocity check based on user verification level
    - Spam protection and white-listing throughout the onboarding flow
    - Configurable 2FA for every checks (TBD)
    - DDoS prevention
      - via rate limiting infront of critical APIs
      - via geetest CAPTCHA (TBD)
 - Resilience
    - Databases (postgresql and redis) are run by default on high availability/resilience mode. i.e: if one pod/node goes down, there will be an automatic failover
    on another pod/node.
 - Notification
    - Email based important and made made notifications will be sent
    - On app notifications for goods movements that also supports in realtime data coordination with each party involved.


### Tech Stack

 - AWS, Kubernetes, Terraform, Helm, Concourse, Docker
 - Prometheus
 - PostgreSQL, Redis
 - NodeJs
 - Typescript
 - GraphQL
 - Vite

