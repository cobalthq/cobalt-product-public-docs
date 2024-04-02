# Sequence recorder

Cobalt's Sequence Recorder is a browser plugin that records your actions in the browser. This can specifically
help you with setting up an authenticated target. These actions will then be
replayed by the scans when trying to authenticate to the target.

# Installation

You can install the [Chrome browser extension]  or the [Firefox add-on] as you would normally
install any other browser plugin

# Usage

Once installed, click on Cobalt's extension icon, a small window will pop up. Type in there
the URL of the target that you'd like to add authentication to and click `Start Recording`


![Click Start recording](/deepdive/scans/sequence-recorder/recorder1.png "Start Recording")

You'll see a red dot (🔴) in the tab title, meaning that it's recording. Perform the necessary
actions to authenticate. Once done, click on the extension icon again and click `Stop Recording`.

![Click Stop recording](/deepdive/scans/sequence-recorder/recorder2.png "Stop Recording")

A new tab will appear. You can either copy the sequence to the clipboard or download it as a file.

![Get the sequence](/deepdive/scans/sequence-recorder/recorder3.png "Get the sequence")

You can now go to your target settings on Cobalt and paste or upload the sequence there.

Once those steps are completed, scans against this target will try to authenticate using these steps.

<!-- links -->

[Chrome browser extension]: https://chromewebstore.google.com/detail/cobalt-sequence-recorder/enncnbaaflabakepkoemnilfpemdmemh
[Firefox add-on]: https://addons.mozilla.org/en-US/firefox/addon/cobalt-sequence-recorder/
