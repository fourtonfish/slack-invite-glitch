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
3. Update the `coc.handlebars` file?
4. Enjoy!

Optionally, you can update the `.handlebars` files manually, if you'd like to add more text, links to your social media, etc.

Also, if you add a lot of text into the footer, you might have to add extra padding to the `section` element. Look for a line that says `padding: 0 0 5em;` inside the`public/css/styles.css` stylesheet.

## TODO

- Move images to `assets`
  - The `assets` folder doesn't seem to support SVGs
- Add a more generic favicon/images.
- Clean up the generated CSS file?
- Add explanation of the `.handlebars` files.