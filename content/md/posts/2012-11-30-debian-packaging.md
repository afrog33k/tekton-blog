{:title "Debian Packaging"
:layout :post
:tags  ["debian" "packaging"]
:toc true}
Once you've picked a Gem and filed the ITP, it is time for you to start packaging. For this first run the command:

**gem2deb <Gem name>**

gem2deb is actually the Ruby Debian packaging suite. It is a set of tools to create Debian packages from Ruby software distributed with RubyGems. It will automatically run the tests for Ruby1.8 and Ruby1.9 as well. For running these tests gem2deb look for a Rakefile or a .rb file or a .Yaml file inside the debian directory. Running these tests successfully has always been a headache for me. Still not at all good at it.

Okay, So once you have completed running gem2deb successfully, it is time for you to edit the changelog, copyright and control files. Inside the changelog file you will have to include the bug number of the filed ITP and the author's name. In the copyright file, we have to include the copyright information like licence, author etc. of the actual gem as well as the debian package. Now the control file is the one I had real trouble dealing with. We have to include two neat descriptions about the Ruby library and its purpose. People decide whether to download that package or not reading this description, so make it catchy (I never could). Next check whether these files are clean using the command:

**lintian -iIEcv --pedantic --color auto ruby-foo\*.changes**

Next step is to build the package using build package and pbuilder, that is, run the following commands:

**dpkg-buildpackage**

**sudo pbuiler ruby-foo\*.dsc**

Once you have made sure that there are no errors and the tests are running perfectly, Yeah, that's pretty much it. Next step is to upload it to the mentors. For this you need an account in [https://alioth.debian.org/projects/pkg-ruby-extras/](https://alioth.debian.org/projects/pkg-ruby-extras/). Mine isn't activated yet. So I just push it to my gitorious repo. Before pushing we will have to import the file using git-import-dsc. This one also has been a tough one for me, as my knowledge in git is too vague. For more info on this step or a  any previous ones, checking out the Diaspora packaging page in debian wiki would be your best bet. Okay, So once you've pushed your imported file to the repo you will find three branches there, if you did it right- master, pristine-tar and upstream. And now it's time to wait for someone to review it for you.

I know this post would be of no use, because I've simply scribbled everything down in a rush. May be I'll blog about the issues I faced at each step. But sometime later.

