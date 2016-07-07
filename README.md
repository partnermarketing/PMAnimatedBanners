# pm-animated-banners
[![Build Status](https://travis-ci.org/partnermarketing/pm-animated-banners.svg?branch=master)](https://travis-ci.org/partnermarketing/pm-animated-banners)
[![Coverage Status](https://coveralls.io/repos/github/partnermarketing/pm-animated-banners/badge.svg?branch=master)](https://coveralls.io/github/partnermarketing/pm-animated-banners?branch=master)

Partnermarketing front-end API for mapping user data to animate CC html5 banners. Currently only supports animate CC insertion but will eventually support native canvas insertion.

```
npm install pm-animated-banners
```

## Running the tests

To run eslint and unit tests use the command `npm test`

## Usage

Include `dist/pmAnimatedBanners.min.js` above the closing `</body>` tag of the template. Custom properties are to be defined independently from the lib using the `window.pmAnimatedBannersConfig` method. Add the following JavaScript to the template to start customisation.

### Mapping user data
```javascript
  window.pmAnimatedBannersConfig = function(conf) {

    conf.map({
      reference: 'logo',
      image: 'logo.png',
      align: {
        x: 'center',
        y: 'top'
      }
    });

    conf.map({
      reference: 'intro',
      text: 'This is an awesome banner!',
      link: 'http://www.partnermarketing.com',
      onClick: function(layer) {
      	// Handle click event
      }
    });

    conf.map({
      reference: 'stage',
      link: 'http://www.partnermarketing.com'
    });

  };
```

When using this API references must first be defined inside animate CC before using them in the config.
![pm-animated-banners animate CC example](http://i.imgur.com/pN3HIll.jpg)

## Options

#### reference

Type: `string`

Options: `stage`, the animate cc reference example: `myIntro`, `myLogo`

Default: `null`

The shapes reference in animate CC, if using `stage` this will target the entire animation

#### image

Type: `string`

Default: `null`

An image src to load into this container reference, when inserting images they will auto scale to fit the container references dimensions

#### text

Type: `string`

Default: `null`

A text string to replace the dynamic text in this container text reference

#### link

Type: `string`

Default: `null`

Link to open if this shape reference is clicked

#### onClick

Type: `function`

Default: `null`

Callback function for click event, will fire before window location changes

#### align.x

Type: `string`

Options: `left`, `right`, `center`

Default: `center`

The horizontal alignment of this layer relative to the container reference

#### align.y

Type: `string`

Options: `top`, `bottom`, `center`

Default: `center`

The vertical alignment of this layer relative to the container reference

## License

MIT © [partmermarketing](https://github.com/partnermarketing)