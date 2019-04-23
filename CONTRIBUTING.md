
# Introduction

### Contribution Overview:

 Thank you for considering contributions to this SmartSleep Analyzer Sample Application!

As a tl;dr -- please ensure you are contributing to the tip of `develop`, and browse any existing issues and pull requests to be sure your changes are not being covered elsewhere!
 
> Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue, assessing changes, and helping you finalize your pull requests.


### Contributions: Do

> Contributions may include, but are not limited to the following:
>  - Fixing bugs
>  - Improving code style to meet industry best practices
>  - Improving documentation, tutorial material, or markdown
>  - Extending the application to exemplify additional API endpoints
>  - Adding support for new Angular/etc releases

### Contributions: Don't

> The primary goal of this sample application is demonstrate an easy-to-follow example of using the SmartSleep Analyzer API.

> Let's try to avoid the following:
> - Exemplifying or testing other, erroneous APIs
> - Adding unnecessary complexity or tutorial material

# Ground Rules
### Responsibilities

> Contributors are expected to do the following:
> - Ensure cross-platform compatibility for every change that's accepted. Windows, Mac, Debian & Ubuntu Linux.
> - Create issues for any major changes and enhancements that you wish to make.
> - Conduct transparent discussions, and leverage the repo community.
> - Limit the scope of feature versions, aiming for one new feature per version.
> - Be welcoming to all community members, and be encouraging to contributors from all backgrounds.

# Your First Contribution
The primary goals of this sample application are simplicity, and API demonstration.

#### New to open-source contributions?
> Here are a few helpful links, to get started:
> - [Make a pull request](http://makeapullrequest.com/)
> - [First-Timers Only](http://www.firsttimersonly.com/)
> - [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github).

#### Not sure where to begin contributing?
> Get a feel by looking at some other sample Angular applications on Github:
> - [Angular RealWorld Example App](https://github.com/gothinkster/angular-realworld-example-app)
> - [Angular Example App](https://github.com/Ismaestro/angular7-example-app)

#### An important note for beginners:
>If a maintainer asks you to "rebase" your PR, they're saying that a lot of code has changed, and that you need to update your branch so it's easier to merge.

# Getting started
### For something that is bigger than a one or two line fix:

>1. Look through existing issues and pull requests to check if someone else is already working on it
>    - We use `someone working on it` label to mark such issues.
>2. Fork, and do your changes
>    - Ensure you have followed the code style for the project.
>    - Ensure your commits are descriptive, as described in *"Committing Your Changes"*, below.
>3. If you like the change and think the project could use it:
>    - Send a pull request, as described in *"Submitting Pull Requests"*, below.


### For small or "obvious" fixes:

> Help with the following by simply commenting directly on a pull request, or submitting a new one, as described above:
>* Spelling or grammar fixes
>* Comment/style/whitespace clean up
>* Adding log/debug messages
>* Changes to ‘metadata’ files, .gitignore, etc.
>* Moving source files

# Committing your changes

### Commit Message Conventions:

> When committing atop your fork, ensure your commit messages:
>* Begin with {typo, whitespace, grammar, style, logging, metadata} where applicable
>* Have a descriptive summary
>* Have a descriptive body, for anything except minor/obvious changes
>* Include links to references, such as stackoverflow, where applicable

> Additionally be sure your commits do not:
>* Contain credentials or personal identifiers
>* Expose sensitive URLs or service endpoints not meant for the public

# Submitting Pull Requests

### Staying in-sync with upstream:

> With your local feature branch checked out:
>* Keep your local `develop` branch pointing to the upstream `develop` branch
>    * `git remote add upstream https://github.com:philips-software/SmartSleep-Analyzer-SampleApp-Angular.git`
>    * `git fetch upstream`
>    * `git branch --set-upstream-to=upstream/develop develop`
>* Pull `develop` into your feature branch, and resolve any conflicts
>     * `git pull upstream develop`
>* Take a look at [Syncing a fork](https://help.github.com/articles/syncing-a-fork/) for more info.

### Submitting your Pull Request:

> Once you are in-sync with `develop`, and any conflicts are resolved:
>* Double check any tests still pass
>* Ensure your changes still work as designed
>* Push your fork'd changes
>* Submit a Pull Request to *our* `develop branch!