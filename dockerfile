FROM node:20-alpine

# set working directory
WORKDIR /sawatzky_matthew_ui_garden


# Copy app files
COPY package.json .
COPY package-lock.json .

# install via NPM
RUN npm install --silent

# copy application files
COPY . .

# run the application
CMD ["npm", "run", "storybook"]


