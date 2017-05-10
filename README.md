# XP 2017 Hackergarden mobile app

[codecentric Digitization Labs](https://www.codecentric.de/dl) are hosting a Hackergarden at the [XP 2017](https://www.xp2017.org) conference in Cologne.
This is the GitHub repository for the mobile application developed during the conference.

You are invited to join the team and hack away at the mobile app or the [web app / backend](https://github.com/xp2017-hackergarden/server).
We're located in the foyer of the conference venue.

In the following paragraphs, you should find all relevant information. If you don't have your own development machine with you, that's fine, too. 
You can pair with one of us or just watch.

If you aren't a coder and still want to participate, feel free to practice your coaching skills on us or just put your feature ideas into the [inbox](https://trello.com/b/Etep7zB1/xp-2017-hackergarden).

# How to join

## Joining the Hackergarden team
* in order to join our github team please provide your github username to members of the team
* after that you'll be added to hackergarden github organisation and you will get access to the app repository
* in order to work on react-native part of the app you should clone following project - https://github.com/xp2017-hackergarden/app

## Setting up the development environment
In order to work on the app, you will need to have the following tools installed:

* [Node.js](https://nodejs.org)
* The [Yarn](https://yarnpkg.com) package manager
* The [React Native](https://www.npmjs.com/package/react-native-cli) client
* The [Android SDK](https://developer.android.com/studio/index.html) (we're using version 23) if you want to build and
run the application

You might want to read the [documentation](https://facebook.github.io/react-native/docs/getting-started.html) for
setting up a React Native development environment. Follow the *Android* part for your OS.

## Starting to work on a feature
To start working on a feature checkout our [inbox on Trello](https://trello.com/b/Etep7zB1/xp-2017-hackergarden) for
feature ideas.
If you found an interesting one:

1. Decide if you want to pair up on it.
2. Pull it into *Development*.
3. Create a feature branch or introduce a feature toggle if you want to work from trunk.
4. Hack away at it.
5. Once you feel like it's finished, merge with or push to `develop`, which will trigger the CD pipeline and result in a
new release
if everything goes well.
6. Pull your card into *Done* or *Verification* (if you want to do the whole feedback cycle and talk to people about
whether the feature solves their problem).

If you don't pair when developing a new feature, you should probably ask for some kind of review.


## Triggering deployments
We have a continuous delivery pipeline set up that will automatically trigger new deployments whenever a
commit on `master` is detected.

Please **do not** push to master manually. [CircleCI](https://circleci.com/) is going to
do that for you whenever`develop` has successfully been build. That way, we won't waste time building the app on
[BuddyBuild](https://www.buddybuild.com/) when tests are still failing.

BuddyBuild is set up to automatically deploy each release to the alpha test group. Please note that it can take a while
for your release to actually show up as Play Store update.

People can join the test group by joining the
[XP 2017 Hackergarden Google+](https://plus.google.com/communities/113114317075009069296) community and activating the
app by opening the [activation link](https://play.google.com/apps/testing/com.xpapp).

# Application architecture
We're using [React Native](https://facebook.github.io/react-native/) with [Redux](http://redux.js.org/) for the mobile application.
If you're familiar with [React](https://facebook.github.io/react/), you should feel right at home.

Please note that only the Android version of the application will be developed during the conference, because we won't realistically be able to deploy an iOS version to the conference attendants with the little time available.

## Project structure
We use a domain-driven approach to structuring the application, with each concern having its own sub-folder inside the ```src/``` folder.

For each component inside a given domain, we create one production code source file and one test file.

An `index.js` inside each domain directory exposes the default export and all components that can be considered the _public interface_ of that domain.

We encourage you to stick to this structure.

There are two special folders:

* `src/App/` contains the code that glues everything together
(reducers, top level components, etc.).  Don't forget to include new application state here if
 you create a separate reducer for a new domain.
* `src/Common/` contains things used across all components (stylesheets, configuration parameters, constants, etc.).

## Libraries
As mentioned above, we use [Redux](http://redux.js.org/) as [Flux implementation](https://facebook.github.io/flux/docs/overview.html). We use a few addons for this:

* [react-redux](https://github.com/reactjs/react-redux) for binding to React
* [redux-thunk](https://github.com/gaearon/redux-thunk) for dealing with asynchronous actions
* [redux-persist](https://github.com/rt2zz/redux-persist) for persisting stores across app restarts

For HTTP calls, we are using [axios](https://github.com/mzabriskie/axios) (with [axios-mock-adapter](https://github.com/ctimmerm/axios-mock-adapter) for testing).

Also included are:
* [react-native-fcm](https://github.com/evollu/react-native-fcm) for handling [FCM push notifications](https://firebase.google.com/docs/cloud-messaging/)
* [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) for some iconograhpy

Feel free to add more if you need them for a feature.

## Coding guidelines
Apart from using the directory structure outlined above, you might want to follow the following conventions to make it easier for everybody to read and understand the code:

 * Make use [ES6](http://es6-features.org) features and syntax when appropriate
 * Prefer [stateless, functional components](https://facebook.github.io/react/docs/components-and-props.html#functional-and-class-components)
 * Have a look at (and use) `.editorconfig` and `.eslintrc.js`
 * Write some unit tests (it's easy for actions and you can use [snapshot testing](https://facebook.github.io/jest/docs/snapshot-testing.html) for components)

# Important resources

## Services
* [CircleCI dashboard](https://circleci.com/gh/xp2017-hackergarden/app)

## Documentation
* [codecentric labs zero Team page](https://codecentric-labs-zero.github.io/)
