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

function main(parent) {
  // [START dialogflow_v2_generated_Agents_RestoreAgent_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The project that the agent to restore is associated with.
   *  Format: `projects/<Project ID>`.
   */
  // const parent = 'abc123'
  /**
   *  The URI to a Google Cloud Storage file containing the agent to restore.
   *  Note: The URI must start with "gs://".
   */
  // const agentUri = 'abc123'
  /**
   *  Zip compressed raw byte content for agent.
   */
  // const agentContent = 'Buffer.from('string')'

  // Imports the Dialogflow library
  const {AgentsClient} = require('@google-cloud/dialogflow').v2;

  // Instantiates a client
  const dialogflowClient = new AgentsClient();

  async function restoreAgent() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const [operation] = await dialogflowClient.restoreAgent(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  restoreAgent();
  // [END dialogflow_v2_generated_Agents_RestoreAgent_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
