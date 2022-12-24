# Bring It On

### 1. Install Jenkins
* Did the same steps described in the I Can Win challenge

### 2. Create a task which will perform the following:
* #### Clone [the project](https://github.com/vitalliuss/helloci)
	* Did the same steps described in the I Can Win challenge
* #### Launch tests from the project in Java directory with the help of mvn test goal
	* Did the same steps described in the I Can Win challenge

### 3. Set up build triggers:
* #### Launch tests not later than 5 minutes after committing in git
	* Checked the check mark of Poll SCM for Build Triggers
	* Inserted `H/5 * * * *` into the Schedule
* #### Every workday at midnight
	* Checked the check mark of Build periodically for Build Triggers
	* Inserted `0 0 * * MON-FRI` into the Schedule

### 4. Publish “Java\target\surefire-reports\com.github.vitalliuss.helloci.AppTest.txt” file as an artifact
- Selected `Archive The Artefact` as a post build action in the Configuration of the project
- Inserted `Java\target\surefire-reports\com.github.vitalliuss.helloci.AppTest.txt` into the Files to Archive
- Built the project
- Viewed the artifact in the Last Successful Artifacts