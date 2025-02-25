[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Dialogflow API: Node.js Client](https://github.com/googleapis/nodejs-dialogflow)

[![release level](https://img.shields.io/badge/release%20level-general%20availability%20%28GA%29-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/dialogflow.svg)](https://www.npmjs.org/package/@google-cloud/dialogflow)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-dialogflow/main.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-dialogflow)




### **_IMPORTANT NOTE_**
**Version 2.0.0 renames `dialogflow` to `@google-cloud/dialogflow` on npm, along with introducing TypeScript types.**


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/nodejs-dialogflow/blob/main/CHANGELOG.md).

* [Dialogflow API Node.js Client API Reference][client-docs]
* [Dialogflow API Documentation][product-docs]
* [github.com/googleapis/nodejs-dialogflow](https://github.com/googleapis/nodejs-dialogflow)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**


* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)
  * [Using the client library](#using-the-client-library)
* [Samples](#samples)
* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart

### Before you begin

1.  [Select or create a Cloud Platform project][projects].
1.  [Enable billing for your project][billing].
1.  [Enable the Dialogflow API API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/dialogflow
```


### Using the client library

```javascript

const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');

/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */
async function runSample(projectId = 'your-project-id') {
  // A unique identifier for the given session
  const sessionId = uuid.v4();

  // Create a new session
  const sessionClient = new dialogflow.SessionsClient();
  const sessionPath = sessionClient.projectAgentSessionPath(
    projectId,
    sessionId
  );

  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: 'hello',
        // The language used by the client (en-US)
        languageCode: 'en-US',
      },
    },
  };

  // Send request and log result
  const responses = await sessionClient.detectIntent(request);
  console.log('Detected intent');
  const result = responses[0].queryResult;
  console.log(`  Query: ${result.queryText}`);
  console.log(`  Response: ${result.fulfillmentText}`);
  if (result.intent) {
    console.log(`  Intent: ${result.intent.displayName}`);
  } else {
    console.log('  No intent matched.');
  }
}

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-dialogflow/tree/main/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Create-intent | [source code](https://github.com/googleapis/nodejs-dialogflow/blob/main/samples/create-intent.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/create-intent.js,samples/README.md) |
| Detect-intent-TTS-response.v2 | [source code](https://github.com/googleapis/nodejs-dialogflow/blob/main/samples/detect-intent-TTS-response.v2.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/detect-intent-TTS-response.v2.js,samples/README.md) |
| Detect-intent-sentiment.v2 | [source code](https://github.com/googleapis/nodejs-dialogflow/blob/main/samples/detect-intent-sentiment.v2.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/detect-intent-sentiment.v2.js,samples/README.md) |
| Detect | [source code](https://github.com/googleapis/nodejs-dialogflow/blob/main/samples/detect.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/detect.js,samples/README.md) |
| Detect.v2beta1 | [source code](https://github.com/googleapis/nodejs-dialogflow/blob/main/samples/detect.v2beta1.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/detect.v2beta1.js,samples/README.md) |
| List-intents | [source code](https://github.com/googleapis/nodejs-dialogflow/blob/main/samples/list-intents.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/list-intents.js,samples/README.md) |
| List Training Phrases | [source code](https://github.com/googleapis/nodejs-dialogflow/blob/main/samples/listTrainingPhrases.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/listTrainingPhrases.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/nodejs-dialogflow/blob/main/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |
| Resource | [source code](https://github.com/googleapis/nodejs-dialogflow/blob/main/samples/resource.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/resource.js,samples/README.md) |
| Set-agent | [source code](https://github.com/googleapis/nodejs-dialogflow/blob/main/samples/set-agent.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/set-agent.js,samples/README.md) |
| Update-intent | [source code](https://github.com/googleapis/nodejs-dialogflow/blob/main/samples/update-intent.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/update-intent.js,samples/README.md) |
| Webhook | [source code](https://github.com/googleapis/nodejs-dialogflow/blob/main/samples/webhook.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/webhook.js,samples/README.md) |



The [Dialogflow API Node.js Client API Reference][client-docs] documentation
also contains samples.

## Supported Node.js Versions

Our client libraries follow the [Node.js release schedule](https://nodejs.org/en/about/releases/).
Libraries are compatible with all current _active_ and _maintenance_ versions of
Node.js.

Client libraries targeting some end-of-life versions of Node.js are available, and
can be installed via npm [dist-tags](https://docs.npmjs.com/cli/dist-tag).
The dist-tags follow the naming convention `legacy-(version)`.

_Legacy Node.js versions are supported as a best effort:_

* Legacy versions will not be tested in continuous integration.
* Some security patches may not be able to be backported.
* Dependencies will not be kept up-to-date, and features will not be backported.

#### Legacy tags available

* `legacy-8`: install client libraries from this dist-tag for versions
  compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).


This library is considered to be **General Availability (GA)**. This means it
is stable; the code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **GA** libraries
are addressed with the highest priority.





More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-dialogflow/blob/main/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its templates in
[directory](https://github.com/googleapis/synthtool).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-dialogflow/blob/main/LICENSE)

[client-docs]: https://googleapis.dev/nodejs/dialogflow/latest
[product-docs]: https://cloud.google.com/dialogflow-enterprise/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=dialogflow.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
