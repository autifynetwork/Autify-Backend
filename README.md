[![push-docker-image](https://github.com/autifynetwork/Autify-Backend/actions/workflows/push-docker-img.yml/badge.svg)](https://github.com/autifynetwork/Autify-Backend/actions/workflows/push-docker-img.yml)
 
 ## Autify Backend

 ### Autify Network's Backend Features

 - GraphqlAPI :
    - Private API following industry best practices
    - For admin activities (TBD)
 - Authentication :
    - Code is sent via SendGrid to the end user email which can be exchanged for jwt auth token
    - OAuth integration (TBD)
 - Wallet Creation 
    - Private and public are being created using magic which gets linked to the authenticated user.
    - This same wallet is used for tracking subscription usage and limit barriers. 
 - Security
    - Velocity check based on user verification level
    - Spam protection and white-listing throughout the onboarding flow
    - Configurable 2FA for every check (TBD)
    - DDoS prevention
      - via rate limiting in front of critical APIs
      - via gee test CAPTCHA (TBD)
 - Resilience
    - Databases (PostgreSQL and Redis) are defaulted on high availability/resilience mode. i.e: if one pod/node goes down, there will be an automatic failover
    on another pod/node.
 - Notification
    - Email-based important and made notifications will be sent
    - On-app notifications for goods movements that also support real-time data coordination with each party involved.


### Tech Stack

 - AWS, Kubernetes, Terraform, Helm, Concourse, Docker
 - Prometheus
 - PostgreSQL, Redis
 - NodeJs
 - Sia
 - Typescript
 - GraphQL
 - Vite

