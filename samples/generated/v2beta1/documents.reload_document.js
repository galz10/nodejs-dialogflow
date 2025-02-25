// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

function main(name) {
  // [START dialogflow_v2beta1_generated_Documents_ReloadDocument_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the document to reload.
   *  Format: `projects/<Project ID>/locations/<Location
   *  ID>/knowledgeBases/<Knowledge Base ID>/documents/<Document ID>`
   */
  // const name = 'abc123'
  /**
   *  The path for a Cloud Storage source file for reloading document content.
   *  If not provided, the Document's existing source will be reloaded.
   */
  // const gcsSource = ''
  /**
   *  Whether to import custom metadata from Google Cloud Storage.
   *  Only valid when the document source is Google Cloud Storage URI.
   */
  // const importGcsCustomMetadata = true

  // Imports the Dialogflow library
  const {DocumentsClient} = require('@google-cloud/dialogflow').v2beta1;

  // Instantiates a client
  const dialogflowClient = new DocumentsClient();

  async function reloadDocument() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const [operation] = await dialogflowClient.reloadDocument(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  reloadDocument();
  // [END dialogflow_v2beta1_generated_Documents_ReloadDocument_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
