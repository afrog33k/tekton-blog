{:title "Quick tip: Installing a software in linux using files in .run format"
:layout :post
:tags  ["linux" "ubuntu"]
:toc true}
The .run files are binary executable files. These files need to be executed to install the software. Such files are often considered as unsafe as we cannot find a way to uninstall them and we cannot say what the code will do to your system. But some games and apps are available that are packaged in this file format. Installing using .run file is rather easy.

First of all download the required .run file.

For example, in your terminal run the command:

**wget -c < URL to the .run file >**

(Get the .run file as you wish. I just mentioned **wget** here because it is one of my favorite GNU/Linux utilities. It enables a very nifty download of files from internet and the tab **\-c** can help you get data from a partially downloaded file. If the file to be downloaded is quite bulky and you don't trust your Internet connection then **\-c** tab is what you need.)

Method 1:

Go to the directory where the .run file is saved and run the following command in your terminal:

**chmod +x foo.run**

Here I have arbitrarily named my .run file as foo.run. Here we are using +x to give permission for the owner to execute the file as a program. (If we replace +x with ugo+x, then the user, group and others will get the permission to execute that file as well.)

Now run the executable file, that is, run the command :

**./foo.run**

Now the installer will run.

Method 2:

We can do the same steps rather interactively as below.

Right click the .run file and select properties. Under the permission tab check the box that says 'Allow executing file as program' and click close.

Double click the .run file and select 'Run in terminal'.

This will run the installer.

Both worked perfectly in Ubuntu 12.04. If different in other distros please let me know.
