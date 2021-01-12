{:title "Anti virus for Linux"
:layout :post
:tags  ["linux"]
:toc true}

Using an anti virus software in my Linux machine is something that I have not given much thought to. I know for the fact that the odds for a Linux system to get affected by a malware is pretty low. As of my understanding, the fact that Linux systems use open source software is a big bonus here. I mean, why would some one bother in sitting and writing a harmful program when everyone can see your code. Also crackers aim at a much elaborate target. I am sure they have better things to do than messing with some Linux users, which is only 2% of world computer users' population. Still, there are executable files that may get into your system via mails or flash drives. But in Linux, nothing will happen if you simply double click an executable file (provided you don't have Wine installed). It won't get executed unless you give it permission for execution. This is much unlikely to happen as Linux users are supposed to know what they are doing (Myself excluded!). And of course, there are many more reasons like user privileges, simplicity of kernal, etc.

But this doesn't mean that we don't need an anti virus software installed. For instance, as in my case, I thought of  using an anti virus software when my windows using friends started blaming me for spreading malwares via flash drives. And also, being a music junkie, I constantly give my phone a hard time copying downloaded files to it from my computer.

After going through several forums, I decided to go for clamAV. It is an absolutely open source anti virus software. You can install the package clamav or clamtk (If you want the GUI).

**sudo apt-get install clamav**

Now to start scanning, run the following command in the terminal.

**clamscan -r  <folder or file to be scanned>**

(-r as in recursive)

Now update your virus database definitions by running the command :

**freshclam** 

You may also want to uncomment the line that includes the path to the local socket in the clamd.conf file (/etc/clamav/clamd.conf).

Now we are good to go.
