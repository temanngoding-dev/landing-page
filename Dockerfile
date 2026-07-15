FROM node:24-alpine

WORKDIR /app

# Copy only package files first to leverage Docker layer caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Source code will be mounted via compose volume at runtime
# (so we don't COPY . . here — that would shadow the volume mount)

EXPOSE 3000

# Next.js dev server must bind to 0.0.0.0 to be reachable from outside the container
ENV HOSTNAME=0.0.0.0

CMD ["npm", "run", "dev"]
