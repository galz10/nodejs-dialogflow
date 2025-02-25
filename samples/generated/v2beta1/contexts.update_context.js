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

function main(context) {
  // [START dialogflow_v2beta1_generated_Contexts_UpdateContext_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The context to update.
   */
  // const context = ''
  /**
   *  Optional. The mask to control which fields get updated.
   */
  // const updateMask = ''

  // Imports the Dialogflow library
  const {ContextsClient} = require('@google-cloud/dialogflow').v2beta1;

  // Instantiates a client
  const dialogflowClient = new ContextsClient();

  async function updateContext() {
    // Construct request
    const request = {
      context,
    };

    // Run request
    const response = await dialogflowClient.updateContext(request);
    console.log(response);
  }

  updateContext();
  // [END dialogflow_v2beta1_generated_Contexts_UpdateContext_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
