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
  // [START dialogflow_v2_generated_Participants_SuggestFaqAnswers_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the participant to fetch suggestion for.
   *  Format: `projects/<Project ID>/locations/<Location
   *  ID>/conversations/<Conversation ID>/participants/<Participant ID>`.
   */
  // const parent = 'abc123'
  /**
   *  The name of the latest conversation message to compile suggestion
   *  for. If empty, it will be the latest message of the conversation.
   *  Format: `projects/<Project ID>/locations/<Location
   *  ID>/conversations/<Conversation ID>/messages/<Message ID>`.
   */
  // const latestMessage = 'abc123'
  /**
   *  Max number of messages prior to and including
   *  [latest_message] to use as context when compiling the
   *  suggestion. By default 20 and at most 50.
   */
  // const contextSize = 1234

  // Imports the Dialogflow library
  const {ParticipantsClient} = require('@google-cloud/dialogflow').v2;

  // Instantiates a client
  const dialogflowClient = new ParticipantsClient();

  async function suggestFaqAnswers() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const response = await dialogflowClient.suggestFaqAnswers(request);
    console.log(response);
  }

  suggestFaqAnswers();
  // [END dialogflow_v2_generated_Participants_SuggestFaqAnswers_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
