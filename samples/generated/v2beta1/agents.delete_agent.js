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
  // [START dialogflow_v2beta1_generated_Agents_DeleteAgent_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The project that the agent to delete is associated with.
   *  Format: `projects/<Project ID>` or
   *          `projects/<Project ID>/locations/<Location ID>`.
   */
  // const parent = 'abc123'

  // Imports the Dialogflow library
  const {AgentsClient} = require('@google-cloud/dialogflow').v2beta1;

  // Instantiates a client
  const dialogflowClient = new AgentsClient();

  async function deleteAgent() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const response = await dialogflowClient.deleteAgent(request);
    console.log(response);
  }

  deleteAgent();
  // [END dialogflow_v2beta1_generated_Agents_DeleteAgent_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
