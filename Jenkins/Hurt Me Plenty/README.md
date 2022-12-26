# Hurt Me Plenty


### 1. Change the server port for 8081
* Stoped the service
* Changed the port number in jenkins.xml
* Run the service
* Opened Configure System from Manage jenkins and set Jenkins URL at `http://localhost:8081/`


### 2. Create a node and set up a server so that the job is performed on a slave-node only
* Clicked on the Build Executeror Status and then on New Node
* Used the hostname for Name and marked Permanent Agent option
* Created a folder called slave and used its path for the remote root directory
* Defined relevant tags, such as win10, x64, chrome and ff, for the machine
* Chose the option `Only build with label expressions matching this node` for the Usage, and saved the new node
* Went to Configure Global Security and chose the option `Random` for the TCP port for JNLP agents, and saved the update
* Opened Manage Nodes from Manage Jenkins
* Opened Configuration of the new node from its settings
* Selected `Launch agent by connecting it to the controller` for launch method
* Clicked save and copied the line for running from agent command line: `java -jar agent.jar -jnlpUrl http://localhost:8081/manage/computer/LAPTOP%2DH54EVMR5/jenkins-agent.jnlp -secret 7d5d5a7d1d1ebb44860576f1faa4f32eb2f8fadc2c8b3864ce86a5689558caf0 -workDir "C:\slave"`
* Loaded agent.jar file into the slave location("C:\slave")
* Run the copied command for launching but I had to chage the command into `java -jar "C:\slave\agent.jar" -jnlpUrl http://localhost:8081/manage/computer/LAPTOP%2DH54EVMR5/jenkins-agent.jnlp -secret 7d5d5a7d1d1ebb44860576f1faa4f32eb2f8fadc2c8b3864ce86a5689558caf0 -workDir "C:\slave"` so that it could work, and checked if the last line said `INFO: Connected`
* Opened the configuration of Bring It On job
* Selected `Restrict where this project can be run` in General settings
* Wrote the name of the new node into the Label Expression
* Built the project
**Console Output:**
```
Started by user Lika Diasamidze
Running as SYSTEM
Building remotely on LAPTOP-H54EVMR5 (ff chrome win10 x64) in workspace C:\slave\workspace\Github Job
The recommended git tool is: NONE
No credentials specified
Cloning the remote Git repository
Cloning repository https://github.com/vitalliuss/helloci.git
 > C:\Program Files\Git\cmd\git.exe init C:\slave\workspace\Github Job # timeout=10
Fetching upstream changes from https://github.com/vitalliuss/helloci.git
 > C:\Program Files\Git\cmd\git.exe --version # timeout=10
 > git --version # 'git version 2.26.0.windows.1'
 > C:\Program Files\Git\cmd\git.exe fetch --tags --force --progress -- https://github.com/vitalliuss/helloci.git +refs/heads/*:refs/remotes/origin/* # timeout=10
 > C:\Program Files\Git\cmd\git.exe config remote.origin.url https://github.com/vitalliuss/helloci.git # timeout=10
 > C:\Program Files\Git\cmd\git.exe config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/* # timeout=10
Avoid second fetch
 > C:\Program Files\Git\cmd\git.exe rev-parse "refs/remotes/origin/master^{commit}" # timeout=10
Checking out Revision 71518a34152cb6c6039a2443ced60af30a31f14c (refs/remotes/origin/master)
 > C:\Program Files\Git\cmd\git.exe config core.sparsecheckout # timeout=10
 > C:\Program Files\Git\cmd\git.exe checkout -f 71518a34152cb6c6039a2443ced60af30a31f14c # timeout=10
Commit message: "Merge pull request #16 from EvgeniyRozhenko/fix-pom-utf8"
 > C:\Program Files\Git\cmd\git.exe rev-list --no-walk 71518a34152cb6c6039a2443ced60af30a31f14c # timeout=10
[Github Job] $ cmd.exe /C '""C:\Program Files\apache-maven-3.8.6\bin\mvn.cmd"' -f Java/pom.xml test && exit %%ERRORLEVEL%%"
[INFO] Scanning for projects...
[INFO] 
[INFO] ---------------< com.github.vitalliuss.helloci:hello-ci >---------------
[INFO] Building hello-ci 1.0-SNAPSHOT
[INFO] --------------------------------[ jar ]---------------------------------
[INFO] 
[INFO] --- maven-resources-plugin:2.6:resources (default-resources) @ hello-ci ---
[INFO] Using 'UTF-8' encoding to copy filtered resources.
[INFO] skip non existing resourceDirectory C:\slave\workspace\Github Job\Java\src\main\resources
[INFO] 
[INFO] --- maven-compiler-plugin:3.1:compile (default-compile) @ hello-ci ---
[INFO] Changes detected - recompiling the module!
[INFO] Compiling 2 source files to C:\slave\workspace\Github Job\Java\target\classes
[INFO] 
[INFO] --- maven-resources-plugin:2.6:testResources (default-testResources) @ hello-ci ---
[INFO] Using 'UTF-8' encoding to copy filtered resources.
[INFO] skip non existing resourceDirectory C:\slave\workspace\Github Job\Java\src\test\resources
[INFO] 
[INFO] --- maven-compiler-plugin:3.1:testCompile (default-testCompile) @ hello-ci ---
[INFO] Changes detected - recompiling the module!
[INFO] Compiling 1 source file to C:\slave\workspace\Github Job\Java\target\test-classes
[INFO] 
[INFO] --- maven-surefire-plugin:3.0.0-M1:test (default-test) @ hello-ci ---
[INFO] 
[INFO] -------------------------------------------------------
[INFO]  T E S T S
[INFO] -------------------------------------------------------
[INFO] Running com.github.vitalliuss.helloci.AppTest
[ERROR] Tests run: 5, Failures: 1, Errors: 0, Skipped: 1, Time elapsed: 0.339 s <<< FAILURE! - in com.github.vitalliuss.helloci.AppTest
[ERROR] testShouldBeFailed(com.github.vitalliuss.helloci.AppTest)  Time elapsed: 0.067 s  <<< FAILURE!
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
[INFO] Total time:  9.770 s
[INFO] Finished at: 2022-12-26T12:03:14+04:00
[INFO] ------------------------------------------------------------------------
[ERROR] Failed to execute goal org.apache.maven.plugins:maven-surefire-plugin:3.0.0-M1:test (default-test) on project hello-ci: There are test failures.
[ERROR] 
[ERROR] Please refer to C:\slave\workspace\Github Job\Java\target\surefire-reports for the individual test results.
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

### 3. Set up Job Config History and thinBackup
*  Opened Plugin Manager from Manage Jenkins
*  Installed `Job Configuration History` and `ThinBackup`