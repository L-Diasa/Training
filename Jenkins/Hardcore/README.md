# Hardcore


### 1. Create a user and give him permission to read-only mode for Jinkins jobs without the access to edit or change settings
* Went to `Plugin Manager` through `Manage Jenkins`
* Searched `matrix` within available plugins and intalled `Matrix Authorization Strategy`
* Went to `Configure Global Security` through `Manage Jenkins`
* Under `Authorization` selected `Matrix-based security`
* And selected `Read` under `Job`

### 2. Create a parametrized job HelloUser which will ask for a user name as a parameter and output "Hello, username!" in the console
* Opened `Dashboard`, chose `New Item`, entered `HelloUser` for name and selected `Freestyle project` for creating this job
* Selected `This project is parameterized` in the general configuration of the job
* Added `String Parameter`, entered `username` for the name and `user` for the default value
* Added a build step - `Execute Windows batch command`, entered the command - `ECHO "Hello, %username%!"` and saved it
* Clicked on `Build with Parameters` , entered my name for the username and built the project

**Console Output:**
```
Started by user Lika Diasamidze
Running as SYSTEM
Building on the built-in node in workspace C:\ProgramData\Jenkins\.jenkins\workspace\HelloUser
[HelloUser] $ cmd /c call C:\WINDOWS\TEMP\jenkins5375289212112475458.bat

C:\ProgramData\Jenkins\.jenkins\workspace\HelloUser>ECHO "Hello, Lika!" 
"Hello, Lika!"

C:\ProgramData\Jenkins\.jenkins\workspace\HelloUser>exit 0 
Finished: SUCCESS
```

