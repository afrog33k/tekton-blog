{:title "GNU Project Debugger"
:layout :post
:tags  ["linux"]
:toc true}
<!-- date: 2012-12-09 08:26:05.000000000 +05:30 -->
Today I came across a very nifty tool on my linux system. It is GNU Project Debugger a.k.a GDB. It is the standard debugger in UNIX. It lets you poke around your program and find out what is wrong with your program, if it crashed or gave you unexpected results. It can be used to debug programs written in Ada, Java, Pascal etc.( Although I haven't tried it yet on anything other than C programs). So, yeah, it is a very powerful tool. I played around with it for a little while and it seems pretty easy. I am sure if I give it a little more effort, I sure can make best friends with GDB pretty soon. I wish I knew  GDB six months ago when I kept getting segmentation faults in my Data structures lab.

To startup GDB all you need to do is, in your terminal, go to the folder where you have the executable code of your crashed program and run the following command :

**gdb <exe filename>**

for eg. :

**gdb ./a.out** 

(a.out being the default name for an executable file)

Once you did run that command, it will show some copyright information and finally you'll get a (gdb) prompt. Now you can poke around your executable source code as you wish. To run the program inside gdb all you need to do is run the command **run.** There are many nifty commands in there, like **next**\- to move around the program line-by-line, **print**\- to print the value of each variable, **break**\- to set the breakpoint (And this is a pretty good one. You can actually pause programs at a particular function or a line so that you can re-run the program n number of times from that breakpoint).

Some other powerful tools in GDB are :

*   display
*   info
*   continue
*   backtrace
*   frame

etc.

I am exploring all the cool stuffs that I can do with GDB and yeah, and it seems like I am getting the hang of it real quick.
