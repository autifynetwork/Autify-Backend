#!/bin/bash

# Get the private IP address of the EC2 instance
PRIVATE_IP=$(ec2metadata --local-ipv4)

# Update the .env file with the private IP
sed -i "s/{{PRIVATE_IP}}/$PRIVATE_IP/g" .env
