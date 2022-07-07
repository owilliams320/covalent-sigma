# Covalent Sigma

## Installing

`npm ci` (if running npm 6 or earlier)
`npm ci --legacy-peer-deps` (if running npm 7 or later)

## Running Storybook

`npm run storybook`

to produce static assets for deployment run `npm run storybook:build`

## Generating build assets

`npm run lib:build`

## Running Chromatic

`npx chromatic --project-token=${CHROMATIC_PROJECT_TOKEN}`
