# Auto-invite page for your Slack community
***WORK IN PROGRESS***

This is a simple Slack auto-invite page based on the one used on [botmakers.org](https://botmakers.org/).

[See preview.](slack-invite-glitch)


## Setup

1. Get your [Slack token](https://api.slack.com/custom-integrations/legacy-tokens).
2. Update your `.env` file:

```
COMMUNITY_NAME='My community'
COMMUNITY_DESCRIPTION='Short description of your community.'
SLACK_URL='https://mycommunity.slack.com/'
SLACK_TOKEN='SECRETSTUFF123'
CONTACT='your@email.com'
```


3. Enjoy!

Also, maybe update the `coc.handlebars` file?

## TODO

- Move images to `assets`
  - The `assets` folder doesn't seem to support SVGs
- Add a more generic favicon.
- Clean up the generated CSS file.
- Add a proper footer.
- Add explanation of the `.handlebars` files.