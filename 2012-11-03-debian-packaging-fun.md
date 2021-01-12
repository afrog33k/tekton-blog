{:title "Debian Packaging Foo"
:layout :post
:tags  ["debian" "packaging]
:toc true}

NO CODING INVOLVED,WHATSOEVER... :-)
I've been working on debian packaging of diaspora for a while now. At some places, I'm still not completely sure what I'm doing. Anyways, the journey so far, has been fun (and not to mention,Educational!).

Now I'd like to explain what I've been doing actually.In my last post, I described  diaspora. It is a free personalized social networking site. It is built in Ruby on Rails platform. What we are basically trying to do is, make a package of this software in debian so that if we run in terminal the command :

sudo apt-get install diaspora

voila!. Diaspora is  in your PC. :-D

This free software diaspora,obviously,depends on numerous of libraries or gems (so they are called in Ruby programming language). Our job is to  convert each and every single one of these gems into deb file format.And for doing so there is a debian ruby package suite called gem2deb. So to convert the gem into deb format we will have to run:

`gem2deb Gem name`

Sounds easy,huh?But not so easy actually. Now comes the fun part-'tests'. :-).
In programming languages like C, we use many built-in libraries like stdio, conio, stdlib etc. To check if these libraries are working properly, We can simply make a program which  includes this library and implement functions that comes under the specified library.

For eg:
If you want to check if the stdio i.e standard I/O library is working properly a program like this can be used :
If the above program gives the output:

Then we can say that yes our standard I/O library is working properly.AFAIK,similar is the concept of test files in Ruby. They check if the ruby gems are working properly for our package.If the tests run without failure in the first run itself,yay..kudos to you:). If the  test  fails,you will have to go looking for the dependencies,the test files used and whatever makes it work.
Once you've got the tests running successfully(No,don't be happy yet...), you can say 'Hey,I've started packaging!':D. Yes,the interesting steps are yet to come. :-)
I will  start writing the steps I followed,the problems I faced and my yet-to-be-cleared doubts  in my upcoming posts. It will definitely help me recollect what all I've done so far and also I can use them later to brush up my memory. Also, I can refer these posts if someone asks me about packaging. On second thought, No, I don't think so.. :-D
If anyone want to know about packaging diaspora,I would refer to you the wonderful wiki page. It's still under construction, But it has already started proving quite legible and clean. :-)
https://wiki.debian.org/Diaspora/packaging/
Ciao.
