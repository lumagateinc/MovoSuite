### Scheduled Actions

MovoSuite uses the following scheduled actions.

| Cycle                      | Interval                            | Description                         |
|----------------------------|-------------------------------------|-------------------------------------|
| Check Deployment Queue     | Once a minute                       | Checks and evaluates requests in the deployment queue.|
| Check Purchase Queue       | Once a minute                       | Checks and evaluates requests in the purchase queue.  |
| App List Update            | On the hour                         | Checks for new VPP tokens and apps in Intune and synchronizes to   MovoSuite. Creates new install/remove groups for newly discovered apps.  |
| App Metadata Update        | Every 6 hours, on the hour          | Updates MovoSuite apps with details from Apple's API, including artwork and price.|
| Device Enrollment Update   | Every two hours, at 10 minutes past | Updates MovoSuite's devices with DEP and AutoPilot details from Intune. |
| Device List Update         | Every 30 minutes                    | Updates MovoSuite's list of managed devices. |
| Device Rename              | On the hour                         | Evaluates MovoSuite's list of devices and issues a rename command via   Intune if the device does not map to the defined format.  |
| Device Unenrollment Update | Every 12 hours                      | Looks for devices that are no longer managed and marks as not enrolled.  |
| Location List Update       | Every hour, at 15 minutes past      | Evaluates MovoSuite's list of locations and their associated device   groups, scope tags, and roles, provisioning groups, tags, and roles as necessary. If device location groups are in use, adds assigned devices to the respective location groups. |
| Group Tag Update           | Every hour, at 45 minutes past      | Updates AutoPilot group tag values for devices based on their assigned location. |
