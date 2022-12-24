# I Can Win 

### 1. Install Jenkins
* Ensured Java was installed
* Downloaded binary from [here](https://jenkins.io/download/)
* Followed the guide & installed & configured it

### 2. Create a task which will perform the following:
* #### Clone [the project](https://github.com/vitalliuss/helloci)
	+ Created a new item as a freestyle project 
	+ Added Git to the Source Code Management
	+ Inserted the project link into Repositoy URL
	+ Made sure that Jenkins knew were git was located:
		- Opened Global Tool Configuration
		- Found path of git with the commad `where git` and inserted in the Path of The Executable 
		- Insterted the version number of git into the Name just because it`s a good practice
	+ Built the project
	
	**Console Output:**
	```
	Started by user Lika Diasamidze
	Running as SYSTEM
	Building on the built-in node in workspace C:\ProgramData\Jenkins\.jenkins\workspace\I Can Win
	The recommended git tool is: NONE
	No credentials specified
	 > C:\Program Files\Git\cmd\git.exe rev-parse --resolve-git-dir C:\ProgramData\Jenkins\.jenkins\workspace\I Can Win\.git # timeout=10
	Fetching changes from the remote Git repository
	 > C:\Program Files\Git\cmd\git.exe config remote.origin.url https://github.com/vitalliuss/helloci # timeout=10
	Fetching upstream changes from https://github.com/vitalliuss/helloci
	 > C:\Program Files\Git\cmd\git.exe --version # timeout=10
	 > git --version # 'git version 2.26.0.windows.1'
	 > C:\Program Files\Git\cmd\git.exe fetch --tags --force --progress -- https://github.com/vitalliuss/helloci +refs/heads/*:refs/remotes/origin/* # timeout=10
	 > C:\Program Files\Git\cmd\git.exe rev-parse "refs/remotes/origin/master^{commit}" # timeout=10
	Checking out Revision 71518a34152cb6c6039a2443ced60af30a31f14c (refs/remotes/origin/master)
	 > C:\Program Files\Git\cmd\git.exe config core.sparsecheckout # timeout=10
	 > C:\Program Files\Git\cmd\git.exe checkout -f 71518a34152cb6c6039a2443ced60af30a31f14c # timeout=10
	Commit message: "Merge pull request #16 from EvgeniyRozhenko/fix-pom-utf8"
	 > C:\Program Files\Git\cmd\git.exe rev-list --no-walk 71518a34152cb6c6039a2443ced60af30a31f14c # timeout=10
	Finished: SUCCESS
	```
* #### Launch tests from the project in Java directory with the help of mvn test goal
	+ Opened Global Tool Configuration and Added Maven:
		+ Inserted the path of maven into the Path of The Executable 
		+ Insterted the version number of git into the Name
	+  Added Build Step in the Configurations of the project:
		+ Chose invoke top-level Maven Targets as the step
		+ Chose the Maven version 
		+ Set the Goals to test
		+ Set POM to the location of the pom (which was Java/pom.xml)
	+ Built the project
	
	**Console Output:**
	```
	Started by user Lika Diasamidze
	Running as SYSTEM
	Building on the built-in node in workspace C:\ProgramData\Jenkins\.jenkins\workspace\I Can Win
	The recommended git tool is: NONE
	No credentials specified
	 > C:\Program Files\Git\cmd\git.exe rev-parse --resolve-git-dir C:\ProgramData\Jenkins\.jenkins\workspace\I Can Win\.git # timeout=10
	Fetching changes from the remote Git repository
	 > C:\Program Files\Git\cmd\git.exe config remote.origin.url https://github.com/vitalliuss/helloci # timeout=10
	Fetching upstream changes from https://github.com/vitalliuss/helloci
	 > C:\Program Files\Git\cmd\git.exe --version # timeout=10
	 > git --version # 'git version 2.26.0.windows.1'
	 > C:\Program Files\Git\cmd\git.exe fetch --tags --force --progress -- https://github.com/vitalliuss/helloci +refs/heads/*:refs/remotes/origin/* # timeout=10
	 > C:\Program Files\Git\cmd\git.exe rev-parse "refs/remotes/origin/master^{commit}" # timeout=10
	Checking out Revision 71518a34152cb6c6039a2443ced60af30a31f14c (refs/remotes/origin/master)
	 > C:\Program Files\Git\cmd\git.exe config core.sparsecheckout # timeout=10
	 > C:\Program Files\Git\cmd\git.exe checkout -f 71518a34152cb6c6039a2443ced60af30a31f14c # timeout=10
	Commit message: "Merge pull request #16 from EvgeniyRozhenko/fix-pom-utf8"
	 > C:\Program Files\Git\cmd\git.exe rev-list --no-walk 71518a34152cb6c6039a2443ced60af30a31f14c # timeout=10
	[I Can Win] $ cmd.exe /C '""C:\Program Files\apache-maven-3.8.6\bin\mvn.cmd"' -f Java/pom.xml test && exit %%ERRORLEVEL%%"
	[INFO] Scanning for projects...
	[INFO] 
	[INFO] ---------------< com.github.vitalliuss.helloci:hello-ci >---------------
	[INFO] Building hello-ci 1.0-SNAPSHOT
	[INFO] --------------------------------[ jar ]---------------------------------
	[INFO] 
	[INFO] --- maven-resources-plugin:2.6:resources (default-resources) @ hello-ci ---
	[INFO] Using 'UTF-8' encoding to copy filtered resources.
	[INFO] skip non existing resourceDirectory C:\ProgramData\Jenkins\.jenkins\workspace\I Can Win\Java\src\main\resources
	[INFO] 
	[INFO] --- maven-compiler-plugin:3.1:compile (default-compile) @ hello-ci ---
	[INFO] Changes detected - recompiling the module!
	[INFO] Compiling 2 source files to C:\ProgramData\Jenkins\.jenkins\workspace\I Can Win\Java\target\classes
	[INFO] 
	[INFO] --- maven-resources-plugin:2.6:testResources (default-testResources) @ hello-ci ---
	[INFO] Using 'UTF-8' encoding to copy filtered resources.
	[INFO] skip non existing resourceDirectory C:\ProgramData\Jenkins\.jenkins\workspace\I Can Win\Java\src\test\resources
	[INFO] 
	[INFO] --- maven-compiler-plugin:3.1:testCompile (default-testCompile) @ hello-ci ---
	[INFO] Changes detected - recompiling the module!
	[INFO] Compiling 1 source file to C:\ProgramData\Jenkins\.jenkins\workspace\I Can Win\Java\target\test-classes
	[INFO] 
	[INFO] --- maven-surefire-plugin:3.0.0-M1:test (default-test) @ hello-ci ---
	[INFO] 
	[INFO] -------------------------------------------------------
	[INFO]  T E S T S
	[INFO] -------------------------------------------------------
	[INFO] Running com.github.vitalliuss.helloci.AppTest
	[ERROR] Tests run: 5, Failures: 1, Errors: 0, Skipped: 1, Time elapsed: 0.291 s <<< FAILURE! - in com.github.vitalliuss.helloci.AppTest
	[ERROR] testShouldBeFailed(com.github.vitalliuss.helloci.AppTest)  Time elapsed: 0.044 s  <<< FAILURE!
	java.lang.AssertionError
		at com.github.vitalliuss.helloci.AppTest.testShouldBeFailed(AppTest.java:21)
	[INFO] 
	[INFO] Results:
	[INFO] 
	[ERROR] Failures: 
	[ERROR]   AppTest.testShouldBeFailed:21
	[INFO] 
	[ERROR] Tests run: 5, Failures: 1, Errors: 0, Skipped: 1
	[INFO] 
	[INFO] ------------------------------------------------------------------------
	[INFO] BUILD FAILURE
	[INFO] ------------------------------------------------------------------------
	[INFO] Total time:  13.935 s
	[INFO] Finished at: 2022-12-24T03:23:22+04:00
	[INFO] ------------------------------------------------------------------------
	[ERROR] Failed to execute goal org.apache.maven.plugins:maven-surefire-plugin:3.0.0-M1:test (default-test) on project hello-ci: There are test failures.
	[ERROR] 
	[ERROR] Please refer to C:\ProgramData\Jenkins\.jenkins\workspace\I Can Win\Java\target\surefire-reports for the individual test results.
	[ERROR] Please refer to dump files (if any exist) [date].dump, [date]-jvmRun[N].dump and [date].dumpstream.
	[ERROR] -> [Help 1]
	[ERROR] 
	[ERROR] To see the full stack trace of the errors, re-run Maven with the -e switch.
	[ERROR] Re-run Maven using the -X switch to enable full debug logging.
	[ERROR] 
	[ERROR] For more information about the errors and possible solutions, please read the following articles:
	[ERROR] [Help 1] http://cwiki.apache.org/confluence/display/MAVEN/MojoFailureException
	Build step 'Invoke top-level Maven targets' marked build as failure
	Finished: FAILURE
	```

### 3. Set up build triggers so that the task is performed every 5 minutes
* Checked check mark of Build periodically for Build Triggers
* Inserted `*/5 * * * *` into the Schedule
