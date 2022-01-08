# Various-Strategy-For-Encrypting-Passwords
Config files for my GitHub profile.

## Description:
This Project will make you understand **how to encrpyt password** and store it in database. This Project is divided in three tasks to understand it better. </br>
**Task1:** Storing Password into Database directly without encrpyting.</br>
From Task1 we understand that our password is stored in database directly so it not secure at all, So we need to encrypt it. </br>
**Task2:** hash password using **md5** .</br>
**Task3:** encrypt password using **bcrypt** .

### 

## How to Install:
**Requirements for installing this project.**</br>
> Node.js </br>
> MongoDB


Step1: Download repository and open folder in any code editor. </br>
or, clone the repository.
```
https://github.com/chauhanvirat/Various-Strategy-For-Encrypting-Password
```
Step2: open terminal from that folder location.
```
cd Various-Strategy-For-Encrypting-Password-
```
Step3: Install dependencies 
```
npm install
```
Step4: Run app.js file
```
node app.js
```
![image](https://user-images.githubusercontent.com/49397471/127640419-1f74ac12-0c8b-447a-b03f-5b4536c3cf87.png)
![image](https://user-images.githubusercontent.com/49397471/127640798-1defaabb-7bb2-4b12-9285-51e9a5b000b5.png)

## New Approach:

It is crucial to keep users' passwords secure to protect against cyber-attacks. The first step is storing passwords on a secure database server.

## Key Points in our Project:


1. How to encrypt password using our New-algorithm proposed.

2. How this encryption key provides more security to stores password.

3. It stores your passwords on your system disk (locally) instead of any server keeping you safe in case of any data breach attack.

4. Without encryption key no one can see encrypted-password.

## Working

1. We have made a password encrypter and password manager written in bash with python3 as supportive backend for encrypting passwords and account password management.

2. It has it's own encryption algorithm which works based on a 5 digit encryption key which is a input from user.

3. Using this you can encrypt your password's, to make it more strong and store it in password vault.

## Why to use Password Encrypter and not other password managers ?

1. You don't get flexibility while using other encryption algorithms, but here based on 5 digit encryption key from 00000 to 99999 you get 100,000 different encrypted output based on key you entered.

2. It stores your passwords on your system disk instead of any server keeping you safe in case of any data breach attack.

3. All your password are stored in plain text, passwords are encrypted only at runtime and to get correct password correct 5 digit encryption key must be entered.

4. Stop using online password encrypters as you are giving your passwords to them and they might track you.

5. Really, is there any gurantee that password manager softwares will store your password at their server and never going to peek on them. Better you store them on your system disk.
