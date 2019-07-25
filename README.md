# Angular Builders

![Website Screenshot](screenshot.png)

Click [here](https://angular-builders.dev) to see list of builders.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## Adding a new builder

1. Find the `buidlers.json` in `assets` folder.
2. Provide the data for new builder in below `json` format

```json
{
    "name": "Bazel Build",
    "description": "Bazel is an open-source build and test tool similar to Make, Maven, and Gradle. It uses a human-readable, high-level build language. Bazel supports projects in multiple languages and builds outputs for multiple platforms. Bazel supports large codebases across multiple repositories, and large numbers of users.",
    "repository": "https://github.com/bazelbuild/bazel"
  }
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Become a contributor

#### Missing a builder, found bug or typo in docs?

Please, feel free to open an [issue](https://github.com/santoshyadav198613/angular-builder/issues)
or submit a [pull request](https://github.com/santoshyadav198613/angular-builder/pulls) to make this project better for everyone!
